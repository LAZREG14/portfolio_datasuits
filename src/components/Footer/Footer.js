import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillTwitterSquare, AiOutlineYoutube, AiOutlineGithub } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+33 7 80 40 52 38">+33 7 80 40 52 38</LinkItem>
        </LinkColumn>

        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:lazreg1408@gmail.com">lazreg1408@gmail.com</LinkItem>
        </LinkColumn>
      </LinkList>

      <Slogan>I post code on <SocialIcons href="https://github.com/LAZREG14"><AiOutlineGithub size="2rem" /></SocialIcons> <br /> Data Suits© 2025</Slogan>

    </FooterWrapper>
  );
};

export default Footer;
