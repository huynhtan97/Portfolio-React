import React, { Component } from "react";
import { Icon, Collapse } from "antd";
// Wrap this around every page to get sidenav and toolbar
import MainLayout from "../../layout/MainLayout";

const accomplishmentsList = [
  {
    icon: "down-circle",
    title: "Wentworth's Computer Science Society",
    date: "September 2016",
    subtitle: "Treasurer",
    description:
      "Elected Treasurer for Wentworth's first Computer Science organization that is a Chapter of ACM. Wentworth's Computer Science Society was later awarded Organization of the Year in 2017.",
  },
  {
    icon: "down-circle",
    title: "HackWITUs 1",
    date: "March 2017",
    subtitle: "Head of Finance",
    description: `https://hackwit.us/ - Helped raise more than $10,000 in sponsorships from companies such as GoPuff, Webster Bank, HealthcareSource, and Automation. Managed event's cash flow and maintained transparency with team using Excel.`,
  },
  {
    icon: "down-circle",
    title: "LeaderShape",
    date: "May 2017",
    subtitle: "Sponsored by Wentworth",
    description: `https://www.leadershape.org/ - Attended 4 day retreat where students from all around America learned how to become impactful leaders in their communities and be inclusive of their team members.`,
  },
  {
    icon: "down-circle",
    title: "Wentworth's Student Government",
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
                  learned how various companies utilize Javascript frameworks, and attended live workshops`,
  },
  {
    icon: "down-circle",
    title: "HackWITUs 2",
    date: "November 2017",
    subtitle: "Head of Finance",
    description:
      "Served as Head of Finance again for Wentworth's second annual hackathon. Helped raise more than $10,000 in sponsorships from companies such as Microsoft and Webster Bank.",
  },
  {
    icon: "down-circle",
    title: "CIO Search Committee",
    date: "December 2017",
    subtitle: "Student Representative",
    description:
      "Recommended by Dean of Students to serve as Student Representative. Interviewed 9 candidates and helped narrow down to 1",
  },
  {
    icon: "down-circle",
    title: "SheHacks Boston",
    date: "January 2018",
    subtitle: "Winner of Most Innovative Project and She</Learns> Challenge",
    description:
      "Competed against 100+ teams. Lead group of 5 novice programmers to build mobile app that allows victims of sexual/domestic violence to report evidence discreetly from abusers using Android Studio and Firebase.",
  },
  {
    icon: "down-circle",
    title: "Community Standards Board",
    date: "April 2018",
    subtitle: "Council Member",
    description: `Passed interview and leadership elimination round to become one of Wentworth's Community Standards Board member. 
                  Purpose of board is to discuss ways to enforce school's code of conduct.`,
  },
  {
    icon: "down-circle",
    title: "HackWITUs 3",
    date: "November 2018",
    subtitle: "Head of Sponsorship",
    description:
      "New position to solely focus on sponsorship management (inspired by TechTogether team format). Helped raise more than $15,000 in sponsorships from companies such as Google and Microsoft.",
  },
  {
    icon: "down-circle",
    title: "Information Security Council",
    date: "January 2019",
    subtitle: "Student Representative",
    description:
      "Recommended by Wentworth's Director of Student Engagement to join the school's Information Security Council. Brainstormed with CIO and various faculty members on how to increase campus data security",
  },
  {
    icon: "down-circle",
    title: "TechTogether Boston 2019",
    date: "January 2019",
    subtitle: "Winner of IBM's Best Use of AI Challenge",
    description:
      "Competed against 100+ teams. Created prototype of an IOT facial recognition app that identified people based on an unbiased dataset using TensorFlow, Raspberry Pi, NodeRed, and OpenCV (Javascript and Python).",
  },
  {
    icon: "down-circle",
    title: "Wentworth's Dean's List",
    date: "December 2015 - December 2019",
    subtitle: "Dean's List Recipient",
    description:
      "Placed on Dean's List at the end of every semester enrolled in school. Requirement is a minimum of a 3.50 GPA.",
  },
];

class Accomplishments extends Component {
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
          defaultActiveKey={[accomplishmentsList[0].title]}
          style={{ margin: 32, wordWrap: "break-word" }}
        >
          {accomplishmentsList.map((item) => (
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

export default Accomplishments;
