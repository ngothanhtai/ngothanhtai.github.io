import React from "react";
import { Images } from "../../../assets/images";
import { Press } from "../../Press/Press";
import { Spacer } from "../../Spacer/Spacer";

const WhatTheFOOD: React.FC = () => {
  return (
    <div className="flex flexColumn">
      <div className="description">
        <ul>
          <li className="hidden fadeIn1">
            1. Take a picture of any menu that has texts
          </li>
          <Spacer height={12} />
          <li className="hidden fadeIn2">
            2. Click on the highlight texts with red border
          </li>
          <Spacer height={12} />
          <li className="hidden fadeIn3">
            3. See pictures or translation by selected text
          </li>
        </ul>
      </div>
      <Spacer height={24} />

      <div className="flex flexColumn aiCenter jcCenter">
        <Press
          onPress={() =>
            window.open(
              "https://apps.apple.com/us/app/what-the-food/id1490488926",
              "_blank"
            )
          }
        >
          <img
            className="hidden fadeIn3"
            width={150}
            alt="Appstore"
            src={Images.sideProjects.storeDownloadBadges.appstore}
          />
        </Press>

        <Spacer height={6} />

        <Press
          onPress={() =>
            window.open(
              "https://play.google.com/store/apps/details?id=com.walter.whatthefood",
              "_blank"
            )
          }
        >
          <img
            className="hidden fadeIn3"
            width={150}
            alt="Playstore"
            src={Images.sideProjects.storeDownloadBadges.playstore}
          />
        </Press>
      </div>
    </div>
  );
};

export { WhatTheFOOD };
