import React, { Component } from 'react';
import { Tooltip, Tag, Card } from "antd";
import MainLayout from '../../layout/MainLayout';

/**
  * if years >= 3, then color = green
  * if years == 2, then color = volcano
  * if years < 2, then color = gold
 */
const programmingLanguageSkills = [
  { color: "green", title: "Java", years: 5}, 
  { color: "green", title: "Javascript", years: 3}, 
  { color: "volcano", title: "Typescript", years: 2}, 
  { color: "gold", title: "jQuery", years: 1}, 
  { color: "volcano", title: "Python", years: 2}, 
  { color: "gold", title: "PHP", years: 1}, 
  { color: "green", title: "HTML", years: 3}, 
  { color: "green", title: "CSS/Bootstrap", years: 3}, 
  { color: "volcano", title: "Ruby", years: 2}, 
  { color: "green", title: "Markdown", years: 3}, 
  { color: "gold", title: "C", years: 1}, 
  { color: "gold", title: "C++", years: 1}, 
  { color: "volcano", title: "Matlab", years: 2}, 
  { color: "gold", title: "R", years: 1}, 
  { color: "green", title: "SQL", years: 3},
  { color: "gold", title: "Shell scripting", years: 1},  
];
const toolsAndServicesSkills = [
  { color: "volcano", title: "AWS", years: 2}, 
  { color: "gold", title: "Google Cloud Platform", years: 1}, 
  { color: "gold", title: "IBM Cloud", years: 1}, 
];
const frameworkSkills = [
  { color: "volcano", title: "AngularJS", years: 2}, 
  { color: "gold", title: "React", years: 1},
  { color: "volcano", title: "Rails", years: 2}, 
];
const softwareSkills = [
  { color: "volcano", title: "Android Studio", years: 2}, 
  { color: "volcano", title: "XCode", years: 2}, 
  { color: "volcano", title: "MySQL", years: 2},
  { color: "volcano", title: "MongoDB", years: 2},
  { color: "volcano", title: "Microsoft SQL Server", years: 2},
  { color: "green", title: "Github", years: 4},
  { color: "volcano", title: "Heroku", years: 2},
  { color: "volcano", title: "Spring Tool Suite", years: 2}, 
  { color: "gold", title: "ServiceNow", years: 1},
  { color: "green", title: "Unity", years: 3},
  { color: "green", title: "Microsoft Office", years: 8},
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