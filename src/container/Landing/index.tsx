import React from "react";
import { Layout } from "antd";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillPushpin } from "react-icons/ai";
import { AiFillMediumCircle } from "react-icons/ai";

import MainLayout from "../../layout/MainLayout";
import profileImage from "../../assets/images/PersonalPic.jpg";
import RESUME from "../../assets/resume/resume.json";

import "./index.css";

const { Content } = Layout;

const IconMapper = {
  Email: AiFillMail,
  LinkedIn: AiFillLinkedin,
  GitHub: AiFillGithub,
  Location: AiFillPushpin,
  Medium: AiFillMediumCircle,
}

const Landing = () => {
  return (
    <div className="landingField">
      <h1 className="text-white p-4 rounded-lg font-black border-4">{RESUME.basic.name}</h1>
      <h3 className="text-white p-4">
        {RESUME.basic.label}
      </h3>
      <div className="flex flex-row gap-2 justify-between">
        <button className="bg-primary hover:cursor-pointer hover:bg-secondary shadow-2xl shadow-primary text-lg px-4 py-2 rounded-lg" onClick={() => {
          window.location.href = "https://huynhtan97.github.io/Portfolio/"
        }}>
          My Angular Site
        </button>
      </div>
    </div>
  );
};

const AboutMe = () => (
  <div className="grid max-lg:grid-col-1 min-lg:grid-cols-2 gap-4 my-2">
    <div>
      <img className="w-full" alt="profileImage" src={profileImage} />
    </div>

    <div className="w-full h-full bg-card p-4 rounded-lg flex flex-col gap-4" title="About Me">
      {
        RESUME.custom.bio.map(item => (
          <p className="text-xl" key={item}>{item}</p>
        ))
      }
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="flex flex-wrap gap-2 justify-between items-center w-full my-2">
    {RESUME.basic.profiles.map((item) => {
      const Icon = IconMapper[item.network];
      return (
        <div className="flex flex-col gap-1 bg-card p-4 rounded-lg w-[200px]" key={item.username}>
          <h5>
            <span className="flex flex-row align-middle flex-nowrap gap-2">
              <Icon size={24} /> {item.network}
            </span>
          </h5>
          <h6><a href={item.url} target="_blank">{item.username}</a></h6>
        </div>
      )
    })}
  </div>
);

const Main = () => (
  <MainLayout selectedKey={window.location.pathname}>
    <div className="flex flex-col gap-4 items-center p-4">
      <Landing />
      <AboutMe />
      <ContactInfo />
    </div>
  </MainLayout>
);

export default Main;
