import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  display:flex;
  height: 100vh;
  background-color: #ededed;
`
const Container = styled.div`
  width:35%;
  max-width: 415px;
  display: flex;
  flex-direction: column;
  border-right: 1px solid #ddd;
`
function App() {
  render()
    return (
      <MainContainer>

        <Container>
          <header>
            <img />
          </header>
        </Container>
        
        <section>
        <h1>a..as.d.asd.</h1>
        </section>

      </MainContainer>
    );
  }

export default App;
