import React from 'react';
import styled from 'styled-components';

const FooterStyled = styled.div`
background-color : whitesmoke;
border : 1px solid #e2e2e2;
padding : 10px;
margin : 5px;

span {
font-size : 13px;
}
`;

FooterStyled.displayName = 'FooterStyled';

export function Footer() {
    return (
        <FooterStyled>
            <span> &copy; 2019 Vladmir Bravo </span>
        </FooterStyled>
    );
}