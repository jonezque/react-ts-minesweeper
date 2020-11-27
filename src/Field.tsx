import React, { FC, useRef, useState, useEffect } from "react";
import { cell, rectHW } from "./utils";

const drawLines = (
  columns: number,
  rows: number,
  ctx: CanvasRenderingContext2D
) => {
  ctx.beginPath();
  ctx.clearRect(0, 0, columns * rectHW, rows * rectHW);
  ctx.strokeStyle = "darkgrey";

  for (let i = 0; i < columns; ++i) {
    for (let j = 0; j < rows; ++j) {
      ctx.moveTo(i * rectHW, j * rectHW);
      ctx.lineTo(i * rectHW + rectHW, j * rectHW);
      ctx.lineTo(i * rectHW + rectHW, j * rectHW + rectHW);
      ctx.lineTo(i * rectHW, j * rectHW + rectHW);
      ctx.lineTo(i * rectHW, j * rectHW);
    }
  }
  ctx.stroke();
  ctx.closePath();
};

const hoverReact = (x: number, y: number, ctx: CanvasRenderingContext2D) => {
  ctx.beginPath();
  ctx.strokeStyle = "black";

  ctx.moveTo(x * rectHW, y * rectHW);
  ctx.lineTo(x * rectHW + rectHW, y * rectHW);
  ctx.lineTo(x * rectHW + rectHW, y * rectHW + rectHW);
  ctx.lineTo(x * rectHW, y * rectHW + rectHW);
  ctx.lineTo(x * rectHW, y * rectHW);

  ctx.stroke();
  ctx.closePath();
};

export const Field: FC<{
  rows: number;
  columns: number;
  startGame: (x: number, y: number) => void;
  markCell: (x: number, y: number) => void;
  mines: Array<{ x: number; y: number }>;
  marked: Array<{ x: number; y: number }>;
  numbers: Array<{ x: number; y: number; value: number }>;
  openFields: Array<{ x: number; y: number }>;
  revealMines: boolean;
}> =
  ({
    columns,
    rows,
    startGame,
    mines,
    numbers,
    openFields,
    markCell,
    marked,
    revealMines
  }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const [x, setX] = useState(-1);
    const [y, setY] = useState(-1);

    useEffect(() => {
      const canvas = canvasRef.current!;
      const ctx = canvas.getContext("2d")!;
      canvas.height = rows * rectHW;
      canvas.width = columns * rectHW;
      ctx.textBaseline = "middle";
      ctx.textAlign = "center";
      ctx.font = "16px Arial";
      ctx.fillStyle = "grey";

      drawLines(columns, rows, ctx);
      if (x !== -1 && y !== -1) {
        hoverReact(x, y, ctx);
      }

      for (const { x, y } of openFields) {
        if (mines.find(m => m.x === x && m.y === y)) {
          continue;
        }
        const num = numbers.find(m => m.x === x && m.y === y);
        if (!num) {
          return;
        }
        ctx.fillStyle = "grey";
        if (num.value !== 0) {
          ctx.fillText(
            num.value + "",
            x * rectHW + rectHW / 2,
            y * rectHW + rectHW / 2
          );
        } else {
          ctx.fillRect(x * rectHW, y * rectHW, rectHW, rectHW);
        }
      }

      for (const { x, y } of marked) {
        ctx.fillText("!", x * rectHW + rectHW / 2, y * rectHW + rectHW / 2);
      }

      if (!revealMines) {
        return;
      }

      ctx.fillStyle = "red";
      for (const { x, y } of mines) {
        ctx.fillRect(x * rectHW, y * rectHW, rectHW, rectHW);
      }

      ctx.fillStyle = "grey";
      for (const { x, y } of marked) {
        ctx.fillText("!", x * rectHW + rectHW / 2, y * rectHW + rectHW / 2);
      }
    }, [x, y, mines, columns, rows, openFields, numbers, marked, revealMines]);

    useEffect(() => {
      const canvas = canvasRef.current!;

      const onClick = (evt: MouseEvent) => {
        if (revealMines) {
          return;
        }
        startGame(x, y);
      };
      canvas.addEventListener("click", onClick);

      const onContextMenu = (evt: MouseEvent) => {
        evt.preventDefault();
        if (revealMines) {
          return;
        }
        markCell(x, y);
      };
      canvas.addEventListener("contextmenu", onContextMenu);

      return () => {
        canvas.removeEventListener("click", onClick);
        canvas.removeEventListener("contextmenu", onContextMenu);
      };
    }, [x, y, startGame, revealMines, markCell]);

    useEffect(() => {
      const canvas = canvasRef.current!;


      const hover = (evt: MouseEvent) => {
        if (revealMines) {
          return;
        }
        setX(Math.floor(evt.offsetX / cell));
        setY(Math.floor(evt.offsetY / cell));
      };
      canvas.addEventListener("mousemove", hover);

      const leave = () => {
        if (revealMines) {
          return;
        }
        setX(-1);
        setY(-1);
      };
      canvas.addEventListener("mouseleave", leave);

      return () => {
        canvas.removeEventListener("mousemove", hover);
        canvas.removeEventListener("mouseleave", leave);
      };
    }, [columns, revealMines, rows]);

    return (
      <div style={{ padding: "5px" }}>
        <div
          style={{
            width: cell * columns + "px",
            height: cell * rows + "px"
          }}
        >
          <canvas
            ref={canvasRef}
            style={{
              width: "100%",
              height: "100%"
            }}
          />
        </div>
      </div>
    );
  }

