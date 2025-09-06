import React from 'react'
import { MdSchool } from 'react-icons/md'
import { FaSchool } from 'react-icons/fa'
import { GiDiploma } from 'react-icons/gi'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {motion} from 'framer-motion'

const Education = () => {
    return (
        <div className='border-b border-neutral-900' id='education'>
            <motion.h1 initial={{ y: -10 }}
                animate={{ y: [10, -10] }}
                transition={{
                    duration: 1, ease: "linear",
                    repeat: Infinity, repeatType: "reverse"
                }}
                className="my-20 text-center text-4xl font-mono ">
                ---My education---
            </motion.h1>
            <hr />
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="font-semibold"
                    contentStyle={{ background: 'black', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date="2022 - 2025"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<MdSchool />}
                >
                    <h3 className="vertical-timeline-element-title">B.Tech in Computer Science and Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">ST. Thomas' College Of Engineering And Technology,Kolkata</h4>
                    {/* <h5 className="vertical-timeline-element-subtitle">CGPA:7.96</h5> */}
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="font-semibold"
                    contentStyle={{ background: 'black', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date="2019 - 2022"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<GiDiploma />}
                >
                    <h3 className="vertical-timeline-element-title">Diploma</h3>
                    <h4 className="vertical-timeline-element-subtitle">Ramakrishna Mission Shilpamandira,Belurmath</h4>
                    <h5 className="vertical-timeline-element-subtitle">CGPA:8.9</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="font-semibold"
                    contentStyle={{ background: 'black', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date="2019"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title">12th</h3>
                    <h4 className="vertical-timeline-element-subtitle">Sri Ramakrishna Sikshalaya,Howrah</h4>
                    <h5 className="vertical-timeline-element-subtitle">Percentage-78.6%</h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="font-semibold"
                    contentStyle={{ background: 'black', color: 'white' }}
                    contentArrowStyle={{ borderRight: '7px solid  white' }}
                    date="2017"
                    iconStyle={{ background: '#138781', color: '#fff' }}
                    icon={<FaSchool />}
                >
                    <h3 className="vertical-timeline-element-title">10th</h3>
                    <h4 className="vertical-timeline-element-subtitle">Sri Ramakrishna Sikshalaya,Howrah</h4>
                    <h5 className="vertical-timeline-element-subtitle">Percentage-91.57%</h5>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Education