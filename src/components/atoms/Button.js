import styled from 'styled-components';
import {colors} from '../../styles/colors'
import {space} from 'styled-system'

export const Button = styled('button')`
    ${space};
    color: ${props => props.color};
    background-color: ${props => props.bgc};
    text-decoration: none;
    outline: none;
    display: inline-block;
    font-size: 13px;
    padding: 13px 15px;
    border: ${props => props.border === "none" ? `1px solid ${props.bgc}` : props.border };
    font-weight: 700;
    border-radius: 2px;
    &:hover {
        cursor: pointer;
    } 
`;

Button.defaultProps = {
    color: colors.blue,
    bgc: colors.bgcDarkBlue,
    border: "none"
}





