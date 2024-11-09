import React, { useState } from 'react';
import { Flex, Space } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import FlipCard from './FlipCard'
import FlatFlipCard from './FlatFlipCard'
import data from './data'

const backgroundColorStyle = {
    backgroundColor: '#fff'
}

const containerStyle = {
    ...backgroundColorStyle,
    width: '100%',
    height: '100vh',
}

const App = () => {

    // ------------------------------
    const cardsLength = 8;
    const itemsPerRow = 4;

    const flatCardsLength = 5;

    const randomElements = (input, max) => {
        const arr = input || [];
        const shuffled = arr.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, max);
    };

    const [texts, setTexts] = useState(randomElements(data.texts, cardsLength));
    const [isFlippedArray, setItemFlipped] = useState([...Array(cardsLength)].map(() => false))

    const [flatTexts, setFlatTexts] = useState(randomElements(data.flatTexts, flatCardsLength));
    const [isFlatFlippedArray, setFlatItemFlipped] = useState([...Array(flatCardsLength)].map(() => false))

    const renderFlatCards = () => {
        const flatCards = []
        for (let i = 0; i < flatCardsLength; i++) {
            flatCards.push({ 'index': i, 'text': flatTexts[i] });
        }
        return (
            <Flex vertical={true} style={{ width: '80%', overflowY: "auto", flexGrow: 1}} justify='space-between'>
                {
                    flatCards.map(item => (
                        <FlatFlipCard
                            index={item.index}
                            text={item.text}
                            isFlipped={isFlatFlippedArray[item.index]}
                            setItemFlipped={setFlatItemFlipped}
                        />
                    ))
                }
            </Flex>

        )
    }

    const renderCards = () => {
        // 图片的背景图
        const cardBackImages = [
            "https://cdn-fusion.imgcdn.store/i/2024/3f5d71cfb3c5f25e.png",
            "https://cdn-fusion.imgcdn.store/i/2024/b3c6a8894fd5a87a.png",
            "https://cdn-fusion.imgcdn.store/i/2024/4252a85b3eb1171d.png",
            "https://cdn-fusion.imgcdn.store/i/2024/b2dc264f183212a8.png",
            "https://cdn-fusion.imgcdn.store/i/2024/ea29a638394b9c36.png",
            "https://cdn-fusion.imgcdn.store/i/2024/f03364d3d0cad380.png",
            "https://cdn-fusion.imgcdn.store/i/2024/e1fb92f355d4b9c8.png",
            "https://cdn-fusion.imgcdn.store/i/2024/5060cb4f46b711ac.png",
        ]

        const cards = [];
        for (let i = 0; i < cardsLength; i++) {
            cards.push({ 'index': i, 'text': texts[i], 'backGroundImage': cardBackImages[i] });
        }

        return (
            <Flex style={{ width: '100%' }} wrap={true} justify={"space-evenly"} align={"center"}>
                {cards.map(item => (
                    <Flex style={{ width: `${90 / itemsPerRow}%` }} key={item.index}>
                        <FlipCard
                            index={item.index}
                            text={item.text}
                            cardBackGrougImage={item.backGroundImage}
                            isFlipped={isFlippedArray[item.index]}
                            setItemFlipped={setItemFlipped}
                        />
                    </Flex>
                ))}
            </Flex>
        )
    };


    const [spinned, setSpinned] = useState(false);
    const syncOnClick = () => {
        setSpinned(true);
        setTimeout(() => {
            setItemFlipped(new Array(cardsLength).fill(false));
            setTimeout(() => { setTexts(randomElements(data.texts, cardsLength)) }, 700)
            setSpinned(false);
        }, 350);
    };

    const [flatSpinned, setFlatSpinned] = useState(false);
    const flatSyncOnClick = () => {
        setFlatSpinned(true);
        setTimeout(() => {
            setFlatItemFlipped(new Array(flatCardsLength).fill(false));
            setTimeout(() => { setFlatTexts(randomElements(data.flatTexts, flatCardsLength)) }, 700)
            setFlatSpinned(false);
        }, 350);
    };

    // ------------------------------

    return (
        <Flex style={containerStyle}>
            <Flex style={{ width: '20%' }}>
                <div></div>
            </Flex>
            <Flex style={{ width: '60%' }} vertical={true}>
                <Flex style={{ height: '30%', width: '100%' }} >
                    {renderFlatCards()}
                </Flex>
                <Flex style={{ height: '70%', margin:'15px'}}>{renderCards()}</Flex>
            </Flex>
            <Flex vertical={true} style={{ width: '20%' }}>
                <Flex style={{ height: '30%' }}>
                    <SyncOutlined onClick={flatSyncOnClick} style={{ fontSize: '22px' }} spin={flatSpinned} />
                </Flex>
                <Flex style={{ height: '70%' }}>
                    <SyncOutlined onClick={syncOnClick} style={{ fontSize: '22px' }} spin={spinned} />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default App;