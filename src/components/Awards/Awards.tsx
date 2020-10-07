import React from "react";
import { HashUrl } from "../../utils/constants";

const Awards: React.FC = () => {
  return (
    <>
      <a
        id={HashUrl.awards}
        href={`#${HashUrl.awards}`}
        className="textDecorationNone"
      >
        <h1>
          <span role="img" aria-label="Awards">
            🏆 Awards
          </span>
        </h1>
      </a>
      <ul>
        <li>
          <h3>1st Winner of Jenius Hackathon</h3>
          <ul className="description">
            <li>Time: July 2017</li>
            <li>Location: Jakarta, Indonesia</li>
          </ul>
        </li>

        <li>
          <h3>1st Winner of Coderschool demo day</h3>
          <ul className="description">
            <li>Time: January 2016</li>
            <li>Location: Ho Chi Minh City, Vietnam</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export { Awards };
