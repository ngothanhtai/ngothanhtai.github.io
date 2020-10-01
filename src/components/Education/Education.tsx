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
        <h1>
          <span role="img" aria-label="Education">
            📚 Education
          </span>
        </h1>
      </a>
      <h2>Aptech (2008 - 2010)</h2>
      <p>High Diploma, Computer Software Engineering</p>

      <Spacer height={12} />
      <h2>CoderSchool - iOS Swift Saigon Bootcamp 2016</h2>
    </>
  );
};

export { Education };
