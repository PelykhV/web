import React from "react";
import { Card } from "antd";
import { PriceSection } from "./CardItem.styled";

const { Meta } = Card;

const CardItem = ({ title='No title', text, imageSrc, price }) => (
    <Card
        hoverable
        style={{ width: 400, borderRadius: "20px" }}
        cover={
            <img style={{ borderRadius: "20px", height: "261px" }} alt="example" src={imageSrc} />
        }
    >
        <Meta title={title} description={text} />
        <PriceSection>
            <p>${price}</p>
        </PriceSection>
    </Card>
);

export default CardItem;