import { Box, Container, ImageListItem } from "@mui/material";
import React, { useState } from "react";
import MyCardList from "../muiStyle/ImgList";
import MyCarousel from "../muiStyle/MyCarousel";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MyArrow from "../muiStyle/arrow";
const Carousel = () => {
    const [slide, setslide] = useState(0)
    const arrhandler = () => {
        console.log("..")
        setslide((pre) => pre + 1)
        console.log(slide)
    }
    return (<div>
        <MyCarousel>
            <MyCardList slide={slide}>
                <Box >
                    <img width={'500px'} object-fit='contain' height='300px' src='img/Screen Shot 2024-08-01 at 12.18.26 PM.png' alt="" />
                </Box>
                <Box >
                    <img width={'500px'} object-fit='contain' height='300px' src='img/Screen Shot 2024-08-01 at 12.18.26 PM.png' alt="" />
                </Box>
                <Box >
                    <img width={'500px'} object-fit='contain' height='300px' src='img/Screen Shot 2024-08-01 at 12.18.26 PM.png' alt="" />
                </Box>
            </MyCardList>
            <MyArrow className="arrow" onClick={arrhandler}>
                nn
            </MyArrow>
        </MyCarousel>
    </div>)
}
export default Carousel