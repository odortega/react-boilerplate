import { observable, runInAction, configure, decorate } from "mobx";
import { fetchProjects } from "../../api/projects-api";
configure({ enforceActions: "observed" });

class ProjectStore {
  projectsList = {};

  constructor() {}

  getProjects = async () => {
    const data = await fetchProjects();

    runInAction(() => {
      this.projectsList = data;
    });
  };
}

decorate(ProjectStore, {
  employeesList: observable,
});
export default new ProjectStore();
