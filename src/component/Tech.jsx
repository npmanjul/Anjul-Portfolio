import React from 'react'
import './tech.css'
import github from '../assets/github-fill.png'
import react from '../assets/Tech icon/react.png'
import express from '../assets/Tech icon/express.png'
import nodejs from '../assets/Tech icon/node.png'
import redux from '../assets/Tech icon/redux.png'
import firebase from '../assets/Tech icon/firebase.png'
import tailwind from '../assets/Tech icon/tailwindcss.png'
import bootstrap from '../assets/Tech icon/bootstrap.png'
import html from '../assets/Tech icon/html.png'
import css from '../assets/Tech icon/css.png'
import javascript from '../assets/Tech icon/javascript.png'
import java from '../assets/Tech icon/java.png'
import cpp from '../assets/Tech icon/cpp.png'
import c from '../assets/Tech icon/c.png'
import python from '../assets/Tech icon/pythoon.png'
import vercal from '../assets/Tech icon/vercal.png'
import netlify from '../assets/Tech icon/netlify.png'
import mongodb from '../assets/Tech icon/mongodb.png'
import mysql from '../assets/Tech icon/mysql.png'
import digitalocean from '../assets/Tech icon/digitalocean.png'
import gitvcs from '../assets/Tech icon/git.png'





const skills = [
    {
        id: 1,
        icon: react,

    },
    {
        id: 2,
        icon: express,
    },
    {
        id: 3,
        icon:nodejs ,
    },
    {
        id: 4,
        icon: redux,
    },
    {
        id: 5,
        icon: firebase,
    },
    {
        id: 6,
        icon: tailwind,
    },
    {
        id: 7,
        icon: bootstrap,
    },
    {
        id: 8,
        icon: html,
    },
    {
        id: 9,
        icon: css,
    },
    {
        id: 10,
        icon: javascript,
    },
    {
        id: 11,
        icon: java,
    },
    {
        id: 12,
        icon: python,
    },
    {
        id: 13,
        icon: cpp,
    },
    {
        id: 14,
        icon: c,
    },
    {
        id: 15,
        icon: vercal,
    },
    {
        id: 16,
        icon: netlify,
    },
    {
        id: 17,
        icon: digitalocean,
    },
    {
        id: 18,
        icon: mongodb,
    },
    {
        id: 19,
        icon: mysql,
    },
    {
        id: 20,
        icon: gitvcs,
    },
    {
        id: 21,
        icon: github,
    },
    
];


const Tech = () => {
    return (
        <>
            {skills.map((skill) => (
                <div key={skill.id} className='tech-container'>
                    <div className='tech-icon'>
                        <img src={skill.icon} />
                    </div>
                </div>
            ))}
        </>
    )
}

export default Tech

