import { Container } from "@mui/material";
import { styled } from "@mui/system";


const MyCarousel = styled(Container)({
    position:'relative',
    height: '400px',
    width: '500px',
    overflow: 'hidden',
    '&:hover .arrow': {
        display:'block'
    }
})
export default MyCarousel