import React from "react";
import { Images } from "../../assets/images";
import { ContactInformation } from "../ContactInformation/ContactInformation";
import { Spacer } from "../Spacer/Spacer";

const Profile = () => {
  return (
    <div className="flex flexRow jcSpaceBetween">
      <div className="flex flexColumn">
        <div className="flex flexRow">
          <img
            alt="Walter Ngô Thanh Tài"
            src={Images.walter}
            width={100}
            height={100}
          />
          <Spacer width={12} />
          <div className="flex flexColumn aiCenter jcCenter">
            <p className="title">
              Walter
              <br />
              Ngô Thanh Tài
            </p>

            <ContactInformation />
          </div>
        </div>
      </div>
    </div>
  );
};

export { Profile };
