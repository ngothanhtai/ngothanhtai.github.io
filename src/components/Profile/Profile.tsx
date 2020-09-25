import React from "react";
import { Images } from "../../assets/images";
import { ContactInformation } from "../ContactInformation/ContactInformation";
import { Spacer } from "../Spacer/Spacer";

const Profile = () => {
  return (
    <div className="flex flexRow jcSpaceBetween">
      <div className="flex flexRow">
        <img
          alt="Walter Ngô Thanh Tài"
          src={Images.walter}
          width={100}
          height={100}
        />
        <Spacer width={12} />
        <div>
          <h2>
            Walter
            <br />
            Ngô Thanh Tài
          </h2>
        </div>
      </div>

      <ContactInformation />
    </div>
  );
};

export { Profile };
