import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
        <Content>
            &copy; Copyright 2022 Vaibhav Pathak Inc. All Rights Reserved
        </Content>
    </Container>
  )
}

const Container = styled.div`
    position: fixed;
    background-color: lightgray;
    width: 100vw;
    left: 0;
    right: 0;
    bottom: 0;
    height: 50px;
    @media (max-width: 786px) {
        display: none;
    }
`;

const Content = styled.div`
    margin-top: 10px;
`;

export default Footer