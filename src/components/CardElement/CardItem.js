import React from "react";
import {Card} from "antd";
import {PriceSection} from "./CardItem.styled";
import {Link} from "react-router-dom";

const {Meta} = Card;

const CardItem = (props) => (
    <Link to={`/itempage/${props.id}`} style={{textDecoration: "none", width: 400}}>
        <Card
            hoverable
            style={{width: 400, borderRadius: "20px", marginTop: "20px", height: "550px"}}
            cover={
                <img style={{borderRadius: "20px", height: "261px"}} alt="example" src={props.imageSrc}/>
            }
        >
            <Meta title={props.title} description={props.text}/>
            <PriceSection>
                <p>Price: ${props.price}</p>
            </PriceSection>
        </Card>
    </Link>
);


export default CardItem;