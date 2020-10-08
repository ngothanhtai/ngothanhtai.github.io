import React from "react";
import { Sounds } from "../../assets/sounds";
import "./Press.css";

type Props = {
  url: string;
  onPress(url: string): void;
  pressDelay?: number;
};

const audio = new Audio(Sounds.click);
audio.preload = "auto";

const Press: React.FC<Props> = ({
  children,
  onPress,
  url,
  pressDelay = 450,
}) => {
  const onMouseUp = React.useCallback(() => {
    const cloneAudio = audio.cloneNode() as HTMLAudioElement;
    cloneAudio.play();

    setTimeout(() => onPress(url), pressDelay);
  }, [onPress, pressDelay, url]);

  return (
    // why did we add a tag here?
    // > to allow open the link when exporting the page as PDF
    <a
      href={url}
      className="textDecorationNone"
      onClick={(e) => e.preventDefault()}
    >
      <div onMouseUp={onMouseUp} className="cursor-pointer scalingBase">
        {children}
      </div>
    </a>
  );
};

export { Press };
