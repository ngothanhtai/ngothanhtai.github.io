import React from "react";

const Awards: React.FC = () => {
  return (
    <>
      <h1>
        <span role="img" aria-label="Awards">
          🏆 Awards
        </span>
      </h1>
      <ul>
        <li>
          <p>1st Winner of Jenius Hackathon</p>
          <ul>
            <li>Time: July 2017</li>
            <li>Location: Jakarta, Indonesia</li>
          </ul>
        </li>

        <li>
          <p>1st Winner of Coderschool demo day</p>
          <ul>
            <li>Time: January 2016</li>
            <li>Location: Ho Chi Minh City, Vietnam</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export { Awards };
