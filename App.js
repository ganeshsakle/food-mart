import React from 'react';
import ReactDOM from 'react-dom/client';
import restaurantList from './constant';

const title = (<h1>Hello</h1>);

const HeaderComponent = () => {
  return (
    <div className="header-class">
        <img alt="logo" src="https://www.researchgate.net/profile/Simon-Viktor-2/publication/263401316/figure/fig2/AS:392455473123329@1470580084354/Food-Dudes-branding-Developed-by-and-used-under-licence-by-Bangor-University-C-Bangor.png" width="50px" height="50px" />
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
            <FoodCard {...restaurantList[0]}/>
            <FoodCard {...restaurantList[1]}/>
            <FoodCard {...restaurantList[2]}/>
            <FoodCard {...restaurantList[3]}/>
        </div>
        <Footer />
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Layouts />);