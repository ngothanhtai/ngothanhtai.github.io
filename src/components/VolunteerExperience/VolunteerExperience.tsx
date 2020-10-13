import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const VolunteerExperience: React.FC = () => {
  return (
    <section>
      <a
        id={HashUrl.volunteerExperience}
        href={`#${HashUrl.volunteerExperience}`}
        className="textDecorationNone"
      >
        <div className="title fw500">
          <span role="img" aria-label="Volunteer Experience">
            ✋
          </span>{" "}
          Volunteer Experience
        </div>
      </a>
      <ul>
        <li>
          <p className="subtitle fw500">Barcamp Saigon</p>
          <ul className="description">
            <li>Role: Board team</li>
            <li>Time: November 2015</li>
            <li>Location: RMIT University</li>
          </ul>
        </li>
        <Spacer height={12} />
        <li>
          <p className="subtitle fw500">Coderschool Learning Class</p>
          <ul className="description">
            <li>Role: Teacher Assistant for React Native class</li>
            <li>Time: March 2017 to April 2017</li>
            <li>Location: CirCO co-working space</li>
          </ul>
        </li>
      </ul>
    </section>
  );
};

export { VolunteerExperience };
