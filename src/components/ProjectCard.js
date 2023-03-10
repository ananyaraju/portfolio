import React from 'react'
import { Container, Card, Row } from 'react-bootstrap'
import './ProjectCard.css';

const ProjectCard = props => {
  return (
    <Card id="project-card">
      <Container>
      <a href={props.link} target="_blank" rel="noreferrer">
        <Row>
          <div className="col-sm-3">
            <Card.Img className="rounded card-img" variant="top" src={props.imgsrc} alt=""/>
          </div>
          <div className="col-sm-9">
            <Card.Body>
              <Card.Title className="project-title" style={{fontFamily: 'quicksand', fontSize: 'x-large'}}>{props.title}</Card.Title>
              <Card.Text className="project-desc" style={{fontFamily: 'quicksand'}}>
                  {props.desc}
              </Card.Text>
            </Card.Body>
          </div>
        </Row>
        </a>
      </Container>
    </Card>
  )
}

export default ProjectCard;