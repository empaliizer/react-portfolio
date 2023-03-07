import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 30px;
`;

const StyledNavFooter = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

const StyledLink = styled(Link)`
    color: #000;
    text-decoration: none;
    &:hover {
        font-weight: 900;
    }
`;



const NavBarLinks = () => {
    return (
        <>
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/contact">Contact</StyledLink>
            <StyledLink to="/portfolio">Portfolio</StyledLink>
            <StyledLink to="/about">About</StyledLink>
        </>
    )
}

const Navbar = () => {
    return (
        <StyledNav>
            <NavBarLinks/>
        </StyledNav>
    );
}

const NavbarFooter = () => {
    return (
        <StyledNavFooter>
            <NavBarLinks/>
        </StyledNavFooter>
    );
}

export {
    Navbar,
    NavbarFooter
};