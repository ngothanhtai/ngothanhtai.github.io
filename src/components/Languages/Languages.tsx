import React from "react";

const Languages: React.FC = () => {
  return (
    <>
      <h1>
        <span role="img" aria-label="Languages">
          🗣
        </span>{" "}
        Languages
      </h1>
      <h2>
        <span role="img" aria-label="English">
          🇬🇧
        </span>{" "}
        English: Intermediate{" "}
      </h2>
      <p>
        - IELTS Certificate with band score: <b>5.5</b>
      </p>

      <p>(Listening: 6.5, Reading: 5, Writing: 6, Speaking: 5)</p>

      <h2>
        <span role="img" aria-label="Vietnamese">
          🇻🇳
        </span>{" "}
        Vietnamese: Native language
      </h2>
    </>
  );
};

export { Languages };
