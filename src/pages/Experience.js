import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css";

function Experience() {
  return (
    <div className="experience">
      <h2>Education and Experience</h2>
      <VerticalTimeline lineColor="grey" 
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<SchoolIcon />}
          contentStyle={{ backgroundColor: "black",
                          border : "2px solid grey"
                           }}
        >
          <h3 className="vertical-timeline-element-title">
            Bharathi Vidya Mandir High School, Kothakota
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Kothakota</h4>
          <p>HighSchool</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2014-2017"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<SchoolIcon />}
          contentStyle={{ backgroundColor: "black",
          border : "2px solid grey"
           }}
        >
          <h3 className="vertical-timeline-element-title">
            KDR Govt.Polytechnic College
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Wanaparthy</h4>
          <p>Diploma</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017-2022"
          iconStyle={{ background: "#000", color: "#fff" }}
          icon={<SchoolIcon />}
          contentStyle={{ backgroundColor: "black",
          border : "2px solid grey"
           }}
        >
          <h3 className="vertical-timeline-element-title">
            Avanthi Institute of Engineering and Technology
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Hyderabad</h4>
          <p>Bachelor's Degree - B.Tech</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Feb-2021-May-2022"
          iconStyle={{ background: "#a0986d", color: "#fff" }}
          icon={<WorkIcon />}
          contentStyle={{ backgroundColor: "black",
          border : "2px solid grey"
           }}
        >
          <h3 className="vertical-timeline-element-title">
            TelecomOne Teleservices pvt.ltd
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Mahbubnagar, Telangana
          </h4>
          <div className="experience">
          <p>IBS Tech</p>
          <p>
            I have worked with a Team for a year on Wireless Networking devices
            including wifi Access points and Wireless communications. Handled
            Generated Tickets before escalations.
          </p>
          </div>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{ background: "#a0986d", color: "#fff" }}
          icon={<WorkIcon />}
          contentStyle={{ backgroundColor: "black",
          border : "2px solid grey"
           }}
        >
          <h3 className="vertical-timeline-element-title">
            Participated in multiple coding Contests
          </h3>
          <div id="codechef">
          <p>Solved multiple problems on CodeChef and LeetCode</p>
          <span>Rated 2 Star on CodeChef</span>
          <br></br>
          <span>Checkout Profile here</span>
          </div>
          <div className="link">
            <button>
              <a
                href="https://www.codechef.com/users/rajukommula"
                rel="noreferrer"
                target="_blank"
              >
                CodeChef
              </a>
            </button>
            <button>
              <a
                href="https://leetcode.com/rajukommula/"
                rel="noreferrer"
                target="_blank"
              >
                Leetcode
              </a>
            </button>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>

      <p id="endtag">Looking for an oppertunity to prove my skills</p>
    </div>
  );
}

export default Experience;
