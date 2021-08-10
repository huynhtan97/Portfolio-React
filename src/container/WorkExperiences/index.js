import React, { Component } from 'react';
import { Collapse, Icon } from 'antd';
import MainLayout from '../../layout/MainLayout';

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
  renderTitle = (title) => (
    <div>
      <h3 className="accomplishmentTitle">{title}</h3>
    </div>
  );

  renderDescription = (date, description, subtitle) => (
    <div>
      <h3 className="accomplishmentSubtitle" style={{ color: "blue" }}>{subtitle}</h3>
      <h5 className="accomplishmentDate" style={{ fontStyle: "italic" }}>{date}</h5>
      <ul><li>{description}</li></ul>
    </div>
  );

  render() {
    return (
      <MainLayout selectedKey={this.props.location.pathname}>
        <Collapse
          defaultActiveKey={[workExperiencesList[0].title]}
          style={{ margin: 32, wordWrap: "break-word" }}
        >
          {workExperiencesList.map((item) => (
            <Collapse.Panel
              style={{ padding: "10px", wordWrap: "break-word" }}
              key={item.title}
              icon={<Icon type={item.icon} />}
              header={this.renderTitle(item.title)}
            >
              {this.renderDescription(item.date, item.description, item.subtitle)}
            </Collapse.Panel>
          ))}
        </Collapse>
      </MainLayout>
    );
  }
}

export default WorkExperiences