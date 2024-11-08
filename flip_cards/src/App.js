import React, { useState } from 'react';
import { Flex, Typography } from 'antd';
import { motion } from 'framer-motion';

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

const CardFlip = ({ index, text, cardBackGrougImage }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    const flipCard = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div onClick={flipCard}>
            <motion.div style={{ ...cardContainerStyle }} animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.6 }}>
                <motion.div style={{ ...cardBackStyle }} >
                    <Flex align='center' justify='center' style={{ width: '100%', height: '100%' }}>
                        <img  src={cardBackGrougImage} alt='' border="0" />
                    </Flex>

                </motion.div>
                <motion.div style={{ ...cardFrontStyle }} >
                    <Flex justify='center' align='center' style={{ width: '100%', height: '100%' }} >
                        <Flex style={{ flexGrow: 1, margin: '10px' }}>
                            <Typography.Paragraph style={{ width: '100%', height: '100%' }} strong={true}>
                                <div style={{ ...fontStyle }}>
                                    {text}{text}{text}{text}{text}{text}{text}{text}{text}{text}
                                </div>
                            </Typography.Paragraph>
                        </Flex>
                    </Flex>
                </motion.div>
            </motion.div>
        </div>
    );
};

// todo 随机引入字符串
// todo 部署
const App = () => {

    // ------------------------------

    // todo 需要一个表单
    // todo 表单提交前展示空白，提交后统一翻转
    const texts = [
        "文本一",
        "文本二",
        "文本三",
        "文本四",
        "文本五",
        "文本六",
        "文本七",
        "文本八"
    ]

    // 图片的背景图
    const cardBackImages = [
        // 图片系列1
        // "https://s21.ax1x.com/2024/11/07/pAymTdP.png",
        // "https://s21.ax1x.com/2024/11/07/pAym4sA.png",
        // "https://s21.ax1x.com/2024/11/07/pAymoZt.png",
        // "https://s21.ax1x.com/2024/11/07/pAymqJS.png",
        // "https://s21.ax1x.com/2024/11/07/pAymhMd.png",
        // "https://s21.ax1x.com/2024/11/07/pAymWxH.png",
        // "https://s21.ax1x.com/2024/11/07/pAym5qI.png",
        // "https://s21.ax1x.com/2024/11/07/pAym7If.png",
        // "https://s21.ax1x.com/2024/11/07/pAymbi8.png",
        // 图片系列2
        // "https://s21.ax1x.com/2024/11/07/pAyt8lq.png",
        
        // "https://i.imgur.com/dKaCkUY.png",
        "https://cdn-fusion.imgcdn.store/i/2024/3f5d71cfb3c5f25e.png",
        "https://cdn-fusion.imgcdn.store/i/2024/b3c6a8894fd5a87a.png",
        "https://cdn-fusion.imgcdn.store/i/2024/4252a85b3eb1171d.png",
        "https://cdn-fusion.imgcdn.store/i/2024/b2dc264f183212a8.png",        
        "https://cdn-fusion.imgcdn.store/i/2024/ea29a638394b9c36.png",
        "https://cdn-fusion.imgcdn.store/i/2024/f03364d3d0cad380.png",
        "https://cdn-fusion.imgcdn.store/i/2024/e1fb92f355d4b9c8.png",
        "https://cdn-fusion.imgcdn.store/i/2024/5060cb4f46b711ac.png",
    ]

    const itemsPerRow = 4;

    let cards = [];
    for (let i = 0; i < texts.length; i++) {
        cards.push({ 'index': i, 'text': texts[i], 'backGroundImage': cardBackImages[i] });
    }

    const renderCards = () => {
        return (
            <Flex style={{ width: '100%' }} wrap={true} gap={"middle"} justify={"space-evenly"} align={"center"}>
                {cards.map(item => (
                    <Flex style={{ width: `${90 / itemsPerRow}%` }} key={item.index}>
                        <CardFlip index={item.index} text={item.text} cardBackGrougImage={item.backGroundImage} />
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
            <Flex style={{ width: '60%' }} vertical={true}>
                <Flex style={{ height: '10%', width: '100%' }} ><div /></Flex>
                <Flex style={{ height: '80%' }} >{renderCards()}</Flex>
                <Flex style={{ height: '10%', width: '100%' }} ><div /></Flex>
            </Flex>
            <Flex style={{ width: '20%' }}>
                {/* <Button type="default" shape={"round"} style={buttonStyle}>
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
                </Button> */}
            </Flex>
        </Flex>
    );
};

export default App;