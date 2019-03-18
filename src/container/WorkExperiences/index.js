import React, { Component } from 'react';
import MainLayout from '../../layout/MainLayout';
import { Steps, Icon } from 'antd';

const workExperiencesList = [
  {
    icon: "star",
    title: "Staples, Inc",
    date: "June 2017 - Auguest 2017",
    subtitle: "Digital Solutions Intern",
    description: "AngularJs, Javascript, REST APIs, Python",
  },
  {
    icon: "down-circle",
    title: "Visible Systems Corporation",
    date: "September 2017 - December 2017",
    subtitle: "Product and Platform Developer Intern",
    description: "Big Data Applications (Hadoop + Presto), Mendix, AWS Athena and Quicksight",
  },
  {
    icon: "down-circle",
    title: "Eaton Vance",
    date: "January 2018 - May 2018",
    subtitle: "IT Distribution Systems Intern",
    description: "Angular 5, PL/SQL, PHP, Oracle Database",
  },
  {
    icon: "down-circle",
    title: "Pegasystems",
    date: "May 2018 - August 2018",
    subtitle: "Junior System Architect Intern",
    description: "Jenkins, Python, Agile-Scrum methodology",
  },
  {
    icon: "down-circle",
    title: "Amazon Robotics",
    date: "September 2018 - December 2018",
    subtitle: "Solution Analytics Intern",
    description: "Java, AngularJs, Webpack, Coral Service Framework, AWS Lambda, DynamoDB",
  }
];

class WorkExperiences extends Component {
  renderTitle = (title, subtitle) => (
    <div>
      <h3 className="accomplishmentTitle">{title}</h3>
      <h5 className="accomplishmentSubtitle">{subtitle}</h5>
    </div>
  )

  renderDescription = (date, description) => (
    <div>
      <h5 className="accomplishmentDate">{date}</h5> 
      <p>Skills: {description}</p>
    </div>
  )

  render() {
    return (
      <MainLayout selectedKey={this.props.location.pathname}> 
        <Steps direction="vertical" current={workExperiencesList.length - 1} style={{ margin: 32, wordWrap: "break-word" }}>
          {workExperiencesList.map(item => (
            <Steps.Step 
              key={item.title}
              icon={<Icon type={item.icon} />}
              title={this.renderTitle(item.title, item.subtitle)}
              description={this.renderDescription(item.date, item.description)}
            />
          ))}
        </Steps>
      </MainLayout> 
    );
  }
}

export default WorkExperiences