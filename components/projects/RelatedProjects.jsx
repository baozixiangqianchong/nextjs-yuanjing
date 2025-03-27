import Image from "next/image";
import { v4 as uuidv4 } from "uuid";

const RelatedProject = {
  title: "功能聚焦",
  Projects: [
    {
      id: uuidv4(),
      title: "技术速查",
      img: "/images/look-through-1.png",
    },
    {
      id: uuidv4(),
      title: "极致引擎",
      img: "/images/search-way-1.png",
    },
    {
      id: uuidv4(),
      title: "番茄钟",
      img: "/images/pomodoro-1.png",
    },
    {
      id: uuidv4(),
      title: "天气组件",
      img: "/images/weather-2.png",
    },
  ],
};

function RelatedProjects() {
  return (
    <div className="mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark">
      <p className="font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left">
        {RelatedProject.title}
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-10">
        {RelatedProject.Projects.map((project) => {
          return (
            <Image
              src={project.img}
              className="rounded-xl cursor-pointer"
              width="400"
              height="400"
              alt={project.title}
              key={project.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default RelatedProjects;
