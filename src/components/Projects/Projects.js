import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
/*
const projectsDemo = [{
  tiltle: "Project 1",
  description: "This is really really realy long description about this project"
},{
  tiltle: "Project 2",
  description: "This is really really realy long description about this project"
},{
  tiltle: "Project 3",
  description: "This is really really realy long description about this project"
},{
  tiltle: "Project 4",
  description: "This is really really realy long description about this project"
}];
*/
const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Videos</SectionTitle>
    <GridContainer>
      {projects.map(({id, image, title, description, tags, code, vidéo}) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <div>
            <TitleContent>Stack</TitleContent>
            <TagList>
              {tags.map((tag,i) => (
                <Tag >{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={code}>Code</ExternalLinks>
            <ExternalLinks href={vidéo}>Vidéo</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;