import React from 'react';
import ReactDOM from 'react-dom/client';
import { RESTAURANT_LIST } from './constant';

const title = (<h1>Hello</h1>);

const HeaderComponent = () => {
  return (
    <div className="header-class">
        <a href="/">
            <img alt="logo" src="https://s.tmimgcdn.com/scr/800x500/122600/food-mart-basket-mart-bm-logo-template_122635-original.jpg" width="150px" height="50px" />
        </a>
        <ul className="header-ul">
            <li>Home</li>
            <li>About Us</li>
            <li>Cart</li>
        </ul>
    </div>
  );
};

const FoodCard = ( {name, cuisines, stars, image } ) => {
    return (
        <div className="food-card">
            <div className="food-card-child">
                <img alt="food-image" src={image} width="250px" height="180px" />
                <h2>{name}</h2>
                <p>{cuisines.join(", ")}</p>
                <p>{stars}</p>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <>
        <p>Made By Ganesh</p>
        </>
    );
};

const Layouts = () => {
    return (
        <>
        <HeaderComponent />
        <div className="food-card-screen">
            <FoodCard {...RESTAURANT_LIST[0]}/>
            <FoodCard {...RESTAURANT_LIST[1]}/>
            <FoodCard {...RESTAURANT_LIST[2]}/>
            <FoodCard {...RESTAURANT_LIST[3]}/>
        </div>
        <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layouts />);