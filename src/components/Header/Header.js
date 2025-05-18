import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BsTwitterX } from "react-icons/bs";
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
 <Container>
  <Div1>
    <Link href="/" style={{ display: "flex", alignItems: "center", color: "white", marginBottom: 20 }}>
        <div style={{ width: "3rem", height: "3rem", position: "relative" }}>
          <Image 
            src="/public/images/logo_DS.png" 
            alt="Data Suits Logo" 
            layout="fill" 
            objectFit="contain"
          />
        </div>
        <Span>Data Suits</Span>
    </Link>
  </Div1>

  <Div2>
    <li>
      <Link href="#projects">
        <NavLink>Videos</NavLink>
      </Link>
    </li>

    <li>
      <Link href="#tech">
        <NavLink>Technologies</NavLink>
      </Link>
    </li>

    <li>
      <Link href="#about">
        <NavLink>About</NavLink>
      </Link>
    </li>
  </Div2>

  <Div3>
    <SocialIcons href="https://github.com/LAZREG14">
      <AiFillGithub size="3rem" />
    </SocialIcons>

    <SocialIcons href="https://twitter.com/LazregMustapha">
      <BsTwitterX size="3rem" />
    </SocialIcons>

    <SocialIcons href="https://www.linkedin.com/in/mustapha-lazreg/">
      <AiFillLinkedin size="3rem" />
    </SocialIcons>
  </Div3>
 </Container>
);

export default Header;
