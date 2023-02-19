import React from 'react'
import ProjectCard from './ProjectCard.js'
import cryptologo from '../images/cryptologo.jpg'
import micrologo from '../images/micrologo.jpg'
import quizylogo from '../images/quizylogo.jpg'

class MyProjects extends React.Component {
    render() {
        return (
            <div style={{marginTop: '100px', marginBottom: '100px'}}>
                <h2 style={{marginBottom: '3%', color: 'white', textAlign: 'center', fontFamily: 'quicksand', fontWeight: '600'}}>My Projects</h2>
                <ProjectCard 
                    link="https://github.com/ananyaraju/cryptoflow"
                    imgsrc={cryptologo}
                    title="CryptoFlow"
                    desc="CryptoFlow facilitates the processes of buying, selling and auctioning numerous products using decentralized networks and blockchain cryptocurrency.
                    It aims at making online transactions for our users more transparent and secure while reducing compliance costs and speeding up data transfer processing.
                    The application is developed using React for front-end and Solidity for back-end on the test Ethereum network."
                />
                <ProjectCard
                    link="https://github.com/ananyaraju/solar-street-light"
                    imgsrc={micrologo}
                    title="Automated Motion-Detecting Solar-Tracking Street Light System"
                    desc="A smart lighting system that switches on and off depending on current weather conditions, adjusts itself to amplify solar energy generation as well as uses motion detection to dim lights when no incoming traffic or other mobile objects are detected.
                    It is a fully operational hardware project made using an Arduino UNO microcontroller, which aims to reduce power consumption while maximising solar energy generation."
                />
                <ProjectCard
                    link="https://github.com/ananyaraju/quizy"
                    imgsrc={quizylogo}
                    title="Quizy"
                    desc="Quizy provides an online quiz system where students and teachers can attempt and create quizzes respectively. The quiz portal shall be auto-proctored via facial recognition and eye tracking AI models.
                    The project is developed using HTML, CSS, JavaScript for client-side programming, while the server-side programming is coded using MySQL and PHP. The AI models include a TensorFlow COCO model, which identifies objects captured by the camera,
                    and a Web Gazer model, used to track eye movements of a student across the computer screen to minimise malpractices during online quizzes."
                />
            </div>
        );
    }
}

export default MyProjects