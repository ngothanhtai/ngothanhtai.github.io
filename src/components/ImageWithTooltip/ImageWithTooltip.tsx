import React from "react";
import { Press } from "../Press/Press";
import "./ImageWithTooltip.css";
import { Tooltip } from "../Tooltip/Tooltip";

type Props = {
  imageSource: string;
  imageAlt: string;
  website: string;
};

const ImageWithTooltip: React.FC<Props> = ({
  imageSource,
  imageAlt,
  website,
}) => {
  const onPress = React.useCallback((url) => {
    window.open(url, "_blank");
  }, []);

  return (
    <Press url={website} onPress={onPress}>
      <Tooltip text={imageAlt}>
        <img
          className="grayscale highlightOnHover"
          alt={imageAlt}
          src={imageSource}
        />
      </Tooltip>
    </Press>
  );
};

export { ImageWithTooltip };
