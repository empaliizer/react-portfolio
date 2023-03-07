import React, { useState } from 'react';
import styled from 'styled-components';
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from './Footer';



const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px;
`;

const FlexContainer = styled.div`
display: flex;
flex-direction: column;
`;




const App = () => {

  return (
    <Router>
      <FlexContainer>
        <Header />
        <MainContainer>
          <h1>Emelie</h1>
        </MainContainer>
        <Footer />
      </FlexContainer>
    </Router>
  );
}


export default App;