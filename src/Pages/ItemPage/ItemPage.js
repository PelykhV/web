import React from 'react';
import {useParams} from 'react-router-dom';
import dataCard from "../../components/Icons/dataCard";
import HotelDisplay from "../../components/ShowHotel/ShowHotel";

const ItemPage = () => {
    const {id} = useParams();
    const hotel = dataCard.find((item) => item.id === Number(id));
    if (!hotel) {
        return <div>Not Found</div>;
    }

    return (
        <div>
            <HotelDisplay hotel={hotel}/>
        </div>
    );
};

export default ItemPage;