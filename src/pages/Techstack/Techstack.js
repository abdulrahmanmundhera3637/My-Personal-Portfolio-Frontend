import React from "react";
import "./teckstack.css";
import { TechstackList } from "../../utils/TechstackList";
import FadeInUp from 'react-reveal/Fade'; // Import the FadeInUp effect
import ProgressBar from '../../components/ProgressBar/ProgressBar'; 

const Techstack = () => {
  return (
    <div className="container techstack" id="techstack">
      <FadeInUp duration={1000}>
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          My Skills
        </h2>
        <hr />
        <p className="mb-3 text-center">
          👉 Including programming languages, frameworks, databases, front-end
          and back-end tools, and APIs
        </p>
      </FadeInUp>
      <div className="row">
        {TechstackList.map((tech) => (
          <FadeInUp key={tech._id} duration={1000}>
            <div className="col-md-3">
              <div className="card m-2">
                <div className="card-content">
                  <div className="card-body text-center">
                    <div className="tech-icon-container">
                      <tech.icon className="tech-icon" />
                    </div>
                    {/* Include ProgressBar Component */}
                    <ProgressBar percentage={tech.percentage} technology={tech.name} />
                  </div>
                </div>
              </div>
            </div>
          </FadeInUp>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
