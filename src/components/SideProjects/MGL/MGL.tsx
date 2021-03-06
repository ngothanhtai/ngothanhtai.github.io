import React from "react";
import { Images } from "../../../assets/images";
import { Press } from "../../Press/Press";
import { Spacer } from "../../Spacer/Spacer";

const MGL: React.FC = () => {
  return (
    <div className="flex flexColumn">
      <div className="hidden description fadeIn1">Find gay friends,</div>
      <Spacer height={6} />
      <div className="hidden description fadeIn2">
        Find someone to delete the app.
      </div>
      <Spacer height={24} />
      <div className="flex flexRowResponsive jcCenter">
        <img
          alt="My Gay Life (MGL) - Gay chat"
          className="hidden fadeIn3"
          width={320}
          height={643}
          src={Images.sideProjects.mglScreenshot}
        />
        <Spacer width={24} />
        <div>
          <Spacer height={24} />
          <div className="flex flexColumn aiCenter">
            <Press
              url="https://apps.apple.com/us/app/mgl-gay-chat/id1514743623"
              onPress={(url) => window.open(url, "_blank")}
            >
              <img
                className="hidden fadeIn3"
                width={210}
                alt="Appstore"
                src={Images.sideProjects.storeDownloadBadges.appstore}
              />
            </Press>

            <Spacer height={6} />

            <Press
              url="https://play.google.com/store/apps/details?id=com.mgl&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"
              onPress={(url) => window.open(url, "_blank")}
            >
              <img
                className="hidden fadeIn3"
                width={210}
                alt="Playstore"
                src={Images.sideProjects.storeDownloadBadges.playstore}
              />
            </Press>
          </div>
        </div>
      </div>
    </div>
  );
};

export { MGL };
