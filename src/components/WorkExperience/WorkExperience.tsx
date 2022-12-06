import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const renderWorkExperience = ({
  title,
  time,
  location,
  description,
  techStack,
}: {
  title: string;
  time: string;
  location?: string;
  description?: React.ReactNode;
  techStack?: string;
}): React.ReactNode => {
  return (
    <blockquote>
      <div className="subtitle fw500">• {title}</div>
      <Spacer height={12} />
      <div>
        <p>
          <b>Time:</b>&nbsp;
          <span className="description">{time}</span>
        </p>
        {location && (
          <p>
            <b>Location:</b>&nbsp;
            <span className="description">{location}</span>
          </p>
        )}

        {techStack && (
          <p>
            <b>Tech stack:</b>&nbsp;
            <span className="description">{techStack}</span>
          </p>
        )}

        {description && (
          <div>
            <b>What did I do</b>:&nbsp;
            <div className="description">{description}</div>
          </div>
        )}
      </div>
    </blockquote>
  );
};

const WorkExperience: React.FC = () => {
    return (
        <section>
            <a
                id={HashUrl.workExperience}
                href={`#${HashUrl.workExperience}`}
                className="textDecorationNone"
            >
                <div className="title fw500">
          <span role="img" aria-label="Work Experience">
            💼
          </span>{" "}
                    Work Experience
                </div>
            </a>

            <Spacer height={12}/>

            {renderWorkExperience({
                title: "Senior React and React Native at ORKESTRO",
                time: "March 2019 - February 2020",
                location: "London, United Kingdom",
                techStack:
                    "React, React Native, WebSocket, Restful API, GraphQL, Elixir, MongoDB.",
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title: "Junior/Senior React and React Native at PYCOGroup (Contractor)",
                time: "May 2017 - January 2019",
                location: "Jakarta, Indonesia | Bangkok, Thailand | Hanoi, Vietnam",
                techStack:
                    "React, React Native, React Native for Web, GraphQL, Redux, Git.",
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title:
                    "Senior Flash and Unity3D Game Developer at Skoolbo",
                time: "July 2014 - September 2015",
                location: "Ho Chi Minh City, Vietnam",
                techStack: "Flash ActionScript 3, HTML5, Unity 3D C#.",
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title: "Junior/Senior Flash Game Developer at BTS",
                time: "March 2011 - April 2014",
                location: "Ho Chi Minh City, Vietnam",
                techStack: "Flash Actionscript 3, C#, Java, and MSSQL",
            })}


        </section>
    );
};

export { WorkExperience };
