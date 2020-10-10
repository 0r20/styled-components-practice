import styled from 'styled-components'

export const Cloud = styled.div`
position: absolute;
z-index: 0 !important;
box-shadow: 0px 10px 50px rgba(201, 209, 231, 0.6);
top: ${props => props.top}%;
left: ${props => props.left}%;
right: ${props => props.right}%;
bottom: ${props => props.bottom}%;
background-color: ${props => props.bgc};
height: ${props => props.size}px;
width: ${props => props.size*2}px;
border-top-left-radius: ${props => props.size * 2}px;
border-top-right-radius: ${props => props.size * 2}px;
`;

Cloud.defaultProps = {
    top: '0%',
    left: '0%',
    right: '0%',
    bottom: '0%',
    bgc: '#fff',
    size: 60
};
