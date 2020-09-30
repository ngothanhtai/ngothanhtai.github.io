import React from "react";
import { Sounds } from "../../assets/sounds";
import "./Press.css";

type Props = {
  onPress(): void;
  pressDelay?: number;
};

const audio = new Audio(Sounds.click);
audio.preload = "auto";

const Press: React.FC<Props> = ({ children, onPress, pressDelay = 450 }) => {
  const onMouseUp = React.useCallback(() => {
    audio.play();

    setTimeout(onPress, pressDelay);
  }, [onPress, pressDelay]);

  return (
    <div onMouseUp={onMouseUp} className="cursor-pointer scalingBase">
      {children}
    </div>
  );
};

export { Press };
