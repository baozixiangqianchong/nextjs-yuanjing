import PagesMetaHead from "../../components/PagesMetaHead";
import ProjectsGrid from "../../components/projects/ProjectsGrid";

function index() {
  return (
    <div className="container mx-auto">
      <PagesMetaHead title="项目" />

      <ProjectsGrid />
    </div>
  );
}

export default index;
