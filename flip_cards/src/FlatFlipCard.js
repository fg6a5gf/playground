import { Flex, Typography } from 'antd';
import { motion } from 'framer-motion';


const cardContainerStyle = {
    backgroundColor: "black",
    width: '100%',
    display: "flex",
    justifyContent: "flexStart",
    alignItems: "center",
    position: "relative",
    cursor: "pointer",
    transformStyle: 'preserve-3d',
    // clipPath: 'polygon(0 0, 100% 0, 100% 95%, 0 100%)'
}

const cardBackStyle = {
    position: "absolute",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden", // Safari/Chrome等使用的前缀
    MozBackfaceVisibility: "hidden", // Firefox使用的前缀
}

const cardFrontStyle = {
    position: "absolute",
    backfaceVisibility: "hidden",
    rotateX: 180,
    WebkitBackfaceVisibility: "hidden", // Safari/Chrome等使用的前缀
    MozBackfaceVisibility: "hidden", // Firefox使用的前缀
}

const fontStyle = {
    fontFamily: '"Microsoft YaHei",Arial,Helvetica,sans-serif, 宋体',
    fontDisplay: 'swap',
    fontSize: '44px',
    color: 'white',
}

const FlatFlipCard = ({ index, text, isFlipped, setItemFlipped }) => {
    const flipCard = () => {
        setItemFlipped(prevItems => [
            ...prevItems.slice(0, index),
            !prevItems[index],
            ...prevItems.slice(index + 1),
        ]);
    };

    return (
        <Flex style={{ flexGrow: 1,margin:'1px' }} onClick={flipCard} align='space-between'>
            <motion.div style={{ ...cardContainerStyle }} animate={{ rotateX: isFlipped ? 180 : 0 }} transition={{ duration: 0.6 }}>
                <motion.div style={{ ...cardBackStyle }} >
                    <Flex style={{ width: '100%', height: '100%' }}>
                        <div />
                    </Flex>
                </motion.div>
                <motion.div style={{ ...cardFrontStyle }} >
                    {/* 搞不清楚为什么需要这个marginLeft，but it just works */}
                    <Flex align={'center'} style={{ ...fontStyle, marginLeft: '10px' }}>
                            {text}
                        </Flex>
                </motion.div>
            </motion.div>
        </Flex>
    );
}

export default FlatFlipCard;