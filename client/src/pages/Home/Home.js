import React from 'react';import { Slide } from '@material-ui/core';
import Heading from '../../components/Heading/Heading';
import Skills from '../../components/Skills/Skills';
import ProjectsSection from '../../components/ProjectsSection/ProjectsSection';

export default function Home() {
  return (
    <Slide direction='right' in mountOnEnter unmountOnExit>
      <div>
        <Heading />
        <Skills />
        <ProjectsSection />
      </div>
    </Slide>
  );
}
