import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const Awards: React.FC = () => {
  return (
    <section>
      <a
        id={HashUrl.awards}
        href={`#${HashUrl.awards}`}
        className="textDecorationNone"
      >
        <div className="title fw500">
          <span role="img" aria-label="Awards">
            🏆
          </span>{" "}
          Awards
        </div>
      </a>
      <ul>
        <li>
          <p className="subtitle fw500">1st Winner of Jenius Hackathon</p>
          <ul className="description">
            <li>
              <b>Time</b>: July 2017
            </li>
            <li>
              <b>Location</b>: Jakarta, Indonesia
            </li>
          </ul>
        </li>

        <Spacer height={12} />

        <li>
          <p className="subtitle fw500">1st Winner of Coderschool demo day</p>
          <ul className="description">
            <li>
              <b>Time</b>: January 2016
            </li>
            <li>
              <b>Location</b>: Ho Chi Minh City, Vietnam
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export { Awards };
