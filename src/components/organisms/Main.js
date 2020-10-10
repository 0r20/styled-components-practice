import React from 'react';
import styled from 'styled-components';

import { Cloud } from '../atoms/Cloud';
import { Graph } from '../atoms/Graph';


const StyledMain = styled.div`
    height: 570px;
    position: relative;
    background: linear-gradient(180deg, #F4F7FF 0%, #F1F5FF 100%);
    display: flex;
    padding-top: 92px;
    flex-direction: column;
    align-items: center;
    * {
        z-index: 1;
    }
    > p {
        &:first-of-type {
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 10px;
            line-height: 12px;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: ${props => props.theme.darkBlue};
        }
        &:last-of-type {
            width: 502px;
            font-family: Roboto;
            font-style: normal;
            font-weight: normal;
            font-size: 15px;
            line-height: 29px;
            text-align: center;
            letter-spacing: 0.03em;
            color: #8D96BD;
        }
    }
    > h1 {
        font-family: Quicksand;
        font-style: normal;
        font-weight: 300;
        font-size: 48px;
        line-height: 60px;
        color: #3D4F9F;
    }
    > button {
        margin-top: 20px;
        text-decoration: none;
        outline: none;
        background-color: #fff;
        border: none;
        border-radius: 50%;
        height: 52px;
        width: 52px;
        box-shadow: 0px 10px 50px rgba(201, 209, 231, 0.6);
        > svg {
            margin-left: 4px;
        }
    }
`;

export const Main = () => {
    return (
        <StyledMain>
            <Cloud size={23} top={10} left={20} />
            <Cloud size={75} top={32} left={-4} />

            <Cloud size={40} top={70} left={26} />
            <Cloud size={30} top={72} left={30} />
            <Cloud size={20} top={70} left={23} />
            <Cloud size={20} top={66} left={31} />

            <Cloud size={40} top={10} right={15} />
            <Cloud size={30} top={12} right={10} />
            <Cloud size={20} top={14} right={13} />

            <Cloud size={60} bottom={14} right={13} />
            <Cloud size={40} bottom={14} right={10} />
            <Cloud size={20} bottom={23} right={12} />

            <Graph />
            <p>PLAN YOUR LIFE</p>
            <h1>Increase your productivity</h1>
            <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata.</p>
            <button>
                <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.23077 4.17675C10.2564 4.76486 10.2564 6.23514 9.23077 6.82325L2.30769 10.793C1.28205 11.3811 0 10.646 0 9.46976V1.53024C0 0.354015 1.28205 -0.381125 2.30769 0.206988L9.23077 4.17675Z" fill="#5E81FF" />
                </svg>
            </button>
        </StyledMain>
    );
}
