import React from 'react';
import { DiPython } from 'react-icons/di';
import { BiCodeAlt } from 'react-icons/bi';
import { BsDatabaseCheck } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range a technologies in the data science world.
      From Web scraping To Evaluate Model.
    </SectionText>
    <List>
      <ListItem>
        <DiPython size="3rem" />
        <ListContainer>
          <ListTitle>Data Science</ListTitle>
          <ListParagraph>
          Experience with <br />
          Scikit-learn <br />
          spaCy <br />
          Pandas <br />
          NumPy <br />
          Keras <br />
          NLTK <br />
          PyTorch
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <BiCodeAlt size="3rem" />
        <ListContainer>
          <ListTitle>Programming</ListTitle>
          <ListParagraph>
          Experience with <br />
          Python <br />
          C++ <br />
          Java <br />
          Bash
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <BsDatabaseCheck size="3rem" />
        <ListContainer>
          <ListTitle>SGBD</ListTitle>
          <ListParagraph>
          Experience with <br />
          MangoDB<br />
          Neo4j
          </ListParagraph>
        </ListContainer>
      </ListItem>

      <ListItem>
        <FiMoreHorizontal size="3rem" />
        <ListContainer>
          <ListTitle>Additional</ListTitle>
          <ListParagraph>
          Experience with <br />
          JSON, XML <br />
          LaTeX <br />
          GATE <br />
          HTML/CSS <br />
          React <br />
          Scratch <br />
          Praat <br />
          Solr <br />
          Protégé <br />
          Unitex
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
