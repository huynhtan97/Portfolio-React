import React, { Component } from 'react';
import { Row, Col, Card, Button } from "antd";
import MainLayout from "../../layout/MainLayout";

import sheFightsBack from "../../assets/images/sheFightsBack.png";
import safetyNet from "../../assets/images/techtogetherDevPostSubmission.png";
import aaaiSubmission from "../../assets/images/AAAILogo.jpeg";
import everlead from "../../assets/images/everlead.png";

const projects = [
  {
    title: "shefightsback",
    image: sheFightsBack,
    link: "https://github.com/huynhtan97/sheFightsBack",
  },
  {
    title: "SafetyNet",
    image: safetyNet,
    link: "https://github.com/huynhtan97/safetynetWeb",
  },
  {
    title: "AAAI Research Submission",
    image: aaaiSubmission,
    link: "https://huynhtan97.github.io/Portfolio/assets/AAAI_Gesture_Abstract.pdf",
    buttonText: "Paper",
    buttonIcon: "book"
  },
  {
    title: "Everlead",
    image: everlead,
    link: "https://github.com/huynhtan97/Everlead",
  }
]

class Projects extends Component {
    renderProjects() {
      return (
        <Row gutter={2} justify="center" align="middle">
          {projects.map(project => (
            <Col key={project.title} xl={12} lg={12} md={12} xs={24} sm={24} style={{}}>
              <Card                                                                
                actions={[<a href={project.link}><Button type="primary" shape="round" icon={project.buttonIcon || "github"} size="large" style={{ width: 200 }}>{project.buttonText || "Source Code"}</Button></a>]}
                cover={<img src={project.image} alt={project.title} style={{ height: "400px", overflow: "hidden", objectFit: "cover"}}/>}                
              >
                <Card.Meta 
                  title={<span>{project.title}</span>}
                  style={{ textAlign: "center" }}
                /> 
              </Card>                                                                                                                                                                                            
            </Col>              
          ))}     
        </Row>
      )            
    }
    render() {
      return (
        <MainLayout selectedKey = {this.props.location.pathname}>
          {this.renderProjects()}                
        </MainLayout>
      )
    }
  }

export default Projects;