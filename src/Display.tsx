import React, { FC } from "react";

export const Display: FC<{ value: string }> = ({ value }) => {
  while (value.length < 3) {
    value = "0" + value;
  }
  return (
    <span style={{ background: "black", color: "red", padding: "2px 5px" }}>
      {value}
    </span>
  );
};
