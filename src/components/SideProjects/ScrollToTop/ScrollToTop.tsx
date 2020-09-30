import React from "react";
import { Images } from "../../../assets/images";
import { Press } from "../../Press/Press";
import { Spacer } from "../../Spacer/Spacer";

const ScrollToTop: React.FC = () => {
  return (
    <div className="flex flexColumn">
      <div className="hidden description fadeIn1">
        Scroll to top is an extension that helps you immediately scroll to the
        top of the page and click again to return the previous scroll position.
      </div>

      <Spacer height={6} />

      <div className="hidden description fadeIn2">
        <img
          src={Images.sideProjects.scrollToTopScreenshot}
          alt="Scroll to the top of the page screenshot"
          width={320}
        />
      </div>

      <Spacer height={24} />

      <Press
        onPress={() =>
          window.open(
            "https://apps.apple.com/vn/app/scroll-to-the-top-of-the-page/id1532648692?mt=12",
            "_blank"
          )
        }
      >
        <img
          className="hidden fadeIn3"
          width={150}
          alt="Mac App Store"
          src={Images.sideProjects.storeDownloadBadges.macAppStore}
        />
      </Press>
    </div>
  );
};

export { ScrollToTop };
