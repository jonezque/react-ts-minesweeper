import React, { FC, useEffect, useState, useCallback, useRef } from "react";
import { Header } from "./Header";
import { Field } from "./Field";

type Point = { x: number; y: number };
type Points = Array<Point>;

const count = 10;
const rowCount = 10;
const columnCount = 10;

const openNearCells = (
  numbers: Array<{ x: number; y: number; value: number }>,
  x: number,
  y: number,
  rows: number,
  columns: number,
  result: Points
) => {
  const toCheck: Points = [];
  if (
    x !== 0 &&
    y !== 0 &&
    !result.find((p) => p.x === x - 1 && p.y === y - 1)
  ) {
    toCheck.push({ x: x - 1, y: y - 1 });
  }
  if (y !== 0 && !result.find((p) => p.x === x && p.y === y - 1)) {
    toCheck.push({ x, y: y - 1 });
  }
  if (
    x !== columns - 1 &&
    y !== 0 &&
    !result.find((p) => p.x === x + 1 && p.y === y - 1)
  ) {
    toCheck.push({ x: x + 1, y: y - 1 });
  }
  if (x !== 0 && !result.find((p) => p.x === x - 1 && p.y === y)) {
    toCheck.push({ x: x - 1, y });
  }
  if (x !== columns - 1 && !result.find((p) => p.x === x + 1 && p.y === y)) {
    toCheck.push({ x: x + 1, y });
  }
  if (
    x !== 0 &&
    y !== rows - 1 &&
    !result.find((p) => p.x === x - 1 && p.y === y + 1)
  ) {
    toCheck.push({ x: x - 1, y: y + 1 });
  }
  if (y !== rows - 1 && !result.find((p) => p.x === x && p.y === y + 1)) {
    toCheck.push({ x, y: y + 1 });
  }
  if (
    x !== columns - 1 &&
    y !== rows - 1 &&
    !result.find((p) => p.x === x + 1 && p.y === y + 1)
  ) {
    toCheck.push({ x: x + 1, y: y + 1 });
  }

  result.push(...toCheck);
  for (const point of toCheck) {
    const num = numbers.find((n) => n.x === point.x && n.y === point.y);
    if (num?.value === 0) {
      openNearCells(numbers, point.x, point.y, rows, columns, result);
    }
  }
};

