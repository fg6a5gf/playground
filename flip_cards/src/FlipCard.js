import { Flex, Typography } from 'antd';
import { motion } from 'framer-motion';

const cardContainerStyle = {
    backgroundColor: "black",
    width: '100%',
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
    fontSize: '36px',
    color: 'white',
}

const FlipCard = ({ index, text, cardBackGrougImage, isFlipped, setItemFlipped }) => {

    const flipCard = () => {
        setItemFlipped(prevItems => [
            ...prevItems.slice(0, index),
            !prevItems[index],
            ...prevItems.slice(index + 1),
        ]);
    };

    return (
        <Flex onClick={flipCard} style={{ width: '100%' }}>
            <motion.div class={1} style={{ ...cardContainerStyle }} animate={{ rotateY: isFlipped ? 180 : 0 }} transition={{ duration: 0.6 }}>
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
        </Flex>
    );
};

export default FlipCard;