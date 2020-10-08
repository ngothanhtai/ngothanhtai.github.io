import React from "react";
import { Images } from "../../assets/images";
import { Press } from "../Press/Press";
import { Tooltip } from "../Tooltip/Tooltip";
import "./ContactInformation.css";

const ContactInformation: React.FC = () => {
  const emailHyperLink = "mailto:codesigngo@gmail.com";
  const mobilePhoneHyperLink = "tel:+84908873436";
  const linkedInHyperLink = "https://linkedin.com/in/ngothanhtai";
  const githubHyperLink = "https://github.com/ngothanhtai";
  const locationHyperLink =
    "https://www.google.com/maps/place/Vietnam/@15.7477571,101.4151052,6z/data=!3m1!4b1!4m5!3m4!1s0x31157a4d736a1e5f:0xb03bb0c9e2fe62be!8m2!3d14.058324!4d108.277199";

  return (
    <div className="flex flexRow">
      <Press url={emailHyperLink} onPress={(url) => window.open(url)}>
        <Tooltip text="codesigngo@gmail.com">
          <div className="flex aiCenter jcCenter highlightOnHover contactInfoIcon">
            <span
              role="img"
              aria-label="Email"
              className="label pointerEventsNone"
            >
              📧
            </span>
          </div>
        </Tooltip>
      </Press>

      <Press url={mobilePhoneHyperLink} onPress={(url) => window.open(url)}>
        <Tooltip text="+84 908 87 34 36">
          <div className="flex aiCenter jcCenter highlightOnHover contactInfoIcon">
            <span
              role="img"
              aria-label="Mobile phone"
              className="label pointerEventsNone"
            >
              📞
            </span>
          </div>
        </Tooltip>
      </Press>

      <Press
        url={linkedInHyperLink}
        onPress={(url) => window.open(url, "_blank")}
      >
        <Tooltip text="LinkedIn">
          <div className="flex aiCenter jcCenter highlightOnHover contactInfoIcon">
            <img
              src={Images.linkedin}
              alt="LinkedIn"
              width={18}
              className="pointerEventsNone"
            />
          </div>
        </Tooltip>
      </Press>

      <Press
        url={githubHyperLink}
        onPress={(url) => window.open(url, "_blank")}
      >
        <Tooltip text="Github">
          <div className="flex aiCenter jcCenter highlightOnHover contactInfoIcon">
            <img
              src={Images.github}
              alt="Github"
              width={18}
              className="pointerEventsNone"
            />
          </div>
        </Tooltip>
      </Press>

      <Press
        url={locationHyperLink}
        onPress={(url) => window.open(url, "_blank")}
      >
        <Tooltip text="Vietnam">
          <div className="flex aiCenter jcCenter highlightOnHover contactInfoIcon">
            <span
              role="img"
              aria-label="Location"
              className="label pointerEventsNone"
            >
              🗺
            </span>
          </div>
        </Tooltip>
      </Press>
    </div>
  );
};

export { ContactInformation };
