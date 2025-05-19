import { Container, ImageList } from "@mui/material";
import { styled } from "@mui/system";


const MyCardList = styled(Container, {
    shouldForwardProp: (prop) => prop !== 'slide'
})(({ slide }) => {
    console.log('slide', slide)
    return ({
        height: '300px',
        display: "flex",
        transform: slide !== 0 ? `translateX(-${slide*500}px)` : 'translateX(0px)',
        transition: 'transform 0.8s'
    })
})

export default MyCardList