import React, { useState, useEffect } from "react";
import HotelPicture from "../../components/Icons/main.jpg";
import {
    SectionWrapper,
    StyledText,
    StyledButton,
    CardWrapper, HomeWrapper,
} from "./Home.styled";
import CardItem from "../../components/CardElement/CardItem";

import dataCard from "../../components/Icons/dataCard";
import {getDefaultHotelList} from "../../fetching";
import Loading from "../../components/Loading/Loading";

import homeText from "../../components/Text/Text";


const Home = () => {
  const [hotelData, setBackendData] = useState([]);
  const [visibleItems, setVisibleItems] = useState(3);
  const [loading, setLoading] = useState(true);
  const [showHideButton, setShowHideButton] = useState(false);

  useEffect(() => {
    setLoading(true);
    getDefaultHotelList()
        .then((response) => {
            setBackendData(response.data);
            setLoading(false);
        })
        .catch((error) => {
            console.error('Помилка під час отримання даних:', error);
            setLoading(false);
        });
}, []);
      

const showMore = () => {
  setVisibleItems((prevVisibleItems) => prevVisibleItems + 3);
  setShowHideButton(true);
};

const hideItems = () => {
  setVisibleItems(3);
  setShowHideButton(false);
};

return (
  <HomeWrapper>
      <SectionWrapper>
          <img src={HotelPicture} alt="#" className="main_photo"/>
          <StyledText>
              {homeText.map((item, index) => (
                  <div key={index}>
                      <h1>{item.textTitle}</h1>
                      <p>{item.titleText}</p>
                  </div>
              ))}
          </StyledText>
      </SectionWrapper>
      {loading ? (
          <Loading />
      ) : (
          <>
              <CardWrapper>
                  {hotelData.slice(0, visibleItems).map((item) => (
                      <CardItem
                          id={item.id}
                          title={item.title}
                          text={item.text}
                          imageSrc={dataCard[item.id].image}
                          price={item.price}
                      />
                  ))}
              </CardWrapper>
              {showHideButton ? (
                  <StyledButton onClick={hideItems}>Hide</StyledButton>
              ) : (
                  <StyledButton onClick={showMore}>View more</StyledButton>
              )}
          </>
      )}
  </HomeWrapper>
);
};

export default Home;