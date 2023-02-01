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
  whatIDid?: React.ReactNode;
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
                title: "Senior React and React Native at Caidr (Contractor - Remote)",
                time: "August 2021 - now",
                location: "Ho Chi Minh, Vietnam",
                techStack:
                    "ReactJS, NextJS, TailwindCSS, React Native, Jest, React Testing Library, Restful API, Firebase, and Git.",
                tools: "Webstorm, Xcode, Android Studio, Zeplin, JIRA, and Slack.",
                whatIDid: (
                    <ul>
                        <li>Collaborate with the Project Manager and Backend teams to answer technical questions and clarity on requirements.</li>
                        <li>Build an entire greenfield website with NextJS, ReactJS and deploy it with Vercel.</li>
                        <li>Integrate a REST API to display search content in a paginated format. Customers can use card payments on the website, including Apple Pay/Google Pay on mobile, with Stripe. The site also offers user profile management, order history, print order receipts, and Firebase Authentication (sign in with Google, Apple, or Email).</li>
                        <li>Improve SEO by using Service-Side Rendering (SSR) or Static Site Generation (SSG) from NextJS, using correct semantic HTML tags, creating a sitemap.xml and providing proper information for meta tags.</li>
                        <li>Ejecting an existing Expo React Native application to bare project in order to add features that require native code, which are Stripe payment and Firebase Authentication with Native SDK.</li>
                        <li>Transform the Zeplin design into interactive, responsive web and mobile apps.</li>
                        <li>Unit tests and snapshot testing are mandatory.</li>
                    </ul>
                )
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title: "Senior React and React Native at ORKESTRO",
                time: "March 2019 - February 2020",
                location: "London, United Kingdom",
                techStack:
                    "ReactJS, React Native, NodeJS, WebSocket, Restful API, Firebase, GraphQL, Elixir, RabbitMQ, and MongoDB.",
                tools: "Webstorm and Slack",
                whatIDid: <ul>
                    <li>Take full control of the Driver app, which was built with React Native, and do bug fixes and small improvements.</li>
                    <li>Fully redesign the Dashboard with a list of thousands of orders and tracking orders/driver navigation status on Google Maps.</li>
                    <li>Integrate the REST API to submit orders, get delivery quotes, user authentication, manage users/merchants/drivers/operation teams profile and dashboard settings.</li>
                    <li>Real-time showing a list of orders using Websocket, with optimal performance for thousands of orders with real-time updates, a searchable and scrollable list. This improves productivity for the Operation team.</li>
                    <li>Adding an Order Chat feature, where drivers, merchants and operations can communicate about issues related to a particular order.</li>
                    <li>Unit tests and snapshot testing are mandatory.</li>
                </ul>
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title: "Junior/Senior React and React Native at PYCOGroup (Contractor)",
                time: "May 2017 - January 2019",
                location: "Jakarta, Indonesia | Bangkok, Thailand | Hanoi, Vietnam",
                techStack:
                    "React Native, React Native for Web, GraphQL, Redux, Jest, Enzyme, and Git.",
                whatIDid: <ul>
                    <li>Partnered with the McKinsey team to build a multinational team for client. We worked with Agile 2-week sprints.</li>
                    <li>Building a landing page where customers can view information about the program and interest rates calculator.</li>
                    <li>A back office website to manage user applications, which included steps with forms and document files.</li>
                    <li>Building term deposit and third party integrations for Customer support (Chat and Email).</li>
                    <li>Backend integration with GraphQL.</li>
                    <li>Building a progress gauge component with animation.</li>
                    <li>Implement the UI from the design on Zeplin that works both mobiles and website with same code base. Calculate interest rate based on inputted data. Show a list of term deposits, create new ones, view details, and delete them.</li>
                    <li>Join other squads to do bug fixes and improvements.</li>
                    <li>Unit tests and snapshot testing are mandatory.</li>
                </ul>
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title:
                    "Senior Flash and Unity3D Game Developer at Skoolbo",
                time: "July 2014 - September 2015",
                location: "Ho Chi Minh City, Vietnam",
                techStack: "Flash ActionScript 3, HTML5, Unity 3D C#, and Git.",
                whatIDid: <ul>
                    <li>Create a simple quiz game for children using Flash (ActionScript 3) and then convert it to HTML5 to run without Flash.</li>
                    <li>Take advantage of the opportunity to work with Unity 3D, which primarily focuses on 2D user interfaces and bug fixes.</li>
                </ul>
            })}

            <Spacer height={24}/>

            {renderWorkExperience({
                title: "Junior/Senior Flash Game Developer at BTS",
                time: "March 2011 - April 2014",
                location: "Ho Chi Minh City, Vietnam",
                techStack: "Flash Actionscript 3, C#, Java, MySQL, and MSSQL",
                whatIDid: <ul>
                    <li>Develop 5+ new games using the existing architecture that are successful and generate revenue for the company.</li>
                    <li>Bug fixes and improvements for existing games.</li>
                    <li>Mentoring new team members.</li>
                    <li>Join a core team to design a new architecture that improves performance and creates a cleaner architecture.</li>
                </ul>
            })}


        </section>
    );
};

export { WorkExperience };
