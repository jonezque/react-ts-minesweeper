import React, { FC } from "react";
import { Display } from "./Display";
import { cell } from "./utils";

export const Header: FC<{
  mineCount: number;
  time: number;
  columns: number;
  reset: () => void;
}> = ({ mineCount, time, columns, reset }) => (
  <div
    style={{
      padding: "5px",
      minWidth: columns * cell + "px",
      display: "flex",
      justifyContent: "space-between"
    }}
  >
    <Display value={mineCount + ""} />
    <button className="smile-button" onClick={reset} />
    <Display value={time + ""} />
  </div>
);
