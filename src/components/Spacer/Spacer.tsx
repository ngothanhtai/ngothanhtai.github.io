import React from "react";

type Props = {
  width?: number;
  height?: number;
};

const Spacer: React.FC<Props> = ({ width, height }) => {
  return <div style={{ width, height }} />;
};

export { Spacer };
