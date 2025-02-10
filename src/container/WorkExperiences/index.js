import React from "react";
import { Collapse } from "antd";
import MainLayout from "../../layout/MainLayout";
import RESUME from "../../assets/resume/resume.json"

const WorkExperiences = () => {
  const renderTitle = (title) => (
    <div className="bg-card">
      <h4 className="text-lg text-input font-semibold">{title}</h4>
    </div>
  );

  const renderDescription = (date, description, subtitle) => (
    <div className="p-2 rounded-lg">
      <h5 className="text-muted font-medium mb-1">{subtitle}</h5>
      <h6 className="text-muted italic mb-2">{date}</h6>
      <ul className="text-muted list-disc pl-5">
        <li className="text-muted">{description}</li>
      </ul>
    </div>
  );

  return (
    <MainLayout selectedKey={window.location.pathname}>
      <div className="p-4 w-full">
        <Collapse defaultActiveKey={[RESUME.work[0].title]} style={{ backgroundColor: "var(--card)", color: "var(--input)" }} className="w-full">
          {RESUME.work.map((item) => (
            <Collapse.Panel
              className="p-2 break-words"
                key={item.title}
                icon={<item.Icon />}
                header={renderTitle(item.title)}
              >
              {renderDescription(item.date, item.description, item.subtitle)}
            </Collapse.Panel>
          ))}
        </Collapse>
      </div>
      </MainLayout>
    );
};
export default WorkExperiences;