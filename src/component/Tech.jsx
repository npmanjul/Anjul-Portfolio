import React, { useEffect, useState } from 'react'
import './tech.css'
import { HOST_URL } from '../Constants.js'

const Tech = () => {
    const [skills, setSkills] = useState([])

    const getSkills =async () => {
        try{
            const response=await fetch(`${HOST_URL}/skills/getAllSkills`,{
                method:'GET',
                headers:{
                    'Content-Type':'application/json'
                }
            })

            const data=await response.json()
            setSkills(data.skills)
        }catch(error){
            console.log(error)
        }
    }

    const sortedSkills = skills.sort((a, b) => a.skillNumber- b.skillNumber)

    useEffect(() => {
        getSkills()
    }, [])

    return (
        <>
            {sortedSkills.map((skill) => (
                <div key={skill.id} className='tech-container'>
                    <div className='tech-icon' key={skill._id}>
                        <abbr title={skill.name}>
                        <img src={skill.image} alt={skill.name} title={skill.name}/>
                        </abbr>
                    </div>
                </div>
            ))}
        </>
    )
}

export default Tech

