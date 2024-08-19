import React from "react";
import "./teckstack.css";
import { TechstackList } from "../../utils/TechstackList";
import RubberBand from 'react-reveal/RubberBand';
import Fade from 'react-reveal/Fade';
import ProgressBar from '../../components/ProgressBar/ProgressBar'; 

const Techstack = () => {
  return (
    <>
      <div className="container techstack" id="techstack">
        <RubberBand>
          <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
            My Skills
          </h2>
          <hr />
          <p className="mb-3 text-center">
            👉 Including programming languages, frameworks, databases, front-end
            and back-end tools, and APIs
          </p>
        </RubberBand>
        <div className="row">
          {TechstackList.map((tech) => (
            <Fade left key={tech._id}>
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
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
};

export default Techstack;
