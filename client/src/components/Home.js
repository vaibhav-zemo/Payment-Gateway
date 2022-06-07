import React from 'react'
import styled from 'styled-components';
import connect from 'react'
import displayRazorpay from '../App';

function Home() {
    return (

        <Background>
            <Container>
                <Makepayment>
                    <h1>Make Your Payment</h1>
                    <Button>
                        Donate
                    </Button>
                </Makepayment>
            </Container>
        </Background>
    )
}

const Background = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('images/wallpaper.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100%;
    opacity: 0.8;
    @media (max-width: 768px) {
        background-size: cover;
    }
`;

const Container = styled.div`
    max-width: 1128px;
    margin: auto;
    padding: 12px 0 16px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: center;
    height: 90vh;
    
`;

const Makepayment = styled.div`
    width: 200px;
    height: 250px;
    padding: 12px 24px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    margin-left: 62%;
    h1{
        font-size: 40px;
    }
    @media (max-width: 768px) {
        justify-content: center;
        margin: auto;
        align-items: center;
    }
`;

const Button = styled.button`
    margin: auto;
    border: none;
    border-radius: 15px;
    background-color: blue;
    color: white;
    padding: 5px 14px;
`;



export default Home;