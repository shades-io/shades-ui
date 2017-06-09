
import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    position: fixed;
    top: 20px;
    left: 20px
`;

const Logo = () => (
    <Img
        width="100"
        src="http://d24wuq6o951i2g.cloudfront.net/img/events/id/273/2738374/assets/d13.logo.png" />
);

export default Logo;