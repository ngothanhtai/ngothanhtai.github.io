import React from "react";
import { Images } from "../../assets/images";
import { Spacer } from "../Spacer/Spacer";

const ContactInformation: React.FC = () => {
  return (
    <div>
      <div className="flex flexRow aiCenter">
        <span role="img" aria-label="Email">
          📧
        </span>
        <Spacer width={6} />
        <a href="mailto:codesigngo@gmail.com">codesigngo@gmail.com</a>
      </div>

      <Spacer height={8} />

      <div className="flex flexRow aiCenter">
        <span role="img" aria-label="Mobile phone">
          📞
        </span>
        <Spacer width={6} />
        <a href="tel:+84908873436">+84 908 87 34 36</a>
      </div>

      <Spacer height={8} />

      <div className="flex flexRow aiCenter">
        <img src={Images.linkedin} alt="LinkedIn" width={24} />
        <Spacer width={6} />
        <a href="https://linkedin.com/in/ngothanhtai">
          https://linkedin.com/in/ngothanhtai
        </a>
      </div>

      <Spacer height={8} />

      <div className="flex flexRow aiCenter">
        <img src={Images.github} alt="Github" width={24} />
        <Spacer width={6} />
        <a href="https://github.com/ngothanhtai">
          https://github.com/ngothanhtai
        </a>
      </div>
    </div>
  );
};

export { ContactInformation };
