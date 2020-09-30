import React from "react";
import { Portal } from "../Portal/Portal";
import { Press } from "../Press/Press";
import "./ImageWithTooltip.css";
import classnames from "classnames";

type Props = {
  imageSource: string;
  imageAlt?: string;
  website?: string;
};

const ImageWithTooltip: React.FC<Props> = ({
  imageSource,
  imageAlt,
  website,
}) => {
  const [domRect, setDOMRect] = React.useState<DOMRect>();
  const tooltipRef = React.useRef<HTMLDivElement>(null);
  const [tooltipDOMRect, setTooltipDOMRect] = React.useState<DOMRect>();
  const onMouseOver = React.useCallback(
    (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
      const elm = e.target as HTMLElement;

      setDOMRect(elm.getBoundingClientRect());

      setTimeout(() => {
        if (tooltipRef.current) {
          setTooltipDOMRect(tooltipRef.current.getBoundingClientRect());
        }
      }, 250);
    },
    []
  );

  const onMouseOut = React.useCallback(() => {
    setDOMRect(undefined);
    setTooltipDOMRect(undefined);
  }, []);

  const onPress = React.useCallback(() => {
    window.open(website, "_blank");
  }, [website]);

  const visible = tooltipDOMRect != null;

  return (
    <Press onPress={onPress}>
      <img
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        className="grayscale highlightOnHover"
        alt={imageAlt}
        src={imageSource}
      />

      {domRect && (
        <Portal>
          <div
            ref={tooltipRef}
            className={classnames("tooltip", { visible, hidden: !visible })}
            style={{
              left:
                domRect.x + (domRect.width - (tooltipDOMRect?.width ?? 0)) / 2,
              top: domRect.y + domRect.height + 4,
            }}
          >
            {imageAlt}
          </div>
        </Portal>
      )}
    </Press>
  );
};

export { ImageWithTooltip };
