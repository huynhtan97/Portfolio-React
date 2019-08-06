import React, { Component } from "react";
import { Button, Row, Col, Card, Layout, Icon } from "antd";
import MainLayout from "../../layout/MainLayout";
import profileImage from "../../assets/images/PersonalPic.jpg";

import "./index.css"

const { Content } = Layout;

const contactInfo = [
  {
    name: "Phone Number",
    link: "tel:+1 (860) 794-1274",
    textInfo: "+1 (860) 794-1274",
    icon: "phone",
  },
  {
    name: "Email",
    link: "mailto:huynha1@wit.edu",
    textInfo: "huynha1@wit.edu",
    icon: "mail",
  },
  {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/huynhan1/",
    textInfo: "An Huynh",
    icon: "linkedin",
  },
  {
    name: "Github",
    link: "https://github.com/huynhtan97",
    textInfo: "huynhtan97",
    icon: "github",
  },
  {
    name: "Current City",
    link: "https://goo.gl/maps/cUr6fd9R7ZS2",
    textInfo: "Boston, MA",
    icon: "star",
  },
  {
    name: "Medium",
    link: "https://medium.com/hackwitus/meet-an-2406e0d7540d",
    textInfo: "@anhuynh_5895",
    icon: "medium",
  }
]

class Landing extends Component {

  renderLanding() {
    return (
      <Content className="landingField">
        <h1 className="mainTitle">Prospective Software Engineer</h1>
        <h3 className="subTitle">BA in Computer Science - Class of 2019</h3>
        <span className="bannerButtons">
          <Button type="primary" href="https://huynhtan97.github.io/Portfolio/assets/AnHuynhResume2019.pdf">Resume</Button>
          <Button href="https://huynhtan97.github.io/Portfolio/">My AngularJs Site</Button>
        </span>
      </Content>
    );
  };
  renderAboutMe() {
    return (
      <Content className="aboutMe">
        <Row gutter={16} align="middle">
        <Col md={12} xs={24}>
          <img className="profileImage" alt="profileImage" src={profileImage} /> 
        </Col>
        <Col md={12} xs={24}>
          <Card className="aboutMeCard" title="About Me">
            <p>Hi! Thank you for visiting my website!</p>
            <p>I'm currently a Senior in Computer Science (minoring in Applied Math) at Wentworth
              Institute of Technology in Boston, MA. I'm originally from West Hartford, CT and decided to move to the city
              in order to meet new people and seek opportunities in the city.</p>
            <p>I got into the field back in my Junior Year of high school where I took my first computer programming class. From there, I have both
              learned and gotten involved more within the field from attending hackathons, to self-teaching myself various languages like Javascript and PHP.</p>
            <p><b>To view my skills, projects, achievements, and work experience:</b> Please navigate to the page in sidenav </p>
          </Card>
        </Col>
        </Row>
      </Content>
     );
  };
  renderContactInfo() {
    return (
      <Content className="contactInfo">
        <Row gutter={16}>
        {contactInfo.map(item => (
          <Col md={8} xs={24} style={{ marginBottom: "16px" }}>
            <Card key={item.name} style={{ width: 300 }}>
              <Card.Meta
                avatar={<Icon type={item.icon} />}
                title={item.name}
                description={<a href={item.link}>{item.textInfo}</a>}
              />
            </Card>
          </Col>
          ))}
        </Row>
      </Content>
    )
    };
  render() {
    return (
      <MainLayout selectedKey={this.props.location.pathname}>
        <div style={{ flexDirection: "column" }}>
          {this.renderLanding()}
          {this.renderAboutMe()}
          {this.renderContactInfo()}
        </div>
      </MainLayout>
    );
  }
}

export default Landing;