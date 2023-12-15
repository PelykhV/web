import { useSelector } from "react-redux";
import {
    CartStyled,
    ImageStyled,
    DataInfo, DataButtonStyled, VerticalLine, CartButtonStyled,
} from "./Cart.styled";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { incrementCount, decrementCount } from "./action";
import { useState, useEffect } from "react";
import {Button} from "antd";
import dataCard from "../../components/Icons/dataCard";

const Cart = () => {
    const hotelArray = useSelector((state) => state.hotelList);
    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        let totalPrice = 0;
        hotelArray.forEach((hotel) => {
            totalPrice += Math.round(hotel.price) * hotel.count;
        });
        setTotalPrice(totalPrice);
    }, [hotelArray]);
    const dispatch = useDispatch();

    const handleIncrement = (name) => {
        dispatch(incrementCount(name));
    };

    const handleDecrement = (name) => {
        dispatch(decrementCount(name));
    };

    const filteredHotels = hotelArray.filter((hotel) => hotel.count > 0);

    return (
        <div>
            <VerticalLine/>
            <CartStyled>
                <div>
                    {filteredHotels.map((hotel, index) => (
                            <div key={index}>
                                <DataInfo>
                                    <NavLink
                                        exact="true"
                                        to={`/itempage/${hotel.id}`}
                                        style={{ textDecoration: "none", color: "black" }}
                                        onClick={(e) => {
                                            if (e.target.tagName === "BUTTON") {
                                                e.preventDefault();
                                            }
                                        }}
                                    >
                                        <ImageStyled src={dataCard[hotel.id].image} />
                                    </NavLink>
                                    <h3>{hotel.name}</h3>
                                    <DataButtonStyled>
                                        <Button onClick={() => handleDecrement(hotel.name)}>-</Button>
                                        <p>{hotel.count}</p>
                                        <Button onClick={() => handleIncrement(hotel.name)}>+</Button>
                                    </DataButtonStyled>
                                    <h4>{hotel.price}$</h4>
                                </DataInfo>
                            </div>
                    ))}
                </div>
                {totalPrice > 0 && (
                    <p style={{ fontSize: "2.2vw", marginLeft: "1vw" }}>
                        Total Price: {totalPrice}$
                    </p>
                )}

                <CartButtonStyled>
                    <Button size={"large"}>
                        <NavLink to="/Catalog">BACK TO CATALOG</NavLink>
                    </Button>
                    {totalPrice > 0 && <Button size={"large"}>BUY ONLINE</Button>}
                </CartButtonStyled>

            </CartStyled>
            <VerticalLine style={{marginBottom: '115px'}}/>
        </div>

    );
};

export default Cart;