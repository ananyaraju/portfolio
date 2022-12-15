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
                    imgsrc={cryptologo}
                    title="CryptoFlow"
                    desc="CryptoFlow facilitates the processes of buying, selling and auctioning numerous products using decentralized networks and blockchain cryptocurrency, making online transactions for our users more transparent and secure."
                />
                <ProjectCard
                    imgsrc={micrologo}
                    title="Automated Motion-Detecting Solar-Tracking Street Light System"
                    desc="A smart system that switches on and off depending on current weather conditions, adjusts itself to amplify solar energy generation as well as uses motion detection to dim lights when no incoming traffic or other mobile objects are detected."
                />
                <ProjectCard
                    imgsrc={quizylogo}
                    title="Quizy"
                    desc="Quizy provides an online quiz system where students and teachers can attempt and create quizzes respectively. The quiz portal shall be auto-proctored via facial recognition and eye tracking AI models."
                />
            </div>
        );
    }
}

export default MyProjects