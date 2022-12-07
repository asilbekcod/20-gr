import React from "react"
import { Box, Button, Container, Grid, Typography, Link } from '@mui/material'
import { AiOutlineArrowUp } from "react-icons/ai";
import { useState, useEffect } from 'react';
import "./style.css"

function Strelka() {
    const [but, setBut] = useState(false);

    function setFixed() {
        if (window.scrollY >= 192) {
            setBut(false)
        } else {
            setBut(true)
        }

    }
    window.addEventListener("scroll", setFixed)
    return(
        <>
        <Box>
            <Link  className={but ? `button butting` : `button`} href="#"  sx={{
                position: "fixed",
                display: "inline",
                background: "#3fbbc0",
                color: "#fff",
                width: "40px",
                height: "40px",
                textAlign: "center",
                lineHeight: 1,
                fontSize: "28px",
                right: "15px",
                bottom: "15px",
                transition: "0.1s",
                borderRadius:'4px',
                zIndex: 9,
                "&:hover":{
                    color:"#fff",
                    background:"#5ec6ca"
                }
            }}>
            <Typography sx={{fontWeight:900,paddingBottom:"4px",fontSize: "24px",}}>
             <AiOutlineArrowUp />
            </Typography>
            </Link>
        </Box>
        </>
    )
    
}
export default Strelka