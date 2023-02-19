import React from 'react';
import './Footer.css';
import { FaGithub, FaEnvelope, FaHeart } from "react-icons/fa"

class Footer extends React.Component {
  render() {
    return (
        <>
          <div className="footer-body" style={{marginTop: '100px', marginBottom: '100px', fontFamily: 'quicksand'}}>
            <h2 style={{marginBottom: '3%', color: 'white', textAlign: 'center', fontFamily: 'quicksand', fontWeight: '600'}}>Contact</h2>
              <div className="contact-div"> 

                <a href="https://github.com/ananyaraju">
                  <FaGithub style={{marginRight: '10px'}}/>
                  ananyaraju
                </a>  

                <a href="mailto:ananyaraj24@gmail.com">
                  <FaEnvelope style={{marginRight: '10px'}}/>
                  ananyaraj24@gmail.com
                </a> 
                
              </div>
          </div>
        </>
    )
  }
}

export default Footer