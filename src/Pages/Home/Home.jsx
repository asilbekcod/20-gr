import { Box, Button, Grid, Typography } from "@mui/material";
import Carousel from 'react-bootstrap/Carousel';
import './Home.css'
import Home1 from '../../assets/Home/Home1'
import { Container } from "@mui/system";
import { Data } from "../../assets/homemap/index"
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

function Home() {
    return (
        <Box id='home'>
            <Box>
                <Carousel>
                    {Home1.map((val) => (
                        <Carousel.Item>
                            <Box id={val.NavCarBag}>
                                <Box sx={{
                                    padding: { xl: '0px 95px 50px 95px', lg: '0px 65px 50px 65px', md: '0px 50px 50px 50px', sm: '0px 50px 50px 50px', xs: '0px 50px 50px 50px' },
                                    marginTop: '21%'
                                }}>
                                    <Box sx={{
                                        padding: '30px 16px',
                                        height: '100%',
                                        background: 'rgba(255, 255, 255, 0.9)',
                                        borderTop: '4px solid #3fbbc0',
                                        textAlign: 'center'
                                    }}>
                                        <Typography sx={{
                                            color: '#2f2f2f',
                                            fontSize: { xl: '36px', lg: '36px', md: '36px', sm: '36px', xs: '28px' },
                                            fontWeight: '700',
                                            marginBottom: '20px'
                                        }}>
                                            {val.NavCarYoz1}
                                        </Typography>
                                        <Typography sx={{
                                            color: '#555',
                                            fontSize: '16px',
                                            marginBottom: '30px'
                                        }}>
                                            {val.NavCarYoz2}
                                        </Typography>
                                        <Button sx={{
                                            color: '#fff',
                                            background: '#3fbbc0',
                                            width: '141px',
                                            height: '42px',
                                            textTransform: 'none',
                                            fontSize: '14px',
                                            fontWeight: '500',
                                            letterSpacing: '1px',
                                            borderRadius: '4px',
                                            padding: '14px 0px'
                                        }}>
                                            Read More
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </Box>
            <Box >
                <Box sx={{ padding: { xl: '60px 95px', lg: '60px 65px', md: '60px 50px', sm: '60px 35px', xs: '60px 10px' } }}>
                    <Grid container gap={0} >
                        {Data.map((v) => (
                            <Grid item lg={3} md={3} sm={6} xs={12} sx={{
                                marginBottom: '48px'
                            }}>
                                <Slide bottom cascade>
                                    <Box className="container">
                                        <Box className="image" >
                                            <Typography sx={{
                                                fontSize: "48px",
                                                color: '#3fbbc0',
                                                lineHeight: '1',
                                                marginBottom: '15px'
                                            }}>
                                                {v.icon}
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: "18px ",
                                                fontWeight: "600",
                                                marginBottom: '15px',
                                                width: '100%',
                                                fontFamily: '"Open Sans", sans-serif'
                                            }}>
                                                {v.name}
                                            </Typography>
                                            <Typography sx={{
                                                fontSize: "15px",
                                                lineHeight: '28px',
                                                color: '#444',
                                                fontFamily: '"Open Sans", sans-serif',
                                                height: '100%'
                                            }}>
                                                {v.text}
                                            </Typography>
                                        </Box>
                                        <Box className="overlay">
                                            <Box sx={{ padding: '30px' }}>
                                                <Typography sx={{
                                                    fontSize: "48px",
                                                    color: '#fff',
                                                    lineHeight: '1',
                                                    marginBottom: '15px'
                                                }}>
                                                    {v.icon}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: "18px ",
                                                    fontWeight: "600",
                                                    color: '#fff',
                                                    marginBottom: '15px'
                                                }}>
                                                    {v.name}
                                                </Typography>
                                                <Typography sx={{
                                                    fontSize: "15px",
                                                    lineHeight: '28px',
                                                    color: '#fff',
                                                    letterSpacing: '0.5px'
                                                }}>
                                                    {v.text}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Slide>
                            </Grid>
                        ))}

                    </Grid>
                </Box>
                <Box padding='60px 0' sx={{ background: "#3fbbc0", justifyContent: "center" }}>
                    <Container >
                        <Zoom>
                            <Box sx={{ justifyContent: "center" }}>
                                <Typography sx={{ justifyContent: "center", textAlign: "center", fontSize: "28px", fontWeight: "700", color: "white", mb: "16px" }}>
                                    In an emergency? Need help now?
                                </Typography>
                                <Typography sx={{ mb: "1rem", textAlign: "center", fontSize: "16.5px", color: "white" }}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Typography>
                                <Box sx={{ justifyContent: "center", display: "flex" }}>
                                    <Button sx={{ textTransform: "capitalize", fontSize: "16px", m: "10px 0 0", padding: "10px 35px", border: "2px solid white", borderRadius: "30px", color: "white", fontWeight: "550", "&:hover": { background: "white", color: "#3fbbc0" } }}>
                                        Make an Make an Appointment
                                    </Button>
                                </Box>
                            </Box>
                        </Zoom>
                    </Container>
                </Box>
            </Box >
        </Box>
    )
}
export default Home;