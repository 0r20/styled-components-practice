import React from 'react'
import styled from 'styled-components';

import { Button } from '../atoms/Button';
import { Phones } from '../atoms/Phones';

const StyledPlan = styled.div`
    height: 776px;
    display: flex;
    justify-content: center;
    > div {
        &:first-of-type {
            padding-top: 208px;
            flex-basis: 413px;
            > p {
                &:first-of-type {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: 500;
                    font-size: 10px;
                    line-height: 12px;
                    letter-spacing: 0.1em;
                    text-transform: uppercase;
                    color: #3D4F9F;
                }
                &:last-of-type {
                    font-family: Roboto;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 15px;
                    line-height: 29px;
                    letter-spacing: 0.03em;
                    color: #8D96BD;
                    margin-bottom: 47px;
                }
            }
            > h1 {
                font-family: Quicksand;
                font-style: normal;
                font-weight: 500;
                font-size: 36px;
                line-height: 45px;
                color: #3D4F9F;
            }
        }
        &:last-of-type {
            padding-top: 50px;
            svg {
                max-width: 700px;
            }
        }
    }
`;

export const Plan = () => {
    return (
        <StyledPlan>
            <div>
                <p>DESKTOP AND MOBILE APP</p>
                <h1>Plan and manage</h1>
                <p>Brute laoreet efficiendi id his, ea illum nonumes luptatum pro. Usu atqui laudem an, insolens gubergren similique est cu. Et vel modus congue vituperata. Solum patrioque no sea. Mea ex malis mollis oporteat. Eum an expetenda consequat.</p>
                <Button color="#fff" bgc="#4c85ff">View video</Button>
                <Button bgc="inherit" border="1px solid #D1D1E4">See features</Button>
            </div>
            <div>
                <Phones />
            </div>
        </StyledPlan>
    );
}
