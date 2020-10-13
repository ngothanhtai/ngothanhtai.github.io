import classNames from "classnames";
import React from "react";
import { Images } from "../../assets/images";
import {
  isSmallScreen,
  useVisibility,
  useWindowSize,
} from "../../utils/window";
import { Press } from "../Press/Press";
import { Spacer } from "../Spacer/Spacer";

type Props = {
  video: string;
  loop?: boolean;
  scale?: number;
  poster?: string;
};

const baseHeight = 800;
const baseWidth = 800;

const Phone: React.FC<Props> = ({ video, loop = false, poster }) => {
  const [ended, setEnded] = React.useState(false);

  const [windowWidth, windowHeight] = useWindowSize();

  const scaleX = windowWidth / baseWidth;
  const scaleY = windowHeight / baseHeight;
  const scale = isSmallScreen(windowWidth)
    ? scaleX
    : Math.max(0.6, Math.min(1, (scaleX + scaleY) / 2));
  const { width, height } = { width: 361 * scale, height: 710 * scale };
  const [visible, ref] = useVisibility<HTMLVideoElement>({
    visiblePercentageByContent: 0.6,
  });

  const playVideo = React.useCallback(() => {
    if (ref.current) {
      ref.current.currentTime = 0;
      ref.current.play();
      setEnded(false);
    }
  }, [ref]);

  React.useEffect(() => {
    if (visible) {
      playVideo();
    }

    // eslint-disable-next-line
  }, [visible]);

  const videoStyle = {
    top: 27.3 * scale,
    left: 29 * scale,
    width: 303 * scale,
  };
  return (
    <div className="flex flexColumn aiCenter">
      <div
        className="relative"
        style={{
          width,
          height,
        }}
      >
        <img
          src={poster}
          alt="video poster"
          className="absolute"
          style={videoStyle}
        />
        <video
          ref={ref}
          className="absolute"
          style={videoStyle}
          controls={false}
          loop={loop}
          autoPlay={false}
          muted
          playsInline
          onEnded={() => setEnded(true)}
          poster={poster}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support HTML video.
        </video>

        <img
          src={Images.phone.src}
          srcSet={Images.phone.srcSet}
          alt="iPhone"
          className="absolute"
          width={width}
          height={height}
        />
      </div>
      <Spacer height={6} />
      <div className={classNames({ hidden: !ended || loop })}>
        <Press
          url=""
          onPress={() => {
            playVideo();
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
