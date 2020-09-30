import React from "react";
import { Images } from "../../../assets/images";
import { Press } from "../../Press/Press";
import { Spacer } from "../../Spacer/Spacer";

const DisplayConnectedWifiName: React.FC = () => {
  return (
    <div className="flex flexColumn">
      <div className="hidden description fadeIn1">
        The app displays connected Wifi name and signal quality right in the
        menu bar. The use case for this is when you care about which Wifi name
        you are using, for example, you have a personal Wifi hotspot, you are at
        a coffee shop, and you don't want to waste the cellular data you will
        use the Wifi in the coffee shop instead. However, it will switch back to
        your Wifi hotspot occasionally.
      </div>

      <Spacer height={6} />

      <div className="hidden description fadeIn2">
        With this app, it will show the Wifi name directly on the menu bar so
        you can notice the change immediately on every 15 seconds, instead of
        clicking on the Wifi icon to see which Wifi you are using. A small
        utility to make a better experience for you.
      </div>

      <Spacer height={6} />

      <div className="hidden description fadeIn3">
        <img
          src={Images.sideProjects.displayConnectedWifiNameScreenshot}
          alt="Display connected Wifi name screenshot"
          width={320}
        />
      </div>

      <Spacer height={24} />

      <Press
        onPress={() =>
          window.open(
            "https://apps.apple.com/vn/app/display-connected-wifi-name/id1526918434?mt=12",
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

export { DisplayConnectedWifiName };
