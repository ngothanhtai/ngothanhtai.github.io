import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const renderWorkExperience = ({
  title,
  time,
  location,
  description,
  techStack,
    tools,
                                  whatIDid
}: {
  title: string;
  time: string;
  location?: string;
  description?: React.ReactNode;
  techStack?: string;
  tools?: string;
  whatIDid?: string;
}): React.ReactNode => {
    return (
        <blockquote>
            <div className="subtitle fw500">• {title}</div>
            <Spacer height={12}/>
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

                {tools && (
                    <p>
                        <b>Tools:</b>&nbsp;
                        <span className="description">{tools}</span>
                    </p>
                )}

                {whatIDid && (
                    <p>
                        <b>What I did:</b>&nbsp;
                        <span className="description">{whatIDid}</span>
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
                title: "Senior React and React Native at Caidr (Contractor)",
                time: "August 2021 - now",
                location: "Ho Chi Minh, Vietnam",
                techStack:
                    "ReactJS, NextJS, TailwindCSS, React Native, Restful API, Firebase, and Git.",
                tools: "Webstorm, Xcode, Android Studio, Zeplin, JIRA, and Slack.",
                whatIDid: "Collaborate with the Project Manager to gain clarity on requirements, integrate the REST API with the Backend team, and transform the Zeplin design into an interactive application. Additionally, include unit and snapshot tests."
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title: "Senior React and React Native at ORKESTRO",
                time: "March 2019 - February 2020",
                location: "London, United Kingdom",
                techStack:
                    "ReactJS, React Native, WebSocket, Restful API, Firebase, GraphQL, Elixir, RabbitMQ, and MongoDB.",
                tools: "Webstorm and Slack",
                whatIDid: "Work closely with the Project Manager to identify areas of improvement for the Admin Dashboard, to enable the Operations Team to work faster and reduce their reliance on people."
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title: "Junior/Senior React and React Native at PYCOGroup (Contractor)",
                time: "May 2017 - January 2019",
                location: "Jakarta, Indonesia | Bangkok, Thailand | Hanoi, Vietnam",
                techStack:
                    "React Native, React Native for Web, GraphQL, Redux, and Git.",
                whatIDid: "Partnered with the McKinsey team to build a multinational team for our client. We worked with Agile 2-week sprints to build features and integrate them with GraphQL, including unit and snapshot tests."
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title:
                    "Senior Flash and Unity3D Game Developer at Skoolbo",
                time: "July 2014 - September 2015",
                location: "Ho Chi Minh City, Vietnam",
                techStack: "Flash ActionScript 3, HTML5, Unity 3D C#.",
                whatIDid: "Create new educational games with Flash and convert them to HTML5. Take advantage of the opportunity to work with Unity 3D, which primarily focuses on 2D user interfaces."
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title: "Junior/Senior Flash Game Developer at BTS",
                time: "March 2011 - April 2014",
                location: "Ho Chi Minh City, Vietnam",
                techStack: "Flash Actionscript 3, C#, Java, MySQL, and MSSQL",
                whatIDid: "Building new games with the support from Team lead, while maintaining existing ones."
            })}


        </section>
    );
};

export { WorkExperience };
