import React from 'react';
import ProjectPropTypes from './Project.props';
import { ProjectContainer, ProjectTitle, ProjectDescription } from './Project.styled';
import { Card } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Paragraph } = Typography;

const Project = ({ id, title, description }) => {
  const { t } = useTranslation();
  return (
    <ProjectContainer>
      <Card
        actions={[
          <EditOutlined key="edit" title={t('edit')} />,
          <DeleteOutlined key="delete" title={t('delete')} />
        ]}
      >
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>
          <Paragraph ellipsis={{ rows: 3, expandable: true, symbol: 'more' }}>
            {description}
          </Paragraph>
        </ProjectDescription>
      </Card>
    </ProjectContainer>
  );
};

Project.propTypes = ProjectPropTypes;

export default Project;
