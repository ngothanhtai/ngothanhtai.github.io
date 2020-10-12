import classNames from "classnames";
import React from "react";
import { isMatchHashUrl, updateHashUrl } from "../../../utils/url";
import { Press } from "../../Press/Press";
import { Spacer } from "../../Spacer/Spacer";
import "./SideProjectItem.css";

type Props = {
  data: {
    name: string;
    publishDate: string;
    content?: React.ReactNode;
    anchorHash: string;
    icon?: string;
    onPress?(url: string): void;
    url: string;
  };
};

const SideProjectItem: React.FC<Props> = ({
  data: { name, publishDate, content, anchorHash, icon, onPress, url },
}) => {
  const [show, setShow] = React.useState(isMatchHashUrl(anchorHash));

  return (
    <>
      <a id={anchorHash} href={`#${anchorHash}`} className="textDecorationNone">
        &nbsp;
      </a>
      <div
        className={classNames("sideProjectItem", { sideProjectItemOpen: show })}
      >
        <div>
          <div className="flex flexRow aiCenter cursorPointer">
            <Spacer width={6} />
            <Press
              url={url}
              pressDelay={250}
              onPress={(url) => {
                if (onPress != null) {
                  return onPress(url);
                }
                setShow(!show);

                updateHashUrl(anchorHash);
              }}
            >
              <div className="flex flexRow highlightOnHover">
                {icon && (
                  <>
                    <img
                      src={icon}
                      height={50}
                      alt={name}
                      className="appIcon"
                    />
                    <Spacer width={6} />
                  </>
                )}
                <div className="flex flexColumn jcCenter">
                  <div className="subtitle fw500">{name}</div>
                  <Spacer height={2} />
                  <div className="label">Publish date: {publishDate}</div>
                </div>
              </div>
            </Press>
          </div>
          {show && (
            <>
              <Spacer height={12} />
              <div className="flex flexRow cursorDefault">
                <Spacer width={24} />
                {content}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export { SideProjectItem };
