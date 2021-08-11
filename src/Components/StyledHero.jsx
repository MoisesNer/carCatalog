import styled from 'styled-components';

const StyledHero = styled.header`
    min-height: 60vh;
    background: url(${props => props.img}) center/cover;
    display: flex;
    align-items: center;
    justify-content: center;

`;
export default StyledHero;

// default https://images.unsplash.com/photo-1582834202430-ddcd18987a61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80