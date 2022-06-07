import axios from "axios";
import { useState } from "react";
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import styled from 'styled-components'
import "./App.css";

function App() {
  const [book, setBook] = useState({
    name: "Donate",
    img: "https://images-na.ssl-images-amazon.com/images/I/817tHNcyAgL.jpg",
    price: 250,
  });

  const initPayment = (data) => {
    const options = {
      key: "rzp_test_uQZ7Z5o9eeJOpC",
      amount: data.amount,
      currency: data.currency,
      name: book.name,
      description: "Test Transaction",
      image: "images/Logo3.png",
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:8080/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePayment = async () => {
    try {
      const orderUrl = "http://localhost:8080/api/payment/orders";
      const { data } = await axios.post(orderUrl, { amount: book.price });
      console.log(data);
      initPayment(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Background>
        <Container>
          <Makepayment>
            <h1>Make Your Payment</h1>
            <Button onClick={handlePayment} className="buy_btn">
              Donate
            </Button>
          </Makepayment>
        </Container>
      </Background>
      <Footer />
    </div>
  );
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

export default App;