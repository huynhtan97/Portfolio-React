import React, { Component } from 'react';
import { Row, Col, Card, Button } from "antd";
import MainLayout from "../../layout/MainLayout";

import sheFightsBack from "../../assets/images/sheFightsBack.png";
import imageRecognition from "../../assets/images/imageRecognitionApp.png";
import chatBot from "../../assets/images/chatBotApp.jpg";
import everlead from "../../assets/images/everlead.png";

const projects = [
  {
    title: "shefightsback",
    status: "Completed",
    description: `Winner of Most Innovative and She Learns (Best Beginners) prize at SheHacks 2018. Mobile application aimed to
          allow victims of domestic abuse to efficiently report incidents and reach out for help without risk of personal safety`,
    image: sheFightsBack,
    link: "https://github.com/huynhtan97/sheFightsBack",
  },
  {
    title: "IBM Cloud Image Recognition",
    status: "Completed",
    description: `Application built with Node-Red and IBM Cloud's Image Recognition API that allows users to identify the gender and age 
                  of a person based on their image url.`,
    image: imageRecognition,
    link: "https://github.com/huynhtan97/nodeRedFaceRecognition",
  },
  {
    title: "IBM Cloud Chat bot",
    status: "Ongoing",
    description: `AI Chat bot built using IBM Cloud's Watson Assistant and Tone Analyzer API, as well as APIXU's Weather API. Current 
                  functionalities include: - Greetings - Telling Jokes - Getting user's name - Informing you on weather - Changing 
                  responses based on user's tone in text. Hoping to add: - Personality Analyzer API - More features with Tone Analyzer`,
    image: chatBot,
    link: "https://github.com/huynhtan97/mood-bot",
  },
  {
    title: "Everlead",
    status: "Ongoing",
    description: `Website built for my past LeaderShape mentor using MaterializeCSS`,
    image: everlead,
    link: "https://github.com/huynhtan97/Everlead",
  }
]

class Projects extends Component {
    renderProjects() {
      return (
        <Row gutter={16} justify="center" align="middle">
          {projects.map(project => (
            <Col key={project.title} xl={6} lg={6} md={12} xs={24} sm={24} style={{ marginLeft: 32, marginBottom: 16, marginTop: 16}}>
              <Card                                                                
                actions={[<a href={project.link}><Button type="primary" shape="round" icon="github" size="large">Source Code</Button></a>]}
                cover={<img src={project.image} alt={project.title} style={{ maxHeight: "400px", overflow: "hidden" }}/>}                
              >
                <Card.Meta 
                  title={`${project.title} (${project.status})`}
                  description={project.description}                  
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