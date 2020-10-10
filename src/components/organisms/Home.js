import React from 'react';
import styled from 'styled-components';
import { Container } from '../../styles/Container';

const StyledHome = styled.div`
  height: 100vh;  
`;

export const Home = () => {
    return (
        <Container>
            <StyledHome>
                <div className='thumbnail'>
                    
                </div> 
            </StyledHome>
        </Container>
    );
}
