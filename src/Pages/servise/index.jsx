import { Box, Typography, Container, Grid, Link } from '@mui/material'
import React from 'react'
import { FaHeartbeat } from "react-icons/fa";
import { Card } from "../../assets/servise"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
function Servise() {
    return (
        <Box sx={{ p: "60px 0" }} id='servise'>
            {/* <Container> */}
                <Fade bottom>
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <Typography sx={{ fontSize: "32px ", fontWeight: "bold", textTransform: "uppercase", mb: "15px", position: "relative" }}>
                            SERVICES
                        </Typography>
                    </Box>
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <Typography sx={{ width: "50px", height: "3px", background: "#3fbbc0" }}></Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ textAlign: "center",  m: {lg:"15px 60px", md:"15px 23.5px", sm:"15px 15px",xs: "15px 10px"}, color: "#7A7A7A", color: "#3A3A3A" }}>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </Typography>
                    </Box>
                </Fade>
                <Grid container spacing={3} justifyContent="center">
                    {Card.map((v) => (
                        <Grid item lg={3.6} md={3.82} sm={5.5} xs={11.5}>
                            <Zoom >
                                <Box>
                                    <Box sx={{ width: "100%", height: 'auto', justifyContent: "center", display: 'flex', }}>
                                        <Box sx={{ width: "80px", height: "80px", borderRadius: "50%", boxShadow: "0px 0 25px rgb(0 0 0 / 15%)", alignItems: "center", display: "flex", justifyContent: "center", mt: "30px", fontSize: "35px", color: "#3FBBC0" }}>
                                            {v.icon}
                                        </Box>
                                    </Box>
                                    <Box sx={{ justifyContent: "center", display: "flex", mt: "15px" }}>
                                        <Link href="#" sx={{ textDecoration: "none", }}>
                                            <Typography sx={{
                                                color: "#444444", transition: ".3s", fontWeight: "600", fontSize: "18px", cursor: "pointer", "&:hover": {
                                                    color: "#3FBBC0"
                                                }
                                            }}  >

                                                Lorem Ipsum
                                            </Typography>
                                        </Link>
                                    </Box >
                                    <Box sx={{ justifyContent: "center", display: "flex", mb: "15px" }}>
                                        <Typography sx={{ width: "50px", height: '3px', background: "#3FBBC0", mt: "8px" }}></Typography>
                                    </Box>
                                    <Typography sx={{ textAlign: "center", fontSize: '14.55px', color: "#7A7A7A" }}>
                                        {v.text}
                                    </Typography>
                                </Box>

                            </Zoom>
                        </Grid>
                    ))}

                </Grid>



            {/* </Container> */}

        </Box>
    )
}

export default Servise