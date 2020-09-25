import React from "react";
import classnames from "classnames";
import "./Press.css";

type Props = {
  onPress(): void;
};

const Press: React.FC<Props> = ({ children, onPress }) => {
  const [scalingIn, setScaleIn] = React.useState(false);

  const onMouseDown = React.useCallback(() => {
    setScaleIn(true);
  }, []);

  const onMouseUp = React.useCallback(() => {
    setScaleIn(false);

    setTimeout(onPress, 450);
  }, [onPress]);

  return (
    <div
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className={classnames("cursor-pointer scalingBase", {
        scalingIn,
      })}
    >
      {children}
    </div>
  );
};

export { Press };
