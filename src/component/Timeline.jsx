import React, { useEffect, useState } from 'react';
import './timeline.css'
import { HOST_URL } from '../Constants';

const Timeline = () => {
  const [timeline, setTimeline] = useState([])

  const getTimeline = async () => {
    try {
      const response = await fetch(`${HOST_URL}/experiences/getAllExperience`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      const data = await response.json()
      setTimeline(data.experiences || [])
    } catch (error) {
      console.log(error)
    }
  }

  const sortedTimeline = timeline.sort((a, b) => a.order - b.order)
  useEffect(() => {
    getTimeline()
  }, [])

  return (
    <>
      <div className="timeline">
        {
          sortedTimeline.map((experience) => (
            <div key={experience._id}>
              {experience.order % 2 !== 0 ? (
                <div className="container left">
                  <div className="content">
                    <div className="upper-container">
                      <div className="company-name">{experience.company}</div>
                      <div className="work-duration">{experience.startDate} / {experience.endDate}</div>
                    </div>
                    <div className="middle-container">
                      {experience.description}
                    </div>
                    <div className="lower-container">
                      <div className="timeline-btn">
                        <a href={experience.link} target="_blank" rel="noopener noreferrer">
                          <button>Live Link</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="container right">
                  <div className="content">
                    <div className="upper-container">
                      <div className="company-name">{experience.company}</div>
                      <div className="work-duration">{experience.startDate} / {experience.endDate}</div>
                    </div>
                    <div className="middle-container">
                      {experience.description}
                    </div>
                    <div className="lower-container">
                      <div className="timeline-btn">
                        <a href={experience.link} target="_blank" rel="noopener noreferrer">
                          <button>Live Link</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        }
      </div>
    </>
  )
}

export default Timeline;