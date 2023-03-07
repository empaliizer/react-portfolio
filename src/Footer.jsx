import React from "react";
import styled from "styled-components";
import github from './assets/GitHub-Mark.png';
import figma from './assets/figma.png';
import linkedIn from './assets/linkedin.png';
import { NavbarFooter } from "./Navbar";
import H2 from "./typography/h2";
import P from "./typography/p";

const StyledFooter = styled.footer `
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px;
  background-color: pink;
`;

const NavbarContainer = styled.div `
    display: flex;
`; 

const StyleImg = styled.img`
    width: 80px;
    height: 80px;
`;

const StyleSocialMedia = styled.div `
    display: flex;
    justify-content: center;
    padding: 10px;
    gap: 70px;
`;

const Heading = () => (
    <ColTwo>
        <H2>Find me at:</H2>
    </ColTwo>
);

const ColTwo = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`; 

const ContactContainer = styled.div `
    display: flex;
    flex-direction: column;
`;

const ContactInfo = () => (
    <ContactContainer>
        <H2>Kontakt info</H2>
        <P><b>Tel:</b> +46 (0)704869074</P>
        <P><b>Mail:</b> emelie.ek@chasacademy.se</P>
    </ContactContainer>
);

const Copy = () => (
    <P>&copy; Empalizer 2023</P>
);


const Footer = () => {
    return (
            <StyledFooter>
                    <NavbarContainer>
                        <NavbarFooter />
                    </NavbarContainer>
                    <ColTwo>
                        <Heading />
                            <StyleSocialMedia>
                                <a href="https://github.com/empaliizer"><StyleImg src={github} alt="Github" className="github"/></a>
                                <a href="https://www.figma.com/file/xi2DdIpf3UZ699MqhIlu7G/Untitled?node-id=19%3A77&t=nOmDLDjFhp4rBiN7-1"><StyleImg src={figma} alt="Figma" /></a>
                                <a href="https://www.linkedin.com/in/emelie-ek-5215901ba/"><StyleImg src={linkedIn} alt="LinkedIn" className="linkedin"/></a>
                            </StyleSocialMedia>
                        <Copy />
                    </ColTwo>
                    <ContactInfo />
            </StyledFooter>
    );
}

export default Footer;



// Läxa tills 7/3:
// Skapa din personliga footer i samråd med andra på Discord.
// titta på exempel på andra portföljer
// Du kan t.ex ha med linkedin-ikon och github-ikon figma-ikon?
// Tips att researcha: "fontawesome"
// Obs. Discord är ICKE frivilligt, men ni behöver inte göra hela läxan på discord
// Om du blir klar med detta, gör samma sak med Navbar
// Pusha ditt projek till din github, skicka länk till mig.