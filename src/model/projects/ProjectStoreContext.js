// src/model/projects/ProjectStoreContext.js
import React from "react";
import ProjectStore from "./projects-store";

const ProjectStoreContext = React.createContext(new ProjectStore());

export default ProjectStoreContext;
