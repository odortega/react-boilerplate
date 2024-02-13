import fetchAPI from "./api";

const projectsEndpoint = "books";

/**
 * Fetches the list of projects.
 * @returns {Promise<Array>} A promise that resolves to an array of projects.
 */
export const fetchProjects = () => {
  return fetchAPI(`${projectsEndpoint}?_quantity=100`);
};

/**
 * Fetches a single project by ID.
 * @param {string} id - The ID of the project to retrieve.
 * @returns {Promise<Object>} A promise that resolves to the details of a project.
 */
export const fetchProjectById = (id) => {
  return fetchAPI(`${projectsEndpoint}/${id}`);
};

/**
 * Creates a new project.
 * @param {Object} project - The project data to create.
 * @returns {Promise<Object>} A promise that resolves to the created project.
 */
export const createProject = (project) => {
  return fetchAPI(projectsEndpoint, {
    method: "POST",
    body: JSON.stringify(project),
  });
};

/**
 * Updates an existing project.
 * @param {string} id - The ID of the project to update.
 * @param {Object} projectUpdate - The project data to update.
 * @returns {Promise<Object>} A promise that resolves to the updated project.
 */
export const updateProject = (id, projectUpdate) => {
  return fetchAPI(`${projectsEndpoint}/${id}`, {
    method: "PUT",
    body: JSON.stringify(projectUpdate),
  });
};

/**
 * Deletes a project by ID.
 * @param {string} id - The ID of the project to delete.
 * @returns {Promise<void>} A promise that resolves when the project is deleted.
 */
export const deleteProject = (id) => {
  return fetchAPI(`${projectsEndpoint}/${id}`, {
    method: "DELETE",
  });
};
