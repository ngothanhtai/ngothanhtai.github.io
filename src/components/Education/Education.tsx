import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const Education: React.FC = () => {
  return (
    <>
      <a
        id={HashUrl.education}
        href={`#${HashUrl.education}`}
        className="textDecorationNone"
      >
        <span role="img" aria-label="Education" className="title fw500">
          📚 Education
        </span>
      </a>
      <ul>
        <li className="subtitle">
          2008 - 2010: APTECH High Diploma Certificated Computer Professional
        </li>

        <Spacer height={12} />
        <li className="subtitle">
          2015 - 2016: CoderSchool - iOS Swift Saigon Bootcamp
        </li>
      </ul>
    </>
  );
};

export { Education };
