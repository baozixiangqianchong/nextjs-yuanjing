import { useState } from "react";
// import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { projectsData } from "../../data/projectsData";
// import ProjectsFilter from "./ProjectsFilter";

function ProjectsGrid() {
  // const [searchProject, setSearchProject] = useState();
  const [selectProject, setSelectProject] = useState();

  // @todo - To be fixed
  // const searchProjectsByTitle = projectsData.filter((item) => {
  // 	const result = item.title
  // 		.toLowerCase()
  // 		.includes(searchProject.toLowerCase())
  // 		? item
  // 		: searchProject == ''
  // 		? item
  // 		: '';
  // 	return result;
  // });

  const selectProjectsByCategory = projectsData.filter((item) => {
    let category =
      item.category.charAt(0).toUpperCase() + item.category.slice(1);
    return category.includes(selectProject);
  });

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl dark:text-ternary-light">
          功能展示
        </p>
      </div>

      <div className="mt-10 sm:mt-8">
        <h3 className="font-general-regular text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3">
          源境Tab
          极简高效的新标签页，聚合多种搜索、技术文档快速检索和沉浸式番茄钟，让每个标签页都成为你的生产力中心
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-5">
        {selectProject
          ? selectProjectsByCategory.map((project, index) => {
              return <ProjectSingle key={index} {...project} />;
            })
          : projectsData.map((project, index) => (
              <ProjectSingle key={index} {...project} />
            ))}
      </div>
    </section>
  );
}

export default ProjectsGrid;
