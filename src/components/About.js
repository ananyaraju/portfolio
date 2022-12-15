import React from 'react'
import { Row, Container } from 'react-bootstrap'
import './About.css'
import avatar from '../images/avatar.png'

class About extends React.Component {
  render() {
    return (
      <div className="about" style={{marginTop: '100px'}}>
        <h2 style={{marginBottom: '5%', color: 'white', textAlign: 'center', fontFamily: 'quicksand', fontWeight: '600'}}>About Me</h2>
        <Container>
            <Row>
                <div className="col-sm-4">
                  <img className="about-img" src={avatar} alt=""/>
                </div>
                <div className="col-sm-8" style={{fontFamily: 'quicksand'}}>
                    <p style={{fontSize: 'x-large'}}>Hey, there! I'm M. Ananya Raju.</p>
                    <p>A student at <a href="https://vit.ac.in/" rel="noreferrer" target="_blank" style={{color: 'white'}}>VIT, Vellore</a> and an aspiring front-end developer.</p>
                    <p></p>
                </div>
            </Row>
        </Container>
      </div>
    )
  }
}

export default About
