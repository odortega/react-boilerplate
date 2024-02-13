import { makeAutoObservable, runInAction } from "mobx";
import { fetchProjects } from "../../services/api/projects-api";

class ProjectStore {
  projectsList = [];

  constructor() {
    makeAutoObservable(this);
  }

  getProjects = async () => {
    try {
      const { data } = await fetchProjects();
      runInAction(() => {
        this.projectsList = data;
      });
    } catch (error) {
      console.error("Failed to fetch projects", error);
      this.projectsList = [];
    }
  };
}

export default new ProjectStore();
