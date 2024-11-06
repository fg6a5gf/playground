import React, { useState } from 'react';
import { Button, Card, Col, Flex, Row, Typography } from 'antd';
import 'animate.css';
import { motion } from 'framer-motion';


const containerStyle = {
    width: '100%',
    height: '100vh',
    // minHeight: '100%',
    backgroundColor: '#EBECEF',
}

const buttonStyle = {
    // backgroundColor: '#EBECEF',
    // borderRadius: '30px',
    // boxShadow: '25px 25px 50px #474748, -25px -25px 50px #ffffff'
}

const cardStyle = {
    width: '100%',
    height: '100%',
    // position: 'relative',
    transition: 'transform 0.6s',
    transformStyle: 'preserve-3d',
};

const frontStyle = {
    // position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'lightblue',
};

const backStyle = {
    // position: 'absolute',
    width: '100%',
    height: '100%',
    backfaceVisibility: 'hidden',
    backgroundColor: 'lightgreen',
    transform: 'rotateY(180deg)',
};

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div onClick={flipCard}>
            <motion.div
                style={{
                    width: 200,
                    height: 300,
                    borderRadius: 10,
                    backgroundColor: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                    cursor: "pointer",
                    transformStyle: 'preserve-3d'
                }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.5 }}
            >
                <motion.div
                    style={{
                        position: "absolute",
                        backfaceVisibility: "hidden",
                        WebkitBackfaceVisibility: "hidden", // Safari/Chrome等使用的前缀
                        MozBackfaceVisibility: "hidden", // Firefox使用的前缀
                    }}
                >
                    Front
                </motion.div>
                <motion.div
                    style={{
                        position: "absolute",
                        backfaceVisibility: "hidden",
                        rotateY: 180,
                        WebkitBackfaceVisibility: "hidden", // Safari/Chrome等使用的前缀
                        MozBackfaceVisibility: "hidden", // Firefox使用的前缀
                    }}
                >
                    Back
                </motion.div>
            </motion.div>
        </div>
    );
};

const CCard = ({ frontContent, backContent }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <motion.div
            className="card"
            onClick={handleFlip}
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6 }}
            style={{ backfaceVisibility: 'hidden', transformStyle: 'preserve-3d' }}
        >
            <div className="card-front">{`正面` + frontContent}</div>
            <div className="card-back">{`背面` + backContent}</div>
        </motion.div>
    );
};

const FlipCard = ({ index, text }) => {
    // isFlipper 正面
    const [isFlipped, setIsFlipped] = useState(false);
    const [cardIndex] = useState(index)
    // const handleClick = () => {
    //     setIsFlipped(!isFlipped);
    //     console.log(`index=` + cardIndex)
    //     console.log(`text=` + text)
    // };

    const [flippedCards, setFlippedCards] = useState([]);

    const handleClick = (cardIndex) => {
        if (flippedCards.includes(cardIndex)) {
            setFlippedCards(flippedCards.filter(index => index !== cardIndex));
        } else {
            setFlippedCards([...flippedCards, cardIndex]);
        }
    };

    return (
        <Card className="card" style={{ transform: flippedCards.includes(index) ? 'rotateY(180deg)' : 'none', width: '80%', height: '150px' }} onClick={() => handleClick(index)}>
            <div style={frontStyle}>Front {index + 1}</div>
            <div style={backStyle}>Back {index + 1}</div>
        </Card>
    );
};

// todo 完成翻转
// todo 支持反复点击
// todo 随机引入字符串
// todo 部署
const App = () => {

    // ------------------------------

    let texts = [
        "文本一",
        "文本二",
        "文本三",
        "文本四",
        "文本五",
        "文本六",
        "文本七",
        "文本八"
    ]

    const itemsPerRow = 4;
    let cards = [];

    for (let i = 0; i < texts.length; i++) {
        cards.push({ 'index': i, 'text': texts[i] });
    }

    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (card) => {
        setIsAnimating(true);
        setTimeout(() => {
            setIsAnimating(false);
        },
            1000); // 设置动画持续时间，这里假设动画持续 1 秒，之后恢复初始状态
        // todo 这里的card好像有问题，导致无法正常点击
        // card.handleClick();
        alert(card.index)
    };

    const renderCards = () => {
        return (
            <Flex style={{ width: '100%' }} wrap={true} gap={"middle"} justify={"space-evenly"} align={"center"}>
                {cards.map(item => (
                    <Flex style={{ width: `${90 / itemsPerRow}%` }} key={item}>
                        {/* <FlipCard index={item.index} text={item.text} /> */}
                        {/* <CCard frontContent={item.index} backContent={item.text}></CCard> */}
                        <CardFlip />
                    </Flex>
                ))}
            </Flex>
        )
    };


    // ------------------------------

    return (
        <Flex style={containerStyle}>
            <Flex style={{ width: '20%' }}>
                <div />
            </Flex>
            <Flex style={{ width: '60%' }}>
                {renderCards()}
            </Flex>
            <Flex style={{ width: '20%' }}>
                <Button type="default" shape={"round"} style={buttonStyle}>
                    Get Started
                </Button>
                <Button type="default" shape={"round"} style={buttonStyle}>
                    Get Started
                </Button>
                <Button type="default" shape={"round"} style={buttonStyle}>
                    Get Started
                </Button>
                <Button type="default" shape={"round"} style={buttonStyle}>
                    Get Started
                </Button>
            </Flex>
        </Flex>
    );
};

export default App;