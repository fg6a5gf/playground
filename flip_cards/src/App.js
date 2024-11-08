import React, { useState } from 'react';
import { Flex, Typography } from 'antd';
import { motion } from 'framer-motion';
import { SyncOutlined } from '@ant-design/icons';
import data from './data'

const backgroundColorStyle = {
    backgroundColor: '#fff'
}

const containerStyle = {
    ...backgroundColorStyle,
    width: '100%',
    height: '100vh',
}

const cardContainerStyle = {
    backgroundColor: "black",
    width: 200,
    height: 300,
    borderRadius: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
    transformStyle: 'preserve-3d',
    // clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)'
}

const cardBackStyle = {
    width: '100%',
    height: '100%',
    position: "absolute",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden", // Safari/Chrome等使用的前缀
    MozBackfaceVisibility: "hidden", // Firefox使用的前缀
}

const cardFrontStyle = {
    position: "absolute",
    width: '100%',
    height: '100%',
    backfaceVisibility: "hidden",
    rotateY: 180,
    WebkitBackfaceVisibility: "hidden", // Safari/Chrome等使用的前缀
    MozBackfaceVisibility: "hidden", // Firefox使用的前缀
}

const fontStyle = {
    fontFamily: '"Microsoft YaHei",Arial,Helvetica,sans-serif, 宋体',
    fontDisplay: 'swap',
    fontSize: '20px',
    color: 'white',
}

const CardFlip = ({ index, text, cardBackGrougImage, isFlipped, setItemFlipped }) => {


    const flipCard = () => {
        setItemFlipped(prevItems => [
            ...prevItems.slice(0, index),
            !prevItems[index],
            ...prevItems.slice(index + 1),
        ]);
    };

    return (
        <div onClick={flipCard}>
            <motion.div style={{ ...cardContainerStyle }} animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.6 }}>
                <motion.div style={{ ...cardBackStyle }} >
                    <Flex align='center' justify='center' style={{ width: '100%', height: '100%' }}>
                        <img src={cardBackGrougImage} alt='' border="0" />
                    </Flex>

                </motion.div>
                <motion.div style={{ ...cardFrontStyle }} >
                    <Flex justify='center' align='center' style={{ width: '100%', height: '100%' }} >
                        <Flex style={{ flexGrow: 1, margin: '10px' }}>
                            <Typography.Paragraph style={{ width: '100%', height: '100%' }} strong={true}>
                                <div style={{ ...fontStyle }}>
                                    {text}
                                </div>
                            </Typography.Paragraph>
                        </Flex>
                    </Flex>
                </motion.div>
            </motion.div>
        </div>
    );
};

const App = () => {

    const cardsLength = 8;
    const itemsPerRow = 4;

    // ------------------------------

    const randomElements = () => {
        const arr = data.texts || [];
        const shuffled = arr.slice().sort(() => 0.5 - Math.random());
        return shuffled.slice(0, 8);
    };

    const [texts, setTexts] = useState(randomElements());

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

    const [isFlippedArray, setItemFlipped] = useState([...Array(cardsLength)].map(() => false))

    const renderCards = () => {
        return (
            <Flex style={{ width: '100%' }} wrap={true} gap={"middle"} justify={"space-evenly"} align={"center"}>
                {cards.map(item => (
                    <Flex style={{ width: `${90 / itemsPerRow}%` }} key={item.index}>
                        <CardFlip
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
            setTimeout(() => { setTexts(randomElements()) }, 700)
            setSpinned(false);
        }, 350);
    };

    // ------------------------------

    return (
        <Flex style={containerStyle}>
            <Flex style={{ width: '20%' }}>
                <div />
            </Flex>
            <Flex style={{ width: '60%' }} vertical={true}>
                <Flex style={{ height: '10%', width: '100%' }} ><div /></Flex>
                <Flex style={{ height: '80%' }} >{renderCards()}</Flex>
                <Flex style={{ height: '10%', width: '100%' }} ><div /></Flex>
            </Flex>
            <Flex style={{ width: '20%' }}>
                <SyncOutlined onClick={syncOnClick} style={{ fontSize: '22px' }} spin={spinned} />
            </Flex>
        </Flex>
    );
};

export default App;