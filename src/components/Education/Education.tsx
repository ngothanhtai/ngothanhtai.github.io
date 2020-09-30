import React from "react";
import { HashUrl } from "../../utils/constants";

const Education: React.FC = () => {
  return (
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
      <h2>Aptech (2008 - 2010)</h2>
      <p>High Diploma, Computer Software Engineering</p>
    </a>
  );
};

export { Education };
