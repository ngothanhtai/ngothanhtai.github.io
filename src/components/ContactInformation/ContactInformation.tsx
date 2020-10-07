import React from "react";
import { Images } from "../../assets/images";
import { Press } from "../Press/Press";
import { Spacer } from "../Spacer/Spacer";

const ContactInformation: React.FC = () => {
  return (
    <div>
      <Press
        onPress={() => {
          window.open("mailto:codesigngo@gmail.com");
        }}
      >
        <div className="flex flexRow aiCenter highlightOnHover">
          <span role="img" aria-label="Email" className="label">
            📧
          </span>
          <Spacer width={6} />
          <span className="label">codesigngo@gmail.com</span>
        </div>
      </Press>

      <Press
        onPress={() => {
          window.open("tel:+84908873436");
        }}
      >
        <div className="flex flexRow aiCenter highlightOnHover">
          <span role="img" aria-label="Mobile phone" className="label">
            📞
          </span>
          <Spacer width={6} />
          <span className="label">+84 908 87 34 36</span>
        </div>
      </Press>

      <Press
        onPress={() => {
          window.open("https://linkedin.com/in/ngothanhtai", "_blank");
        }}
      >
        <div className="flex flexRow aiCenter highlightOnHover">
          <img src={Images.linkedin} alt="LinkedIn" width={18} />
          <Spacer width={6} />
          <span className="label">ngothanhtai</span>
        </div>
      </Press>

      <Press
        onPress={() => {
          window.open("https://github.com/ngothanhtai", "_blank");
        }}
      >
        <div className="flex flexRow aiCenter highlightOnHover">
          <img src={Images.github} alt="Github" width={18} />
          <Spacer width={6} />
          <span className="label">ngothanhtai</span>
        </div>
      </Press>

      <Press
        onPress={() => {
          window.open(
            "https://www.google.com/maps/place/Vietnam/@15.7477571,101.4151052,6z/data=!3m1!4b1!4m5!3m4!1s0x31157a4d736a1e5f:0xb03bb0c9e2fe62be!8m2!3d14.058324!4d108.277199",
            "_blank"
          );
        }}
      >
        <div className="flex flexRow aiCenter highlightOnHover">
          <span role="img" aria-label="Location" className="label">
            🗺
          </span>
          <Spacer width={6} />
          <div>
            <div className="label">Vietnam</div>
          </div>
        </div>
      </Press>
    </div>
  );
};

export { ContactInformation };
