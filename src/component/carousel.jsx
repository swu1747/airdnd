import { Box, Container, ImageListItem } from "@mui/material";
import React from "react";
import MyCardList from "../muiStyle/ImgList";
import MyCarousel from "../muiStyle/MyCarousel";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MyArrow from "../muiStyle/arrow";
const Carousel = () => {
    return (<div>
        <MyCarousel>
            <MyCardList>
                <Box >
                    <img width={'500px'} object-fit='contain' height='300px' src='img/Screen Shot 2024-08-01 at 12.18.26 PM.png' alt="" />
                </Box>
                <Box >
                    <img width={'500px'} height='300px' src='img/Screen Shot 2024-08-01 at 12.18.26 PM.png' alt="" />
                </Box>
                <Box >
                    <img width={'500px'} height='300px' src='img/Screen Shot 2024-08-01 at 12.18.26 PM.png' alt="" />
                </Box>
            </MyCardList>
            <MyArrow className="arrow">
                nn
            </MyArrow>
        </MyCarousel>
    </div>)
}
export default Carousel