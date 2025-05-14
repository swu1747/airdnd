import {  IconButton } from "@mui/material";
import { styled } from "@mui/system";



const MyArrow = styled(IconButton)({
    height: '50px',
    width: '50px',
    backgroundColor: 'white',
    position: 'absolute',
    top: '36%',
    right: '10%',
    display:'none',
    borderRadius:'50%',
    "&: hover":{
        backgroundColor:'red'
    }
})

export default MyArrow