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
          <p className="subtitle fw500">Barcamp Saigon (Nov 2015)</p>
        </li>
        <Spacer height={12} />
        <li>
          <p className="subtitle fw500">Teacher Assistant at Coderschool (Mar 2017 iOS course)</p>
        </li>
      </ul>
    </section>
  );
};

export { VolunteerExperience };
