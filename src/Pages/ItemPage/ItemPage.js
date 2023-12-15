import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import HotelDisplay from "../../components/ShowHotel/ShowHotel";
import {getDetailedHotelInfo} from "../../fetching";
import Loading from "../../components/Loading/Loading";


const ItemPage = () => {
    const { id } = useParams();
    const [hotel, setHotel] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        getDetailedHotelInfo(id)
            .then((response) => {
                setHotel(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Помилка під час отримання даних:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loading />;
    }

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