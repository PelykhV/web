import React, {useState} from "react";
import {FrownOutlined, UserOutlined} from '@ant-design/icons';
import {Dropdown, message, Space, Input, InputNumber} from 'antd';
import {
    CardWrapper,
    VerticalLine,
    PriceSection, StyledError,
} from "./Catalog.styled";

import CardItem from "../../components/CardElement/CardItem";
import dataCard from "../../components/Icons/dataCard";

const {Search} = Input;

const items = [
    {
        label: 'Sort by name',
        key: '1',
        icon: <UserOutlined/>,
    },
    {
        label: 'Sort by increasing price',
        key: '2',
        icon: <UserOutlined/>,
    },
    {
        label: 'Sort by decreasing price',
        key: '3',
        icon: <UserOutlined/>,
    },
];

const Catalog = () => {
    const [searchStadium, setSearchStadium] = useState('');
    const [sortStadium, setSortStadium] = useState('');
    const [minPrice, setMinPrice] = useState(1);
    const [maxPrice, setMaxPrice] = useState(100000);

    const handleButtonClick = () => {
        message.info('Here you can choose the sorting method.');
    };

    const handleMenuClick = (element) => {
        setSortStadium(element.key);
    };

    const menuProps = {
        items,
        onClick: handleMenuClick,
    };

    const handleSearch = (newSearchTerm) => {
        setSearchStadium(newSearchTerm);
    }

    const handleMinPriceChange = (value) => {
        setMinPrice(value);
    }

    const handleMaxPriceChange = (value) => {
        setMaxPrice(value);
    }

    const sortData = (data, sortType) => {
        let sortedData = [...data];

        switch (sortType) {
            case '1':
                sortedData = sortedData.sort((a, b) => a.title.localeCompare(b.title));
                break;
            case '2':
                sortedData = sortedData.sort((a, b) => a.price - b.price);
                break;
            case '3':
                sortedData = sortedData.sort((a, b) => b.price - a.price);
                break;
            default:
                break;
        }

        return sortedData.filter(item => item.title.toLowerCase().includes(searchStadium.toLowerCase()) && item.price >= minPrice && item.price <= maxPrice);
    };

    const sortedProducts = sortData(dataCard, sortStadium);

    const filteredProducts = sortedProducts.filter(item => item.title.toLowerCase().includes(searchStadium.toLowerCase()));

    return (
        <div>
            <VerticalLine/>
            <Space
                wrap
                style={{display: "flex", justifyContent: "space-evenly"}}
            >
                <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                    Filter
                </Dropdown.Button>
                <PriceSection>
                    <div style={{marginRight: "10px"}}>Price:</div>
                    <InputNumber
                        addonBefore="from"
                        addonAfter="$"
                        value={minPrice}
                        onChange={handleMinPriceChange}
                        min={1}
                        max={maxPrice - 1}
                        style={{marginRight: "10px"}}
                    />
                    <InputNumber
                        addonBefore="to"
                        addonAfter="$"
                        value={maxPrice}
                        onChange={handleMaxPriceChange}
                        min={minPrice + 1}
                        max={100000}
                    />
                </PriceSection>
                <Search
                    placeholder="Input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={handleSearch}
                />
            </Space>
            <VerticalLine/>
            <CardWrapper>
                {filteredProducts.length === 0 ? (
                    <StyledError>
                        <FrownOutlined style={{fontSize: "150px"}}/>
                        <h1>No hotel found.</h1>
                    </StyledError>
                ) : (
                    filteredProducts.map((item) => (
                        <CardItem
                            id={item.id}
                            title={item.title}
                            text={item.text}
                            imageSrc={item.image}
                            price={item.price}
                        />
                    ))
                )}
            </CardWrapper>
        </div>
    );
};

export default Catalog;