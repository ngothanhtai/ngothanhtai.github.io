import React from "react";
import { Images } from "../../assets/images";
import { Press } from "../Press/Press";
import { Tooltip } from "../Tooltip/Tooltip";
import "./ContactInformation.css";

const ContactInformation: React.FC = () => {
  return (
    <div className="flex flexRow">
      <Press onPress={() => window.open("mailto:codesigngo@gmail.com")}>
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

      <Press onPress={() => window.open("tel:+84908873436")}>
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
        onPress={() =>
          window.open("https://linkedin.com/in/ngothanhtai", "_blank")
        }
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
        onPress={() => window.open("https://github.com/ngothanhtai", "_blank")}
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
        onPress={() =>
          window.open(
            "https://www.google.com/maps/place/Vietnam/@15.7477571,101.4151052,6z/data=!3m1!4b1!4m5!3m4!1s0x31157a4d736a1e5f:0xb03bb0c9e2fe62be!8m2!3d14.058324!4d108.277199",
            "_blank"
          )
        }
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
