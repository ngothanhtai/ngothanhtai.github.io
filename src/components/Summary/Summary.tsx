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
                    A front-end developer based in Vietnam, more than 4+ years of working in developing websites and
                    mobiles.
                </p>

                <Spacer height={12}/>

                <p className="body">
                    What drives my work ethic is building products that are user centered. I hope to see a real impact
                    from the work that I take on. I am looking for a global company, ideally working on building out
                    product features while working closely with designers and project managers.
                </p>

                <Spacer height={12}/>

                <p className="body">
                    Looking for Senior React and React Native jobs.
                </p>
            </div>
        </section>
    );
};

export { Summary };
