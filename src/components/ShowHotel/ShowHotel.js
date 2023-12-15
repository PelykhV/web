import React, {useState} from "react";
import {
    PriceSection,
    SectionWrapper,
    StyledButtons,
    StyledImage,
    StyledRightSection,
    StyledText
} from "./ShowHotel.styled";
import {Button, InputNumber, Space} from "antd";
import {NavLink} from "react-router-dom";
import dataCard from "../Icons/dataCard";

const HotelDisplay = (props) => {
    const [value, setValue] = useState('1');
    const {hotel} = props;
    return (
        <SectionWrapper>
            <StyledImage>
                <img src={dataCard[hotel.id].image} alt="#" />
            </StyledImage>
            <StyledRightSection>
                <h1>{hotel.title}</h1>

                <StyledText>
                    {hotel.text}
                </StyledText>
                <PriceSection>
                    <h5 style={{marginRight: "20px"}}>
                        Price:
                    </h5>
                    ${hotel.price}
                </PriceSection>
                <Space>
                    <h3>
                        Count of Hotels to buy:
                    </h3>
                    <InputNumber min={1} max={10} value={value} onChange={setValue}/>
                    <Button
                        type="primary"
                        onClick={() => {
                            setValue(1);
                        }}
                    >
                        Reset
                    </Button>
                </Space>
                <StyledButtons>
                    <NavLink exact to="/catalog" activeClassName="selected">
                        <Button style={{marginTop: "20px", width: "200px"}}>GO BACK</Button>
                    </NavLink>
                    <NavLink exact to="/cart" activeClassName="selected">
                        <Button style={{marginTop: "20px", width: "200px"}}>ADD TO CART</Button>
                    </NavLink>
                </StyledButtons>
            </StyledRightSection>
        </SectionWrapper>
    )
}

export default HotelDisplay;