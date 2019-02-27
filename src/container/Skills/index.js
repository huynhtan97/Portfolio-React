import React, { Component } from 'react';
import { Tooltip, Tag, Card } from "antd";
import MainLayout from '../../layout/MainLayout';

/**
  * if years >= 3, then color = magenta
  * if years == 2, then color = green
  * if years < 2, then color = cyan
 */
const programmingLanguageSkills = [
  { color: "magenta", title: "Java", years: 5}, 
  { color: "magenta", title: "Javascript", years: 3}, 
  { color: "green", title: "Typescript", years: 2}, 
  { color: "cyan", title: "jQuery", years: 1}, 
  { color: "green", title: "Python", years: 2}, 
  { color: "cyan", title: "PHP", years: 1}, 
  { color: "magenta", title: "HTML", years: 3}, 
  { color: "magenta", title: "CSS/Bootstrap", years: 3}, 
  { color: "green", title: "Ruby", years: 2}, 
  { color: "magenta", title: "Markdown", years: 3}, 
  { color: "cyan", title: "C", years: 1}, 
  { color: "cyan", title: "C++", years: 1}, 
  { color: "green", title: "Matlab", years: 2}, 
  { color: "cyan", title: "R", years: 1}, 
  { color: "magenta", title: "SQL", years: 3},
  { color: "cyan", title: "Shell scripting", years: 1},  
];
const toolsAndServicesSkills = [
  { color: "green", title: "AWS", years: 2}, 
  { color: "cyan", title: "Google Cloud Platform", years: 1}, 
  { color: "cyan", title: "IBM Cloud", years: 1}, 
];
const frameworkSkills = [
  { color: "green", title: "AngularJS", years: 2}, 
  { color: "cyan", title: "React", years: 1},
  { color: "green", title: "Rails", years: 2}, 
];
const softwareSkills = [
  { color: "green", title: "Android Studio", years: 2}, 
  { color: "green", title: "XCode", years: 2}, 
  { color: "green", title: "MySQL", years: 2},
  { color: "green", title: "MongoDB", years: 2},
  { color: "green", title: "Microsoft SQL Server", years: 2},
  { color: "magenta", title: "Github", years: 4},
  { color: "green", title: "Heroku", years: 2},
  { color: "green", title: "Spring Tool Suite", years: 2}, 
  { color: "cyan", title: "ServiceNow", years: 1},
  { color: "magenta", title: "Unity", years: 3},
  { color: "magenta", title: "Microsoft Office", years: 8},
];
class Skills extends Component {
            
  renderTag(item) {
    return (
      <Tooltip key={item.title} title={`${item.years} ${item.years > 1 ? "years" : "year"} of experiences`}>
        <Tag color={item.color} style={{ margin: "5px"}}>{item.title}</Tag>
      </Tooltip>
    )
  }

  renderTagList(title, list) {
    return (
      <Card title={title} style={{ margin: "16px"}}>
        {list.map(item => this.renderTag(item))}
      </Card>                              
    )        
  }

  render() {
    return (
      <MainLayout selectedKey={this.props.location.pathname}> 
        {this.renderTagList("Programming Language", programmingLanguageSkills)}
        {this.renderTagList("Tools and Services", toolsAndServicesSkills)}
        {this.renderTagList("Frameworks", frameworkSkills)}
        {this.renderTagList("Software", softwareSkills)}
      </MainLayout>
    )
  }
}

export default Skills;