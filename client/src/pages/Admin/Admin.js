import React from 'react';import { Slide } from '@material-ui/core';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';
import SkillsForm from '../../components/SkillsForm/SkillsForm';

export default function Admin() {
  return (
    <Slide direction='right' in mountOnEnter unmountOnExit>
      <div>
        <SkillsForm />
      </div>
    </Slide>
  );
}
