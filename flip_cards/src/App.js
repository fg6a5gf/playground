import React, {useState} from 'react';
import {Button, Card, Col, Flex, Row, Typography} from 'antd';
import 'animate.css';

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

const baseStyle = {
    width: '25%',
    height: 54,
};


class MyCard {

    constructor(index, text) {
        this.text = text;
        this.back = true;
    }

    handleClick() {
        this.back = !this.back;
    }
}

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flip-card" onClick={handleClick}>
            <div className={`flip-card-inner animate__animated ${isFlipped ? 'animate__flipY' : ''}`}>
                <div className="flip-card-front">Front Side</div>
                <div className="flip-card-back">Back Side</div>
            </div>
        </div>
    );
};

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
        cards.push(new MyCard(i, texts[i]));
    }

    const [isAnimating, setIsAnimating] = useState(false);

    const handleClick = (card) => {
        setIsAnimating(true);
        setTimeout(() => {
                setIsAnimating(false);
            },
            1000); // 设置动画持续时间，这里假设动画持续 1 秒，之后恢复初始状态
        // todo 这里的card好像有问题，导致无法正常点击
        card.handleClick();
    };

    const renderCards = () => {
        return (
            <Flex style={{width: '100%'}} wrap={true} gap={"middle"} justify={"space-evenly"} align={"center"}>
                {cards.map(item => (
                    <Flex style={{width: `${90 / itemsPerRow}%`}} key={item}>
                        <Card
                            style={{
                                width: '100%',
                                height: 200
                            }}
                            onClick={handleClick}
                        >

                            <div className={`animate__animated ${isAnimating ? 'animate__flipInY' : ''}`}
                                 onClick={handleClick}>
                                <p hidden={!item.back}>{`正面` + item.text}</p>
                                <p hidden={item.back}>{`背面` + item.text}</p>
                            </div>

                        </Card>
                    </Flex>
                ))}
            </Flex>
        )
    };


    // ------------------------------

    return (
        <Flex style={containerStyle}>
            <Flex style={{width: '20%'}}>
                <div/>
            </Flex>
            <Flex style={{width: '60%'}}>
                {renderCards()}
            </Flex>
            <Flex style={{width: '20%'}}>
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