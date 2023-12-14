import React, {useState} from "react";
import HotelPicture from "../../components/Icons/main.jpg";
import {
    SectionWrapper,
    StyledText,
    StyledButton,
    CardWrapper,
} from "./Home.styled";
import CardItem from "../../components/CardElement/CardItem";

import dataCard from "../../components/Icons/dataCard";

const textTitle = "Захопіться різними готелями в Україні";

const titleText = "Готель - це приміщення, яке пропонує комфортабельне проживання для гостей. Незалежно від того, чи ви подорожуєте в Львів, Київ, чи Одесу, в Україні є багато чудових готелів для вибору. Україна славиться своєю гостьминою та різноманітністю готельних послуг. Незалежно від того, чи ви шукаєте розкішний відпочинок у історичних містах, або спокійну відпустку на березі моря, ви знайдете ідеальний готель, що відповідає вашим потребам.\n" +

"У Львові ви зможете насолодитися атмосферою старовинного міста та обрати готель, розташований в самому центрі історичного Львова. Культурні пам'ятки, затишні кав'ярні та вуличні фестивалі створять незабутню атмосферу для вашої подорожі.\n" +

"Київ, столиця України, пропонує розмаїтість готельних пропозицій від сучасних високих хмарочосів до історичних готелів на вулицях, що містять тисячолітню історію. Ви зможете досліджувати багатий культурний спадок та смачну українську кухню.\n" +

"Одеса, розташована на березі Чорного моря, має величезний вибір готелів з видом на море та легкий доступ до пляжів. Проведіть романтичні вечори на набережній та насолоджуйтеся свіжими морськими продуктами в місцевих ресторанах.\n" +

" Незалежно від вашого вибору, готелі в Україні готові зустріти вас з відкритими руками і надати незабутні враження від вашої подорожі."

const Home = () => {
    const [showAllCards, setShowAllCards] = useState(false);

    const cardsToDisplay = showAllCards ? dataCard : dataCard.slice(0, 3);
    const buttonText = showAllCards ? "Hide" : "View more";

    const handleClick = () => {
        setShowAllCards(!showAllCards);
    };

    return (
        <div>
            <SectionWrapper>
                <img src={HotelPicture} alt="#" className="main_photo"/>
                <StyledText>
                    <h1>{textTitle}</h1>
                    <p>
                        {titleText}
                    </p>
                </StyledText>
            </SectionWrapper>
            <CardWrapper>
                {cardsToDisplay.map((item) => (
                    <CardItem
                        id={item.id}
                        title={item.title}
                        text={item.text}
                        imageSrc={item.image}
                        price={item.price}
                    />
                ))}
            </CardWrapper>
            <StyledButton size="large" onClick={() => handleClick()}>{buttonText}</StyledButton>
        </div>
    );
};

export default Home;