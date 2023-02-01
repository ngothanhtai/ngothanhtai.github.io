import React from "react";
import { HashUrl } from "../../utils/constants";
import { Spacer } from "../Spacer/Spacer";

const Summary: React.FC = () => {
    return (
        <section>
            <a
                id={HashUrl.summary}
                href={`#${HashUrl.summary}`}
                className="textDecorationNone"
            >
        <span role="img" aria-label="Summary" className="title fw500">
          📃 Summary
        </span>
            </a>
            <Spacer height={12}/>
            <div>
                <p className="body">
                    A front-end developer based in Vietnam, more than 4+ years of working in developing websites, mobiles and 2+ years in Flash/HTML5 games.
                </p>
                <Spacer height={12}/>

                <p className="body">Specialities:</p>

                <ul className={"body"}>
                    <li>
                        Creating an MVP that meets stakeholder needs & client deadlines is key. Open communications & stakeholder feedback essential to adjust MVP. Goal: deliver a completed MVP that meets client expectations & shows product potential.
                    </li>
                    <li>Working closely with the Product Owner / Operations to answer technical questions and clarify requirements.</li>
                    <li>Integrating with the backend or third party services while keeping security in mind.</li>
                    <li>Collaborate with UI/UX Designer to convert designs into a functional app with attention to detail and optimal performance. Ensured consistent look/performance across platforms.</li>
                    <li>Leveraging new tech can improve the developer experience, make code efficient and reliable, and enable scalability, resulting in improved productivity and better applications.</li>
                </ul>

                <Spacer height={12}/>
            </div>
        </section>
    );
};

export { Summary };
