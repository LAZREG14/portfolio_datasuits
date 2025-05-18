import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome To <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
      Hi, I'm Mustapha. I'm a data scientist, passionate about Artificial Intelligence and Natural Language Processing technologies.
      </SectionText>
      <Button onClick={() => window.location = 'https://www.datasuits.fr'}>CV</Button>
    </LeftSection>
  </Section>
);

export default Hero;