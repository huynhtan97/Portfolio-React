import React, { Component } from 'react';
import { Tooltip, Tag, Card } from "antd";
import { sortBy, reverse } from "lodash";
import MainLayout from '../../layout/MainLayout';

/**
  * if years >= 3, then color = green
  * if years == 2, then color = blue
  * if years < 2, then color = cyan
 */
const programmingLanguageSkills = [
  { color: "green", title: "Java", years: 5}, 
  { color: "green", title: "Javascript", years: 3}, 
  { color: "green", title: "HTML", years: 3}, 
  { color: "green", title: "CSS/Bootstrap", years: 3}, 
  { color: "blue", title: "Typescript", years: 2}, 
  { color: "cyan", title: "jQuery", years: 1}, 
  { color: "blue", title: "Python", years: 2}, 
  { color: "cyan", title: "C", years: 1}, 
  { color: "cyan", title: "PHP", years: 1}, 
  { color: "blue", title: "Ruby", years: 2}, 
  { color: "green", title: "Markdown", years: 3}, 
  { color: "cyan", title: "C++", years: 1}, 
  { color: "blue", title: "Matlab", years: 2}, 
  { color: "cyan", title: "R", years: 1}, 
  { color: "green", title: "SQL", years: 3},
  { color: "cyan", title: "Shell scripting", years: 1},  
];
const toolsAndServicesSkills = [
  { color: "blue", title: "AWS", years: 2}, 
  { color: "cyan", title: "Google Cloud Platform", years: 1}, 
  { color: "cyan", title: "IBM Cloud", years: 1}, 
];
const frameworkSkills = [
  { color: "blue", title: "AngularJS", years: 2}, 
  { color: "cyan", title: "React", years: 1},
  { color: "blue", title: "Rails", years: 2},
  { color: "blue", title: "Spark", years: 2},  
];
const softwareSkills = [
  { color: "blue", title: "Android Studio", years: 2}, 
  { color: "blue", title: "XCode", years: 2}, 
  { color: "blue", title: "MySQL", years: 2},
  { color: "blue", title: "MongoDB", years: 2},
  { color: "blue", title: "Microsoft SQL Server", years: 2},
  { color: "green", title: "Github", years: 4},
  { color: "blue", title: "Heroku", years: 2},
  { color: "blue", title: "Spring Tool Suite", years: 2}, 
  { color: "cyan", title: "ServiceNow", years: 1},
  { color: "green", title: "Unity", years: 3},
  { color: "green", title: "Microsoft Office", years: 8},
  { color: "cyan", title: "VMWare", years: 1},
];
class Skills extends Component {
            
  renderTag(item) {
    return (
      <Tooltip key={item.title} title={`${item.years} ${item.years > 1 ? "years" : "year"} of experiences`}>
        <Tag color={item.color} style={{ margin: "5px", borderRadius: "10px" }}>{item.title}</Tag>
      </Tooltip>
    )
  }

  renderTagList(title, list) {
    return (
      <Card title={title} style={{ margin: "16px"}}>
        {reverse(sortBy(list, "years")).map(item => this.renderTag(item))}
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