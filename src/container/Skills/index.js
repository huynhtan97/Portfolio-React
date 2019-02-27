import React, { Component } from 'react';
import { Tooltip, Tag, Card } from "antd";
import MainLayout from '../../layout/MainLayout';

const programmingLanguageSkills = [
  { color: "red", title: "Java", years: 2}, 
  { color: "blue", title: "Javascript", years: 2}, 
  { color: "red", title: "HTML", years: 2}, 
  { color: "blue", title: "CSS", years: 2}, 
  { color: "red", title: "Python", years: 2}, 
];
const toolsAndServicesSkills = [
  { color: "blue", title: "AWS", years: 2}, 
  { color: "red", title: "Google Cloud Platform", years: 2}, 
  { color: "blue", title: "IBM Cloud", years: 2}, 
];
const frameworkSkills = [
  { color: "red", title: "AngularJS", years: 2}, 
  { color: "blue", title: "Angular 2+", years: 2}, 
];
const softwareSkills = [
  { color: "red", title: "Android Studio", years: 2}, 
  { color: "blue", title: "Unity", years: 2}, 
  { color: "red", title: "Microsoft Office", years: 2}, 
];
const softSkills = [
  { color: "blue", title: "Teamwork", years: 2}, 
  { color: "red", title: "Organization", years: 2}, 
  { color: "blue", title: "Team leadership", years: 2}, 
  { color: "red", title: "Communication", years: 2}, 
  { color: "blue", title: "Self-motivation", years: 2}, 
];
class Skills extends Component {
            
  renderTag(item) {
    return (
      <Tooltip key={item.title} title={`${item.years} ${item.years > 1 ? "years" : "year"} of experiences`}>
        <Tag color={item.color}>{item.title}</Tag>
      </Tooltip>
    )
  }

  renderTagList(title, list) {
    return (
      <Card title={title} style={{ margin: "16px" }}>
        {list.map(item => this.renderTag(item))}
      </Card>                              
    )        
  }

  render() {
    return (
      <MainLayout selectedKey={this.props.location.pathname}> 
        {this.renderTagList("Programming Language", programmingLanguageSkills)}
        {this.renderTagList("Tools and Services", toolsAndServicesSkills)}
        {this.renderTagList("Framework", frameworkSkills)}
        {this.renderTagList("Software", softwareSkills)}
        {this.renderTagList("Soft Skills", softSkills)}
      </MainLayout>
    )
  }
}

export default Skills;