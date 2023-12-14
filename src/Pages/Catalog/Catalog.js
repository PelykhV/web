import React from "react";
import { UserOutlined } from '@ant-design/icons';
import { Dropdown, message, Space, Input, InputNumber} from 'antd';
import {
    CardWrapper,
    VerticalLine,
    PriceSection,
} from "./Catalog.styled";
import CardItem from "../../components/CardElement/CardItem";
import HotelModel1 from "../../components/Icons/hotel_lviv.jpg";
import HotelModel2 from "../../components/Icons/hotel_ukraine.jpg";
import HotelModel3 from "../../components/Icons/hotel_chornomorets.jpg";
import HotelModel4 from "../../components/Icons/hotel_fest.jpg";
import HotelModel5 from "../../components/Icons/monkastro_hotel.jpg";
import HotelModel6 from "../../components/Icons/Vitapart_hotel.jpg";
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);

const handleButtonClick = (e) => {
    message.info('Here you can choose the sorting method.');
    console.log('click left button', e);
};

const handleMenuClick = (e) => {
    message.info('To be continued.');
    console.log('click', e);
};

const items = [
    {
        label: 'Sort by name',
        key: '1',
        icon: <UserOutlined />,
    },
    {
        label: 'Sort by increasing price',
        key: '2',
        icon: <UserOutlined />,
    },
    {
        label: 'Sort by decreasing price',
        key: '3',
        icon: <UserOutlined />,
    },
];

const menuProps = {
    items,
    onClick: handleMenuClick,
};

const dataCard = [
    {
        title: "Готель Львів",
        text: "Готель Львів - це чудове місце для відпочинку в самому серці Львова. Наш готель пропонує комфортабельні номери та вишукані страви в ресторані.",
        image: HotelModel1,
        price: 800,
    },
    {
        title: "Готель Україна",
        text: "Готель Україна розташований в центрі Львова і пропонує розкішні номери та вишукані послуги для гостей. Відмінне місце для відпочинку.",
        image: HotelModel2,
        price: 1500,
    },
    {
        title: "Готель Чорноморець",
        text: "Готель Чорноморець - це чудове місце для проживання в Одесі. Наш готель недалеко від моря та пропонує комфортабельні номери та вид на море.",
        image: HotelModel3,
        price: 1000,
    },

    {
        title: "Готель !FEST",
        text: "Сучасний !FEST Hotel розташований у історичній місцевості «Підзамче», приблизно за 15 хв. пішої прогулянки" +
            " від Оперного театру та центру міста. А прогулянка до Високого замку займе 30 хв.",
        image: HotelModel4,
        price: 2000,
    },

    {
        title: "Готель MONKASTRO",
        text: "Готель «Monkastro Hotel» - білосніжний готель, немов величезний круїзний лайнер, підноситься над узбережжям Затоки." +
            "Розташований в самому серці міста Затоки, де вирує курортне життя, куди хочеться повернутися знову і знову.",
        image: HotelModel5,
        price: 3894,
    },

    {
        title: "Готель VITAPARK",
        text: "У готелі 84 комфортабельних сучасних номера з індивідуальними балконами." +
            " Кожен номер не повторюється, має свій дизайн." +
            " З вікна відкривається розкішний вид на паркову зону готелю з могутніми високими дубами і ялинами.",
        image: HotelModel6,
        price: 1140,
    },
];

const Catalog = () => {
    return (
        <div>
            <VerticalLine/>
            <Space
                wrap
                style={{ display: "flex", justifyContent: "space-evenly"}}
            >
                <Dropdown.Button menu={menuProps} onClick={handleButtonClick}>
                    Filter
                </Dropdown.Button>
                <PriceSection>
                    <div style={{marginRight: "10px"}}>Ціна:</div>
                    <InputNumber addonBefore="від" addonAfter="$" defaultValue={100} style={{marginRight: "10px"}}/>
                    <InputNumber addonBefore="до" addonAfter="$" defaultValue={100} />
                </PriceSection>
                <Search
                    placeholder="Input search text"
                    allowClear
                    enterButton="Search"
                    size="large"
                    onSearch={onSearch}
                />
            </Space>
            <VerticalLine/>
            <CardWrapper>
                {dataCard.map(({ title, text, image, price }, idx) => (
                    <CardItem
                        title={title}
                        text={text}
                        imageSrc={image}
                        price={price}
                        id={idx}
                    />
                ))}
            </CardWrapper>
        </div>
    );
};

export default Catalog;