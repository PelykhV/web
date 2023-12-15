import React, {useEffect, useState} from "react";
import {FrownOutlined, UserOutlined} from '@ant-design/icons';
import {Dropdown, message, Space, Input, InputNumber} from 'antd';
import {
    CardWrapper,
    VerticalLine,
    PriceSection, StyledError, CatalogWrapper,
} from "./Catalog.styled";

import CardItem from "../../components/CardElement/CardItem";
import dataCard from "../../components/Icons/dataCard";
import Loading from "../../components/Loading/Loading";
import {getHotelList} from "../../fetching";

const {Search} = Input;

const items = [
    {
        label: 'Sort by name',
        key: 'name',
        icon: <UserOutlined/>,
    },
    {
        label: 'Sort by increasing price',
        key: 'price ASC',
        icon: <UserOutlined/>,
    },
    {
        label: 'Sort by decreasing price',
        key: 'price DESC',
        icon: <UserOutlined/>,
    },
];

const Catalog = () => {
    const [searchHotel, setSearchHotel] = useState('');
    const [sortHotel, setSortHotel] = useState('');
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(100000);
    const [loading, setLoading] = useState(true);
    const [hotelData, setBackendData] = useState([]);
    const [filter, setFilter] = useState({
        minPrice: 1,
        maxPrice: 100000,
        sortHotel: '',
        searchHotel: '',
    });

    useEffect(() => {
        setLoading(true);
        getHotelList(filter)
            .then((response) => {
                setBackendData(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    }, [filter]);

    const handleButtonClick = () => {
        message.info('Here you can choose the sorting method.');
    };

    const handleMenuClick = (element) => {
        setSortHotel(element.key);
    };

    const applyFilter = () => {
        setFilter({
            minPrice,
            maxPrice,
            sortHotel,
            searchHotel,
        });
    };

    return (
        <CatalogWrapper>
            <VerticalLine/>
            <Space
                wrap
                style={{display: "flex", justifyContent: "space-evenly"}}
            >
                <Dropdown.Button menu={{ items, onClick: handleMenuClick }} onClick={handleButtonClick}>
                    Filter
                </Dropdown.Button>
                <PriceSection>
                    <div style={{marginRight: "10px"}}>Price:</div>
                    <InputNumber
                        addonBefore="from"
                        addonAfter="$"
                        value={minPrice}
                        onChange={(value) => setMinPrice(value)}
                        min={1}
                        max={maxPrice - 1}
                        style={{ marginRight: '10px' }}
                    />
                    <InputNumber
                        addonBefore="to"
                        addonAfter="$"
                        value={maxPrice}
                        onChange={(value) => setMaxPrice(value)}
                        min={minPrice + 1}
                        max={100000}
                    />
                </PriceSection>
                <Search
                    placeholder="Input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onChange={(e) => setSearchHotel(e.target.value)}
                    onSearch={applyFilter}
                />
            </Space>
            <VerticalLine/>
            {loading ? (
                <Loading />
            ) : (
                <CardWrapper>
                    {hotelData.length === 0 ? (
                        <StyledError>
                            <FrownOutlined style={{fontSize: "150px"}}/>
                            <h1>No hotels found.</h1>
                        </StyledError>
                    ) : (
                        hotelData.map((item) => (
                            <CardItem
                                id={item.id}
                                title={item.title}
                                text={item.text}
                                imageSrc={dataCard[item.id].image}
                                price={item.price}
                            />
                        ))
                    )}
                </CardWrapper>
            ) }
        </CatalogWrapper>
    );
};

export default Catalog;