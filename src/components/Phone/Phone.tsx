import classNames from "classnames";
import React from "react";
import { Images } from "../../assets/images";
import { Press } from "../Press/Press";
import { Spacer } from "../Spacer/Spacer";
import "./Phone.css";

type Props = {
  video: string;
};

const Phone: React.FC<Props> = ({ video }) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [ended, setEnded] = React.useState(false);

  return (
    <div className="flex flexColumn aiCenter">
      <div className="phoneContainer">
        <video
          ref={videoRef}
          className="phoneVideo"
          controls={false}
          loop={false}
          autoPlay
          muted
          onEnded={() => setEnded(true)}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
        <img
          src={Images.phone.src}
          srcSet={Images.phone.srcSet}
          alt="iPhone"
          className="absolute"
        />
      </div>
      <Spacer height={6} />
      <div className={classNames({ hidden: !ended })}>
        <Press
          url=""
          onPress={() => {
            videoRef.current?.play();
            setEnded(false);
          }}
        >
          <div className="flex flexRow aiCenter">
            <div className="body fw500">Replay</div>
            <Spacer width={6} />
            <div>
              <img src={Images.replay} width={18} alt="Replay icon" />
            </div>
          </div>
        </Press>
      </div>
    </div>
  );
};

export { Phone };
