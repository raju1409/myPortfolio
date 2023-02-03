import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from "@material-ui/icons/Work";
import "../styles/Experience.css"

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2014'
            iconStyle={{background:"#3e497a", color:"#fff" }}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Bharathi Vidya Mandir High School, Kothakota
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Kothakota
                </h4>
                <p>HighSchool</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2014-2017'
            iconStyle={{background:"#3e497a", color:"#fff" }}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    KDR Govt.Polytechnic College
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Wanaparthy
                </h4>
                <p>Diploma</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2017-2022'
            iconStyle={{background:"#3e497a", color:"#fff" }}
            icon={<SchoolIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    Avanthi Institute of Engineering and Technology
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Hyderabad
                </h4>
                <p>Degree</p>
            </VerticalTimelineElement>


            <VerticalTimelineElement className='vertical-timeline-element--work' 
            date='Feb-2021-May-2022'
            iconStyle={{background: "#e9d35b", color:"#fff" }}
            icon={<WorkIcon />}
            >
                <h3 className='vertical-timeline-element-title'>
                    TelecomOne Teleservices pvt.ltd
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>
                    Mahbubnagar, Telangana
                </h4>
                <p>IBS Tech</p>
                <p>I have worked with a Team for a year on Wireless Networking devices including wifi Access points and Wireless communications. 
                    Handled Generated Tickets before escalations.</p>
            </VerticalTimelineElement>
        </VerticalTimeline>

        <p>Looking for an oppertunity to prove my skills</p>
    </div>
  )
}

export default Experience