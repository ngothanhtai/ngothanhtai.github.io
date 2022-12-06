import React from "react";
import { Images } from "../../assets/images";
import { ContactInformation } from "../ContactInformation/ContactInformation";
import { Spacer } from "../Spacer/Spacer";

const Profile = () => {
  return (
    <header className="flex flexRow jcSpaceBetween">
      <div className="flex flexColumn">
        <div className="flex flexRow">
          <img
            alt="Ngô Thanh Tài (Walter)"
            src={Images.walter}
            width={100}
            height={100}
          />
          <Spacer width={12} />
          <div className="flex flexColumn jcCenter">
            <p className="title">
              Ngô Thanh Tài (Walter)
            </p>

            <ContactInformation />
          </div>
        </div>
      </div>
    </header>
  );
};

export { Profile };
