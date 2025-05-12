import { Box, Container, ImageListItem } from "@mui/material";
import React from "react";
import MyCardList from "../muiStyle/ImgList";
import MyCarousel from "../muiStyle/MyCarousel";
import AspectRatio from '@mui/joy/AspectRatio';
const Carousel = () => {
    return (<div>
        <MyCarousel>
            <MyCardList>
                <Box width={500}>
                    <AspectRatio key='oo' objectFit="contain">
                        <img src='img/Screen Shot 2024-08-01 at 12.18.26 PM.png' alt="" />
                    </AspectRatio>
                </Box>
                <Box width={500}>
                    <AspectRatio key='o2o' objectFit="contain">
                        <img src='img/Screen Shot 2024-08-01 at 12.18.26 PM.png' alt="" />
                    </AspectRatio>
                </Box>
                <Box width={500}>
                    <AspectRatio key='o3o' objectFit="contain">
                        <img src='img/Screen Shot 2024-08-01 at 12.18.26 PM.png' alt="" />
                    </AspectRatio>
                </Box>

            </MyCardList>
        </MyCarousel>
    </div>)
}
export default Carousel