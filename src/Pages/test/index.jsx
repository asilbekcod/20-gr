import React from 'react'
import { Box, Container, Grid, Typography, Button } from '@mui/material'
import Carousel from "react-elastic-carousel";
import { Carousel3 } from '../../assets/test';
import { ImQuotesLeft } from "react-icons/im";
import { ImQuotesRight } from "react-icons/im";
import "../Home/style.css"
function Test() {

    const breakPoints = [
        { width: 100, itemsToShow: 1, showArrows: false },
        { width: 550, itemsToShow: 1, showArrows: false },
        { width: 768, itemsToShow: 1, showArrows: false },
        { width: 1024, itemsToShow: 3, showArrows: false },

    ];
    return (
        <Box sx={{ p: "60px 0" }}>
            <Box sx={{ justifyContent: "center", display: "flex" }}>
                <Typography sx={{ fontSize: "32px ", fontWeight: "bold", textTransform: "uppercase", mb: "15px", position: "relative" }}>
                    TESTIMONIALS
                </Typography>
            </Box>
            <Box sx={{ justifyContent: "center", display: "flex" }}>
                <Typography sx={{ width: "50px", height: "3px", background: "#3fbbc0" }}></Typography>
                {/* <Container> */}
            </Box>
            <Box>
                <Typography sx={{ textAlign: "center", m: {lg:"15px 60px", md:"15px 23.5px", sm:"15px 15px",xs: "15px 10px"}, color: "#000", color: "#3A3A3A" }}>
                    Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                </Typography>
            </Box>



            <Grid container spacing={3} justifyContent="center">
                <Grid item lg={11.2} md={12} sm={12} xs={12}>
                    <Carousel className="lorem" breakPoints={breakPoints} enableAutoPlay autoPlaySpeed={3000} >
                        {Carousel3.map((v) => (
                            <Box sx={{ width: "90%", height: "auto ", p: "20px 20px 60px", mt: "7%" }}>
                                <Box sx={{ width: "100%", height: "auto", background: "#f0fafa", borderRadius: "6px", padding: "0 0 40px" }}>
                                    <Typography sx={{ padding: "15px", fontStyle: "italic", color: "#444", lineHeight: "23px" }}>
                                        <span style={{ fontSize: "20px", padding: "10px", color: "#B2E4E6" }}>
                                            {v.icon}
                                        </span>
                                        {v.text}
                                        <span style={{ fontSize: "20px", padding: "10px", color: "#B2E4E6" }}>
                                            {v.icon1}

                                        </span>
                                    </Typography>
                                </Box>
                                <Box>
                                    <Box sx={{ width: "80px", height: "80px", m: "-40px 0 0 40px", borderRadius: "50%", zIndex: "2px", border: "6px solid #fff", background: "#fff" }}>
                                        <img src={v.rasm} style={{ width: "101%", height: "101%", borderRadius: "50%" }} alt="" />
                                    </Box>
                                    <Box >
                                        <Typography sx={{ fontSize: "18px", m: "10px 0 5px 45px", fontWeight: "bold", color: "#111", fontFamily: '"Roboto", sans-serif' }}>
                                            {v.name}
                                        </Typography>
                                        <Typography sx={{ fontSize: "14px", m: "0px 0 0px 45px", fontWeight: "bold", color: "#999", fontFamily: '"Roboto", sans-serif' }}  >
                                            {v.last}
                                        </Typography>
                                    </Box>
                                </Box>

                            </Box>



                        ))}
                    </Carousel>
                </Grid>
            </Grid>


            {/* </Container> */}

        </Box>
    )
}

export default Test