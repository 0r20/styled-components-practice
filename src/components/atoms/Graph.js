import React from 'react';
import styled from 'styled-components';

const StyledGraph = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    svg {
        width: 100%;
        height: 100%;
    }
`;

export const Graph = () => {
    return (
        <StyledGraph>
            <svg width="1440" height="347" viewBox="0 0 1440 347" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M480.333 271.758C347.472 269.633 202.703 304.51 0 304.51V347H1441V0C1223.24 0 1305.86 129.682 960.667 129.682C643.639 129.682 789.74 276.705 480.333 271.758Z" fill="url(#paint0_linear)" fillOpacity="0.4" />
                <defs>
                    <linearGradient id="paint0_linear" x1="278.466" y1="347.443" x2="278.466" y2="-107.995" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4B71FF" stopOpacity="0" />
                        <stop offset="1" stopColor="#6B89F8" />
                    </linearGradient>
                </defs>
            </svg>
        </StyledGraph>
    );
}

