import React from "react";
import MainLayout from "../../layout/MainLayout";
import RESUME from "../../assets/resume/resume.json";


const Skills = () => {
  return (
    <MainLayout selectedKey={window.location.pathname}>

      <div class="flex flex-col flex-wrap gap-4 my-2 mx-4 w-full">
        {RESUME.skills.map(skillSet => (
          <div key={skillSet.name} className="bg-card p-4 rounded-lg flex flex-col gap-4">
            <h3>{skillSet.name}</h3>
            <div className="flex flex-row flex-wrap gap-4">
              {skillSet.keywords.map(item => <span className="bg-foreground py-2 px-4 rounded-full">{item}</span>)}
            </div>
          </div>
        ))}
      </div>
    </MainLayout>
  )
}

export default Skills;
