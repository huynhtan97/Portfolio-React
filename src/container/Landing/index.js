import React, { useEffect, useState } from "react";
import { Button, Row, Col, Card, Layout, Icon } from "antd";
import TextTransition, { presets } from "react-text-transition";
import MainLayout from "../../layout/MainLayout";
import profileImage from "../../assets/images/PersonalPic.jpg";

import "./index.css";

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
    link: "mailto:anh9263@gmail.com",
    textInfo: "anh9263@gmail.com",
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
    link: "https://goo.gl/maps/xU5yeBia2uahncK19",
    textInfo: "New York, NY",
    icon: "star",
  },
  {
    name: "Medium",
    link: "https://medium.com/@anhuynh_5895",
    textInfo: "@anhuynh_5895",
    icon: "medium",
  },
];

const subtitles = [
  "Big Data Programming",
  "Front End Programming",
  "Data Analysis",
];

const Landing = () => {
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setSubtitleIndex((index) => index + 1),
      3000
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <Content className="landingField">
      <h1 className="mainTitle">An Truc Huynh</h1>
      <h2 className="subTitle">
        <TextTransition
          text={subtitles[subtitleIndex % subtitles.length]}
          springConfig={presets.wobbly}
        />
      </h2>
      <Row gutter={16} align="middle">
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Button
            className="bannerButton"
            type="primary"
            href="https://huynhtan97.github.io/Portfolio/assets/AnHuynhResume.pdf"
          >
            Resume
          </Button>
        </Col>
        <Col xl={12} lg={12} md={12} sm={24} xs={24}>
          <Button
            className="bannerButton"
            href="https://huynhtan97.github.io/Portfolio/"
          >
            My AngularJs Site
          </Button>
        </Col>
      </Row>
    </Content>
  );
};

const AboutMe = () => (
  <Content className="aboutMe">
    <Row gutter={16} align="middle">
      <Col md={12} xs={24}>
        <img className="profileImage" alt="profileImage" src={profileImage} />
      </Col>
      <Col md={12} xs={24}>
        <Card className="aboutMeCard" title="About Me">
          <p>Hi! Thank you for visiting my website!</p>
          <p>
            {"I received my Bachelor's Degree in Computer Science with a minor in Applied Math from Wentworth Institute of Technology in December 2019."}
          </p>
          <p>
            {"I'm originally from West Hartford, CT, but decided to move to the big city to meet new people and explore opportunities. I knew I wanted to be in this field after I completed my first computer programming class in Junior year of highschool."}
          </p>
          <p>
            {"Since then, I got expand upon my knowledge by attending hackathons, tech workshops, undergrad work, and from teaching myself via online resources."}
          </p>
          <p>
            <b>
              To view my skills, projects, achievements, and work experience:
            </b>{" "}
            Please navigate to the corresponding pages in sidenav menu {" "}
          </p>
        </Card>
      </Col>
    </Row>
  </Content>
);

const ContactInfo = () => (
  <Content className="contactInfo">
    <Row gutter={16}>
      {contactInfo.map((item) => (
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
);

const Main = ({ location }) => (
  <MainLayout selectedKey={location.pathname}>
    <div style={{ flexDirection: "column" }}>
      <Landing />
      <AboutMe />
      <ContactInfo />
    </div>
  </MainLayout>
);

export default Main;
