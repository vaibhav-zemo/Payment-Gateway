import React from 'react';
import styled from 'styled-components';

function Header() {
    return (
        <Container>
            <Content>
                <Logo>
                    <img src='/images/Logo3.png' alt='' />
                    <span>Name</span>
                </Logo>
                <Nav>
                    <NavListWrap>
                        <NavList>
                            <a href='/'>
                                <img src='/images/home-icon.svg' alt='' />
                                <span>Home</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href='/Contact'>
                                <img src='/images/contact-icon.svg' alt='' />
                                <span>Contact</span>
                            </a>
                        </NavList>
                        <NavList>
                            <a href='/About'>
                                <img src='/images/about-icon.svg' alt='' />
                                <span>About</span>
                            </a>
                        </NavList>
                    </NavListWrap>
                </Nav>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background: transparent;
    border-bottom: 1px solid (rgba(0,0,0,0.08));
    left: 0;
    padding: 0 24px;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: 100;
`;

const Content = styled.div`
    display: flex;
    align-items: center;
    margin: 0 auto;
    min-height: 100%;
    margin-right: 35px;
    justify-content: space-between;
`; 

const Logo = styled.div`
    width: 120px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-weight: 700;
    img{
        width: 64px;
        height: 60px;
        border-radius: 50%;
        display: inline-flex;
    }
    @media (max-width: 768px) {
        margin: auto;
    }
`;

const Nav = styled.nav`
    margin-left: auto;
    display: block;
    @media (max-width: 768px){
        position: fixed;
        left: 0;
        bottom: 0;
        background: transparent;
        width: 100%;
    }
`;

const NavListWrap = styled.ul`
    display: flex;
    flex-wrap: nowrap;
    list-style-type: none;

    .active{
        span:after{
            content: '';
            transform: scaleX(1);
            border-bottom: 2px solid var(--white,#fff);
            bottom: 0;
            left: 0;
            position: absolute;
            transition: transform 0.2s ease-in-out;
            width: 100%;
            border-color: rgba(0,0,0,0.9);
        }
    }
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        width: 100%;
    }
`;

const NavList = styled.li`
    display: flex;
    align-items: center;
    a{
        align-items: center;
        background: transparent;
        display: flex;
        flex-direction: column;
        font-size: 12px;
        font-weight: 400;
        justify-content: center;
        line-height: 1.5;
        min-height: 42px;
        min-width: 80px;
        position: relative;
        text-decoration: none;
        span{
            color: white;
            display: flex;
            align-items: center;
        }
        @media (max-width: 768px) {
            min-width: 70px; 
        }
    }
    &:hover, &:active{
        a{
            span{
                color: rgba(0,0,0,0.9);
            }
        }
    }
`;

export default Header