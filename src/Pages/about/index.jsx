import React from 'react'
import { Box, Container, Grid, Typography, Button, Link } from '@mui/material'
import Rasm from "../../assets/img/about.jpg"
import Rasm1 from "../../assets/img/features.jpg"
import { BiCheckCircle } from "react-icons/bi";
import { BiReceipt } from "react-icons/bi";
import { FaUserMd } from "react-icons/fa";
import { Databout, DataKun } from "../../assets/about/index"
import { IconBase } from 'react-icons/lib';
import CountUp from 'react-countup'
import Fade from 'react-reveal/Fade';
import "../../Pages/Home/style.css"
function About() {
    return (
        <Box sx={{ p: "60px 0", justifyContent: "center" }} id='about'>
            {/* <Container > */}
            <Box>
                <Box>
                    <Fade bottom>
                        <Box sx={{ justifyContent: "center", display: "flex" }}>
                            <Typography sx={{ fontSize: "32px ", fontWeight: "bold", textTransform: "uppercase", mb: "15px", position: "relative" }}>
                                ABOUT US
                            </Typography>
                        </Box>
                        <Box sx={{ justifyContent: "center", display: "flex" }}>
                            <Typography sx={{ width: "50px", height: "3px", background: "#3fbbc0" }}></Typography>
                        </Box>
                        <Box>
                            <Typography sx={{ textAlign: "center", m: { lg: "15px 59px", md: "15px 23.5px", sm: "15px 15px", xs: "15px 10px" }, color: "#000", color: "#3A3A3A", }}>
                                Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                            </Typography>
                        </Box>
                    </Fade>
                </Box>
                <Box sx={{justifyContent:"center", display:"flex", width:"100%"}}>
                    <Grid container spacing={2} sx={{ mt: "1.2%", width:"90%" }}>
                        <Grid item lg={6} md={6} sm={12} xs={12} justifyContent="center">
                            <Fade left>
                            <img src={Rasm} style={{ width: "100%", }} alt="" />
                            </Fade>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <Box>
                                <Fade right>
                                    <Typography sx={{ fontSize: "26px", fontWeight: "600", m: "0 0 8px", color: "#3A3A3A" }}>
                                        Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                                    </Typography>
                                    <Typography sx={{ fontStyle: "italic", m: "0 0 16px", color: "#3A3A3A" }}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                    </Typography>
                                    <Typography sx={{ alignItems: "center", display: "flex", mb: "15px", color: "#3A3A3A" }}>
                                        <BiCheckCircle style={{ fontSize: "25px", margin: " 0 10px 0 0", color: "#3EB8BD    " }} />    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </Typography>
                                    <Typography sx={{ alignItems: "center", display: "flex", mb: "15px", color: "#3A3A3A" }}>
                                        <BiCheckCircle style={{ fontSize: "25px", margin: " 0 10px 0 0", color: "#3EB8BD    " }} />    Duis aute irure dolor in reprehenderit in voluptate velit.
                                    </Typography>
                                    <Typography >
                                        <BiCheckCircle style={{ fontSize: "25px", margin: " -0px 5px 0 0", color: "#3EB8BD" }} />    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.
                                    </Typography>
                                    <Typography sx={{ mt: "5%", color: "#3A3A3A" }}>
                                        Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                                    </Typography>
                                </Fade>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Box>
            <Box sx={{ justifyContent: "center", display: "flex", width: "100%", p: { lg: "0", md: "0 0 0 0%", sm: "0 0 0 0%", xs: "0 0 0 0%" } }}>
                <Grid container p="60px 0" spacing={3} width='90%'>
                    {Databout.map((v) => (

                        <Grid item lg={3} md={3} sm={6} xs={12} >
                            <Fade bottom>


                                <Box sx={{ width: "100%", height: "100%", boxShadow: "-10px -5px 40px 0 rgb(0 0 0 / 10%) ", padding: "30px", }}>
                                    <Box>
                                        <Typography sx={{ fontSize: "30px", color: "#3FBBC0", mr: "25px" }}>

                                            {v.icon} <span style={{ color: "#555555", fontSize: "40px", fontWeight: "600", }}> <CountUp end={v.number} duration={1.5} /></span>
                                        </Typography>
                                    </Box>
                                    <Box>

                                        <Typography sx={{ fontSize: "14px", p: "10px 0 0", mb: "20px", }}>
                                            <b> {v.kasb}</b> {v.text}
                                        </Typography>
                                    </Box>
                                    <Box>
                                        <Link href='#' sx={{
                                            textDecoration: "none",
                                            fontSize: "15px",
                                            fontWeight: "600",
                                            color: "#7b7b7b",
                                            fontFamily: '"Poppins", sans-serif',
                                            transition: "ease-in-out 0.3s",
                                            cursor: "pointer",
                                            mb: "15px",
                                            "&:hover": {
                                                color: "#3FBBC0"
                                            }
                                        }}>
                                            Find out more
                                        </Link>
                                    </Box>

                                </Box>

                            </Fade>
                        </Grid>
                    ))}

                </Grid>
            </Box>
            <Box sx={{ justifyContent: "center", display: "flex", width: "100%" }}>
                <Grid container spacing={1} sx={{ justifyContent: "center", width: "90%", display: "flex" }}>
                    <Grid lg={6} md={6} sm={12} xs={12} sx={{ width: "90%", justifyContent: "center", p: "10px" }}>
                        <Container>
                            {DataKun.map((v) => (
                                <Grid item xs={12} justifyConten="center">
                                    <Fade left>

                                        <Box sx={{ mb: "30px", fontSize: "50px", color: "#3FBBC0" }}>
                                            {v.icon}
                                            <Box sx={{ mt: "-60px" }}>

                                                <Typography sx={{ m: "5px 0 10px 60px", fontSize: "20px", fontWeight: "600" }}>
                                                    {v.name}
                                                </Typography>
                                                <Typography sx={{ m: "5px 0 10px 60px", color: "#8F8F8F" }}>
                                                    {v.text}
                                                </Typography>
                                            </Box>

                                        </Box>
                                    </Fade>
                                </Grid>
                            ))}
                        </Container>
                    </Grid>
                    <Grid item xs={12} lg={6} md={6} sm={12} justifyContent="center" display='flex' sx={{ ml: { lg: "0", md: "0", sm: "0%", xs: "0%" } }}>
                        <Fade right>
                            <img src={Rasm1} style={{ width: "100%", height: '100%' }} alt="" />
                        </Fade>
                    </Grid>

                </Grid>





                {/* </Container> */}
            </Box>
        </Box>
    )
}

export default About