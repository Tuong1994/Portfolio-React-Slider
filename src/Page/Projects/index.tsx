import React from "react";
import * as Components from "../../Components";
import * as customHooks from "../../Hooks";
import useLangStore from "../../Store/Lang";
import Content from "./Content";
import utils from "../../Utils";

interface ProjectsProps {}

const Projects: React.FC<ProjectsProps> = (props) => {
  const langs = useLangStore((state) => state.langs);

  const projects = [
    {
      id: utils.uuid(),
      title: langs?.pages.projects.project_1.name,
      content: (
        <Content
          langs={langs}
          company={langs?.pages.projects.project_1.company ?? ""}
          descript={langs?.pages.projects.project_1.descript ?? ""}
          role={langs?.pages.projects.project_1.role ?? ""}
          tech={langs?.pages.projects.project_1.tech ?? ""}
          link="https://app-staging.cnvloyalty.com/ "
          pass="admin/123456"
        />
      ),
    },
    {
      id: utils.uuid(),
      title: langs?.pages.projects.project_2.name,
      content: (
        <Content
          langs={langs}
          company={langs?.pages.projects.project_2.company ?? ""}
          descript={langs?.pages.projects.project_2.descript ?? ""}
          role={langs?.pages.projects.project_2.role ?? ""}
          tech={langs?.pages.projects.project_2.tech ?? ""}
          link="https://plugins.cnvloyalty.com/contract-staging/contract/list"
          pass="admin/123456"
        />
      ),
    },
    {
      id: utils.uuid(),
      title: langs?.pages.projects.project_3.name,
      content: (
        <Content
          langs={langs}
          company={langs?.pages.projects.project_3.company ?? ""}
          descript={langs?.pages.projects.project_3.descript ?? ""}
          role={langs?.pages.projects.project_3.role ?? ""}
          tech={langs?.pages.projects.project_3.tech ?? ""}
          link="https://plugins.cnvloyalty.com/photo-library-staging/photo-libr ary/list"
          pass="admin/123456"
        />
      ),
    },
    {
      id: utils.uuid(),
      title: langs?.pages.projects.project_4.name,
      content: (
        <Content
          langs={langs}
          company={langs?.pages.projects.project_4.company ?? ""}
          descript={langs?.pages.projects.project_4.descript ?? ""}
          role={langs?.pages.projects.project_4.role ?? ""}
          tech={langs?.pages.projects.project_4.tech ?? ""}
          link="https://plugins.cnvloyalty.com/buy-wholesale-price-staging/list "
          pass="admin/123456"
        />
      ),
    },
    {
      id: utils.uuid(),
      title: langs?.pages.projects.project_5.name,
      content: (
        <Content
          langs={langs}
          company={langs?.pages.projects.project_5.company ?? ""}
          descript={langs?.pages.projects.project_5.descript ?? ""}
          role={langs?.pages.projects.project_5.role ?? ""}
          tech={langs?.pages.projects.project_1.tech ?? ""}
          link="https://plugins.cnvloyalty.com/buy-x-get-y-staging/list "
          pass="admin/123456"
        />
      ),
    },
  ];

  const projectsMode = customHooks.useMode("projects");
  const projectTheme = customHooks.useTheme("projects");

  return (
    <div className={`projects ${projectsMode} ${projectTheme}`}>
      <Components.ContentHeader title={langs?.pages.projects.title} isMode />

      <div className="projects__detail">
        {projects.map((p) => (
          <Components.Accordion
            key={p.id}
            containerClass="detail__item"
            title={p.title}
            content={p.content}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
