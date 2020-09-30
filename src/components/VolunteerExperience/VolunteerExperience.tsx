import React from "react";
import { HashUrl } from "../../utils/constants";

const VolunteerExperience: React.FC = () => {
  return (
    <a
      id={HashUrl.volunteerExperience}
      href={`#${HashUrl.volunteerExperience}`}
      className="textDecorationNone"
    >
      <h1>
        <span role="img" aria-label="Volunteer Experience">
          ✋ Volunteer Experience
        </span>
      </h1>
      <ul>
        <li>
          <p>Barcamp Saigon</p>
          <ul>
            <li>Role: Board team</li>
            <li>Time: November 2015</li>
            <li>Location: RMIT University</li>
          </ul>
        </li>
        <li>
          <p>Coderschool Learning Class</p>
          <ul>
            <li>Role: Teacher Assistant for React Native class</li>
            <li>Time: March 2017 to April 2017</li>
            <li>Location: CirCO co-working space</li>
          </ul>
        </li>
      </ul>
    </a>
  );
};

export { VolunteerExperience };
