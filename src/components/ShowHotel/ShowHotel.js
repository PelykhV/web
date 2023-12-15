import React, {useState} from "react";
import {
    PriceSection,
    SectionWrapper,
    StyledButtons,
    StyledImage,
    StyledRightSection,
    StyledText
} from "./ShowHotel.styled";
import {Button, InputNumber, Modal, Space} from "antd";
import {NavLink} from "react-router-dom";
import dataCard from "../Icons/dataCard";
import {useDispatch} from "react-redux";

const HotelDisplay = (props) => {
    const [value, setValue] = useState('1');
    const [isModalVisible, setIsModalVisible] = useState(false);
    const {hotel} = props;
    const dispatch = useDispatch();
    const addHotel = () => {
        dispatch({
            type: "ADD_HOTEL",
            payLoad: {
                id:hotel.id,
                img: dataCard[hotel.id],
                name: hotel.title,
                price: hotel.price,
                count: parseInt(value),
            },
        });
        showConfirmModal();
    };

    const showConfirmModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

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
                    <Button onClick={addHotel} style={{marginTop: "20px", width: "200px"}}>ADD TO CART</Button>
                </StyledButtons>
            </StyledRightSection>
            <Modal
                title="Hotel Added to Cart"
                visible={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[
                    <NavLink key="back" to="/cart">
                        <Button onClick={handleOk}>Go to Cart</Button>
                    </NavLink>,
                    <Button key="continue" type="primary" onClick={handleCancel} style={{marginLeft: "20px"}}>
                        Continue Shopping
                    </Button>
                ]}
            >
                <p>{hotel.title} has been added to your cart.</p>
            </Modal>
        </SectionWrapper>
    )
}

export default HotelDisplay;