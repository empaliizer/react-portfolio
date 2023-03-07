import React from "react";
import styled from "styled-components";
import logo from './assets/logo.png';
import { Navbar } from './Navbar';

const StylingHeader = styled.header`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 30px;
`;

const LogoContainer = styled.div`
max-width: 2rem;
display: flex;
margin-left: 35px;
`;

const StyleImg = styled.img`
width: 100%;
`;


const Header = () => {
    return (
        <StylingHeader>
            <LogoContainer>
                <StyleImg src={logo} alt="React" />
            </LogoContainer>
            <Navbar />
        </StylingHeader>
    );
}

export default Header;