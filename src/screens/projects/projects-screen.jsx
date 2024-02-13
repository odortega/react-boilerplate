import React, { useEffect } from 'react';
import { observer, useLocalObservable } from 'mobx-react';
import ProjectsScreenPropTypes from './projects-screen.props';
import { ProjectsScreenContainer, ProjectsTitle, ProjectsList } from './projects-screen.styled';
import Project from '../../components/Project/Project';
import ProjectStore from '../../model/projects/projects-store';
import { useTranslation } from 'react-i18next';

const ProjectsScreen = observer(({ title }) => {
  const projectStore = useLocalObservable(() => ProjectStore);
  const { t } = useTranslation();

  useEffect(() => {
    projectStore.getProjects();
  }, [projectStore]);

  return (
    <ProjectsScreenContainer>
      {title && <ProjectsTitle>{t(title)}</ProjectsTitle>}
      <ProjectsList>
        {Object.values(projectStore.projectsList).map((project) => (
          <Project key={project.id} id={project.id} title={project.title} description={project.description} />
        ))}
      </ProjectsList>
    </ProjectsScreenContainer>
  );
});

ProjectsScreen.propTypes = ProjectsScreenPropTypes;

export default ProjectsScreen;
