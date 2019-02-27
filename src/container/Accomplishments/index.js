import React, { Component } from 'react';
// Wrap this around every page to get sidenav and toolbar
import MainLayout from "../../layout/MainLayout";
import { Steps, Icon } from 'antd';

const accomplishmentsList = [
  {
    icon: "star",
    title: "Wentworth's Computer Science Society",
    date: "September 2016",
    subtitle: "Treasurer",
    description: "Elected Treasurer for Wentworth's first Computer Science Society - Chapter of ACM",
  },
  {
    icon: "down-circle",
    title: "HackWITUs 1",
    date: "March 2017",
    subtitle: "Head of Finance",
    description: `Helped raise more than $10,000 in sponsorships through reaching out to personal network and company representatives. 
                  Managed event's cash flow (Food, Venue ..etc) and maintained transparency with spreadsheets`,
  },
  {
    icon: "down-circle",
    title: "LeaderShape",
    date: "May 2017",
    subtitle: "Sponsored by Wentworth",
    description: `https://www.leadershape.org/ - Learned how to become an impactful leader in my community and be inclusive of team members`,
  },
  {
    icon: "down-circle",
    title: "WSG",
    date: "September 2017",
    subtitle: "Treasurer",
    description: `First female elected Treasurer in 7+ years. Directed co-sponsorship program and managed annual $8500 budget`,
  },
  {
    icon: "down-circle",
    title: "Node.js Interactive 2017",
    date: "October 2017",
    subtitle: "Sponsored by Wentworth",
    description: `Sponsored by Wentworth to attend Node.js Interactive conference 2017 in Vancouver, Canada. Networked with developers in industry,
                  learned how various companies utilize Javascript frameworks, and attended live demos`,
  },
  {
    icon: "down-circle",
    title: "HackWITUs 2",
    date: "November 2017",
    subtitle: "Head of Finance",
    description: "Served as Head of Finance again for Wentworth's second annual hackathon. Helped raise more than $10,000 in sponsorships",
  },
  {
    icon: "down-circle",
    title: "CIO Search Committee",
    date: "December 2017",
    subtitle: "Student Representative",
    description: "Recommended by Dean of Students to serve as Student Representative. Interviewed 9 candidates and helped narrow to 1",
  },
  {
    icon: "down-circle",
    title: "Community Standards Board",
    date: "April 2018",
    subtitle: "Council Member",
    description: `Passed interview and leadership elimination round to become elected Community Standards Board member. 
                  Purpose of board is to enforce school's code of conduct.`,
  },
  {
    icon: "down-circle",
    title: "HackWITUs 3",
    date: "November 2018",
    subtitle: "Head of Sponsorship",
    description: "New position to soley focus on sponsorship management (inspired by SheHacks organization team)",
  },
  {
    icon: "down-circle",
    title: "Information Security Council",
    date: "January 2019",
    subtitle: "Student Representative",
    description: "Recommended by Director of Student Engagement. Brainstorm with CIO and various faculty members on how to increase campus data security",
  },
];

class Accomplishments extends Component {

    renderTitle = (title, subtitle) => (
      <div>
        <h3 className="accomplishmentTitle">{title}</h3>
        <h5 className="accomplishmentSubtitle">{subtitle}</h5>
      </div>
    )

    renderDescription = (date, description) => (
      <div>
        <h5 className="accomplishmentDate">{date}</h5> 
        <p>{description}</p>
      </div>
    )

    render() {
      return (
        <MainLayout selectedKey={this.props.location.pathname}> 
          <Steps direction="vertical" current={accomplishmentsList.length - 1} style={{ margin: 32, wordWrap: "break-word" }}>
            {accomplishmentsList.map(item => (
              <Steps.Step 
                style={{ padding: "10px", wordWrap: "break-word" }}
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

export default Accomplishments