export const App: FC = () => {
  const rowRef = useRef<HTMLInputElement>(null);
  const columnRef = useRef<HTMLInputElement>(null);
  const countRef = useRef<HTMLInputElement>(null);
  const timerId = useRef<NodeJS.Timer>(-1 as any);
  const [mineCount, setMineCount] = useState(count);
  const [marked, setMarked] = useState<Points>([]);
  const [time, setTime] = useState(0);
  const [rows, setRows] = useState(rowCount);
  const [columns, setColumns] = useState(columnCount);
  const [mines, setMines] = useState<Points>([]);
  const [numbers, setNumbers] = useState<
    Array<{ x: number; y: number; value: number }>
  >([]);
  const [openFields, setOpenFields] = useState<Points>([]);
  const [isClick, setIsClick] = useState(false);
  const [revealMines, setReavelMines] = useState(false);

  const reset = useCallback(() => {
    clearInterval(timerId.current);
    setTime(0);
    setMarked([]);
    setNumbers([]);
    setOpenFields([]);
    setMines([]);
    setReavelMines(false);
  }, []);

  useEffect(() => {
    if (!rowRef.current || !columnRef.current || !countRef.current) {
      return;
    }
    rowRef.current.value = rowCount + "";
    columnRef.current.value = columnCount + "";
    countRef.current.value = count + "";
  }, []);

  const onUpdate = () => {
    reset();
    const r = Number(rowRef.current?.value);
    const c = Number(columnRef.current?.value);
    const m = Number(countRef.current?.value);

    if (Number.isNaN(r) || Number.isNaN(c) || Number.isNaN(m)) {
      alert("bad values");
      return;
    }
    if (r * c < m) {
      alert("bad values");
      return;
    }

    setMineCount(m);
    setRows(r);
    setColumns(c);
  };

  const startGame = useCallback(
    (x: number, y: number) => {
      if (!mines.length) {
        const id = x + y * columns;
        const set = new Set<number>([id]);

        while (set.size !== mineCount + 1) {
          set.add(Math.floor(Math.random() * rows * columns));
        }
        set.delete(id);

        setMines(
          Array.from(set).map((id) => {
            const x = id % columns;
            const y = Math.floor(id / columns);
            return { x, y };
          })
        );
        setTime((t) => 1);
        timerId.current = setInterval(() => {
          setTime((t) => t + 1);
        }, 1000);
      }
      if (marked.find((f) => f.x === x && f.y === y)) {
        return;
      }
      const field = openFields.find((f) => f.x === x && f.y === y);
      if (!field) {
        setOpenFields((arr) => [...arr, { x, y }]);
        setIsClick(true);
      }
    },

    [mines, mineCount, rows, columns, openFields, marked]
  );

  const markCell = useCallback(
    (x: number, y: number) => {
      if (openFields.find((m) => m.x === x && m.y === y)) {
        return;
      }
      const idx = marked.findIndex((m) => m.x === x && m.y === y);
      if (idx !== -1) {
        setMarked((arr) => arr.filter((_, i) => i !== idx));
      } else if (marked.length !== mineCount) {
        setMarked((arr) => [...arr, { x, y }]);
      }
    },
    [mineCount, marked, openFields]
  );

  useEffect(() => {
    const result: Array<{ x: number; y: number; value: number }> = [];

    for (let i = 0; i < columns; ++i) {
      for (let j = 0; j < rows; ++j) {
        if (mines.find((m) => m.x === i && m.y === j)) {
          continue;
        }

        let count = 0;
        if (j !== 0 && i !== 0) {
          const mine = mines.find((m) => m.x === i - 1 && m.y === j - 1);
          if (mine) {
            count++;
          }
        }

        if (j !== 0) {
          const mine = mines.find((m) => m.x === i && m.y === j - 1);
          if (mine) {
            count++;
          }
        }

        if (j !== 0 && i !== columns - 1) {
          const mine = mines.find((m) => m.x === i + 1 && m.y === j - 1);
          if (mine) {
            count++;
          }
        }

        if (i !== 0) {
          const mine = mines.find((m) => m.x === i - 1 && m.y === j);
          if (mine) {
            count++;
          }
        }

        if (i !== columns - 1) {
          const mine = mines.find((m) => m.x === i + 1 && m.y === j);
          if (mine) {
            count++;
          }
        }

        if (i !== 0 && j !== rows - 1) {
          const mine = mines.find((m) => m.x === i - 1 && m.y === j + 1);
          if (mine) {
            count++;
          }
        }

        if (j !== rows - 1) {
          const mine = mines.find((m) => m.x === i && m.y === j + 1);
          if (mine) {
            count++;
          }
        }

        if (i !== columns - 1 && j !== rows - 1) {
          const mine = mines.find((m) => m.x === i + 1 && m.y === j + 1);
          if (mine) {
            count++;
          }
        }
        result.push({ x: i, y: j, value: count });
      }
    }
    setNumbers(result);
  }, [columns, mines, rows]);

  useEffect(() => {
    if (!openFields.length || !isClick) {
      return;
    }

    setIsClick(false);
    const { x, y } = openFields[openFields.length - 1];
    const field = mines.find((m) => m.x === x && m.y === y);
    if (field) {
      alert("you lost");
      setReavelMines(true);
      return;
    }
    const num = numbers.find((m) => m.x === x && m.y === y);
    if (!num) {
      return;
    }

    if (num.value === 0) {
      const result: Points = [...openFields];
      openNearCells(numbers, x, y, rows, columns, result);
      setOpenFields(result);
    }
  }, [openFields, numbers, mines, rows, columns, isClick]);

  useEffect(() => {
    if (openFields.length + mineCount === rows * columns) {
      alert("win");
      clearInterval(timerId.current);
    }
  }, [openFields, mineCount, rows, columns]);

  return (
    <div
      style={{
        background: "#eeeeee",
        display: "inline-flex",
        flexDirection: "column",
      }}
    >
      <Header
        mineCount={mineCount - marked.length}
        time={time}
        columns={columns}
        reset={reset}
      />
      <Field
        rows={rows}
        columns={columns}
        startGame={startGame}
        mines={mines}
        numbers={numbers}
        openFields={openFields}
        marked={marked}
        markCell={markCell}
        revealMines={revealMines}
      />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ display: "grid", gridTemplateColumns: "100px 50px" }}>
          <label style={{ display: "contents" }}>
            mine count:
            <input ref={countRef} />
          </label>
          <label style={{ display: "contents" }}>
            rows:
            <input ref={rowRef} />
          </label>
          <label style={{ display: "contents" }}>
            columns:
            <input ref={columnRef} />
          </label>
          <button style={{ gridColumn: "1 / span 2" }} onClick={onUpdate}>
            update
          </button>
        </div>
      </div>
    </div>
  );
};
