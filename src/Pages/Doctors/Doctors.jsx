import React from "react"
import { Box, Button, Container, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Doctorsmap, Princep, Princep2, Princep3 } from "../../assets/doctors/doctors";
import CustomizedAccordions from "./acardion";
import Fade from 'react-reveal/Fade';
import Galary from "../galary";
import "./style.css"


function Doctors() {
    return (
        < >
            <Box id="doctors" sx={{
                padding: "60px 0",
                overflow: "hidden",
                backgroundColor: "#f7fcfc",
            }}>
                <Grid container justifyContent="center" textAlign="start">
                    <Grid item xl={10.5} lg={12} md={11} sm={10.8} xs={11} spacing={0}>
                        <Fade bottom>
                            <Box sx={{ paddingBottom: "30px" }}>
                                <Box sx={{ justifyContent: "center", display: "flex", }}>
                                    <Typography sx={{
                                        fontSize: "32px ",
                                        fontWeight: "bold",
                                        textTransform: "uppercase",
                                        mb: "15px",
                                        position: "relative",

                                    }}>
                                        DOCTORS
                                    </Typography>
                                </Box>
                                <Box sx={{ justifyContent: "center", display: "flex" }}>
                                    <Typography sx={{
                                        width: "50px",
                                        height: "3px",
                                        background: "#3fbbc0"
                                    }}></Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        textAlign: "center",
                                        mt: "15px",
                                        color: "#000",
                                        color: "#3A3A3A"
                                    }}>
                                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                        Quia fugiat sit in iste officiis commodi quidem hic quas.
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={3}>
                    {Doctorsmap.map((val) => (
                        <Grid item xl={2.6} lg={2.7} md={2.8} sm={5.4} xs={11}>
                            <Fade bottom>
                                <Box sx={{
                                    marginBottom: "20px",
                                    overflow: "hidden",
                                    textAlign: "center",
                                    borderRadius: "4px",
                                    background: "#fff",
                                    boxShadow: " 0px 2px 15px rgb(63 187 192 / 10%)",
                                }}>
                                    <Box className="doc">
                                        <Box className="doctor_hover" sx={{
                                            position: "relative",
                                            overflow: "hidden",
                                            textAlign: "center"
                                        }}>
                                            <img width={"100%"} height={"auto"} style={{ verticalAlign: "middle" }} src={val.img} alt="" />
                                            <Box className="doctor">
                                                <Link href="#" className="doclink" sx={{ textDecoration: "none" }}>
                                                    <i style={{ fontSize: "21px", margin: "0px 10px" }}>
                                                        {val.icon}
                                                    </i>
                                                </Link>
                                                <Link href="#" className="doclink" sx={{ textDecoration: "none" }}>
                                                    <i style={{ fontSize: "20px", margin: "0px 10px" }}>
                                                        {val.icon1}
                                                    </i>
                                                </Link>
                                                <Link href="#" className="doclink" sx={{ textDecoration: "none" }}>
                                                    <i style={{ fontSize: "20px", margin: "0px 10px" }}>
                                                        {val.icon2}
                                                    </i>
                                                </Link>
                                                <Link href="#" className="doclink" sx={{ textDecoration: "none" }}>
                                                    <i style={{ fontSize: "20px", margin: "0px 10px" }}>
                                                        {val.icon3}
                                                    </i>
                                                </Link>
                                            </Box>
                                        </Box>
                                        <Box sx={{
                                            padding: "25px 15px",
                                            textAlign: "center"
                                        }}>
                                            <Typography variant="h4" sx={{
                                                fontWeight: 700,
                                                marginBottom: "5px",
                                                fontSize: "18px",
                                                color: "#555555",
                                                fontFamily: "'Roboto', sans-serif"
                                            }}>
                                                {val.name}
                                            </Typography>
                                            <Typography sx={{
                                                display: "block",
                                                fontSize: "13px",
                                                fontWeight: 400,
                                                color: "#aaaaaa",
                                            }}>
                                                {val.text}
                                            </Typography>

                                        </Box>
                                    </Box>
                                </Box>
                            </Fade>
                        </Grid>
                    ))}
                </Grid>

            </Box>
                        <Galary/>                    
            <Box id="pricing" sx={{
                padding: "60px 0",
                overflow: "hidden",
            }}>
                <Grid container justifyContent="center" textAlign="start">
                    <Grid item xl={10.5} lg={12} md={11} sm={10.8} xs={11} spacing={0}>
                        <Fade bottom>
                            <Box sx={{ paddingBottom: "30px" }}>
                                <Box sx={{ justifyContent: "center", display: "flex", }}>
                                    <Typography sx={{
                                        fontSize: "32px ",
                                        fontWeight: "bold",
                                        textTransform: "uppercase",
                                        mb: "15px",
                                        position: "relative",

                                    }}>
                                        Pricing
                                    </Typography>
                                </Box>
                                <Box sx={{ justifyContent: "center", display: "flex" }}>
                                    <Typography sx={{
                                        width: "50px",
                                        height: "3px",
                                        background: "#3fbbc0"
                                    }}></Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        textAlign: "center",
                                        mt: "15px",
                                        color: "#000",
                                        color: "#3A3A3A"
                                    }}>
                                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                        Quia fugiat sit in iste officiis commodi quidem hic quas.
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" spacing={3}>
                    <Grid item xl={2.6} lg={2.7} md={2.8} sm={5.4} xs={11}>
                        <Fade bottom>
                            <Box sx={{
                                paddingTop: "20px",
                                background: "#fff",
                                textAlign: "center",
                                boxShadow: "0px 0px 4px rgb(0 0 0 / 12%)",
                                borderRadius: "4px",
                                position: "relative",
                                overflow: "hidden",
                                width: "100%"
                            }}>
                                <Box variant="h3" sx={{
                                    margin: "-20px 0px 20px 0px",
                                    padding: "20px ",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    color: "#777777",
                                    background: "#f8f8f8",
                                    width: "100%"

                                }}>
                                    Free
                                </Box>
                                <Typography variant="h4" sx={{
                                    fontSize: "36px",
                                    color: "#3fbbc0",
                                    fontWeight: 800,
                                    marginBottom: "20px",
                                }}>
                                    <sup style={{ fontSize: "20px", top: "-15px", left: "-3px" }}>$</sup>
                                    0
                                    <span style={{ fontSize: "16px", color: "#bababa", fontWeight: "300" }}> / month</span>
                                </Typography>
                                {Princep.map((val, index) => (
                                    <Typography sx={{
                                        textAlign: "center",
                                        lineHeight: "20px",
                                        fontSize: "14px",
                                        color: (val.color),
                                        paddingBottom: "16px",
                                        textDecoration: (val.in),
                                    }}>
                                        {val.text}
                                    </Typography>
                                ))}
                                <Typography sx={{
                                    margin: "20px -20px 0px 0px",
                                    padding: "20px 15px",
                                    background: "#f8f8f8",
                                }}>
                                    <Link href="#" sx={{
                                        background: "#3fbbc0",
                                        display: "inline-block",
                                        padding: "8px 35px 10px 35px",
                                        borderRadius: "4px",
                                        color: "#fff",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        transition: "0.3s",
                                        textDecoration: "none",
                                        "&:hover": {
                                            background: "#65c9cd"
                                        }
                                    }}>
                                        Buy Now
                                    </Link>
                                </Typography>
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item xl={2.6} lg={2.7} md={2.8} sm={5.4} xs={11}>
                        <Fade bottom>
                            <Box sx={{
                                paddingTop: "20px",
                                background: "#fff",
                                textAlign: "center",
                                boxShadow: "0px 0px 4px rgb(0 0 0 / 12%)",
                                borderRadius: "4px",
                                position: "relative",
                                overflow: "hidden",
                                width: "100%"
                            }}>
                                <Box variant="h3" sx={{
                                    margin: "-20px 0px 20px 0px",
                                    padding: "20px ",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    color: "#fff",
                                    background: "#3fbbc0",
                                    width: "100%"

                                }}>
                                    Business
                                </Box>
                                <Typography variant="h4" sx={{
                                    fontSize: "36px",
                                    color: "#3fbbc0",
                                    fontWeight: 800,
                                    marginBottom: "20px",
                                }}>
                                    <sup style={{ fontSize: "20px", top: "-15px", left: "-3px" }}>$</sup>
                                    19
                                    <span style={{ fontSize: "16px", color: "#bababa", fontWeight: "300" }}> / month</span>
                                </Typography>
                                {Princep2.map((val, index) => (
                                    <Typography sx={{
                                        textAlign: "center",
                                        lineHeight: "20px",
                                        fontSize: "14px",
                                        color: (val.color),
                                        paddingBottom: "16px",
                                        textDecoration: (val.in),
                                    }}>
                                        {val.text}
                                    </Typography>
                                ))}
                                <Typography sx={{
                                    margin: "20px -20px 0px 0px",
                                    padding: "20px 15px",
                                    background: "#f8f8f8",
                                }}>
                                    <Link href="#" sx={{
                                        background: "#3fbbc0",
                                        display: "inline-block",
                                        padding: "8px 35px 10px 35px",
                                        borderRadius: "4px",
                                        color: "#fff",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        transition: "0.3s",
                                        textDecoration: "none",
                                        "&:hover": {
                                            background: "#65c9cd"
                                        }
                                    }}>
                                        Buy Now
                                    </Link>
                                </Typography>
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item xl={2.6} lg={2.7} md={2.8} sm={5.4} xs={11}>
                        <Fade bottom>
                            <Box sx={{
                                paddingTop: "20px",
                                background: "#fff",
                                textAlign: "center",
                                boxShadow: "0px 0px 4px rgb(0 0 0 / 12%)",
                                borderRadius: "4px",
                                position: "relative",
                                overflow: "hidden",
                                width: "100%"
                            }}>
                                <Box variant="h3" sx={{
                                    margin: "-20px 0px 20px 0px",
                                    padding: "20px ",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    color: "#777777",
                                    background: "#f8f8f8",
                                    width: "100%"

                                }}>
                                    Developer
                                </Box>
                                <Typography variant="h4" sx={{
                                    fontSize: "36px",
                                    color: "#3fbbc0",
                                    fontWeight: 800,
                                    marginBottom: "20px",
                                }}>
                                    <sup style={{ fontSize: "20px", top: "-15px", left: "-3px" }}>$</sup>
                                    29
                                    <span style={{ fontSize: "16px", color: "#bababa", fontWeight: "300" }}> / month</span>
                                </Typography>
                                {Princep3.map((val, index) => (
                                    <Typography sx={{
                                        textAlign: "center",
                                        lineHeight: "20px",
                                        fontSize: "14px",
                                        color: (val.color),
                                        paddingBottom: "16px",
                                        textDecoration: (val.in),
                                    }}>
                                        {val.text}
                                    </Typography>
                                ))}
                                <Typography sx={{
                                    margin: "20px -20px 0px 0px",
                                    padding: "20px 15px",
                                    background: "#f8f8f8",
                                }}>
                                    <Link href="#" sx={{
                                        background: "#3fbbc0",
                                        display: "inline-block",
                                        padding: "8px 35px 10px 35px",
                                        borderRadius: "4px",
                                        color: "#fff",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        transition: "0.3s",
                                        textDecoration: "none",
                                        "&:hover": {
                                            background: "#65c9cd"
                                        }
                                    }}>
                                        Buy Now
                                    </Link>
                                </Typography>
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item xl={2.6} lg={2.7} md={2.8} sm={5.4} xs={11}>
                        <Fade bottom>
                            <Box sx={{
                                paddingTop: "20px",
                                background: "#fff",
                                textAlign: "center",
                                boxShadow: "0px 0px 4px rgb(0 0 0 / 12%)",
                                borderRadius: "4px",
                                position: "relative",
                                overflow: "hidden",
                                width: "100%"
                            }}>
                                <span style={{
                                    width: "200px",
                                    position: "absolute",
                                    top: "18px",
                                    right: "-68px",
                                    transform: "rotate(45deg)",
                                    zIndex: "1",
                                    fontSize: "14px",
                                    padding: "1px 0 3px 0",
                                    background: "#3fbbc0",
                                    color: "#fff",
                                }}>Advanced</span>
                                <Box variant="h3" sx={{
                                    margin: "-20px 0px 20px 0px",
                                    padding: "20px ",
                                    fontSize: "16px",
                                    fontWeight: 600,
                                    color: "#777777",
                                    background: "#f8f8f8",
                                    width: "100%"

                                }}>
                                    Ultimate
                                </Box>
                                <Typography variant="h4" sx={{
                                    fontSize: "36px",
                                    color: "#3fbbc0",
                                    fontWeight: 800,
                                    marginBottom: "20px",
                                }}>
                                    <sup style={{ fontSize: "20px", top: "-15px", left: "-3px" }}>$</sup>
                                    49
                                    <span style={{ fontSize: "16px", color: "#bababa", fontWeight: "300" }}> / month</span>
                                </Typography>
                                {Princep3.map((val, index) => (
                                    <Typography sx={{
                                        textAlign: "center",
                                        lineHeight: "20px",
                                        fontSize: "14px",
                                        color: (val.color),
                                        paddingBottom: "16px",
                                        textDecoration: (val.in),
                                    }}>
                                        {val.text}
                                    </Typography>
                                ))}
                                <Typography sx={{
                                    margin: "20px -20px 0px 0px",
                                    padding: "20px 15px",
                                    background: "#f8f8f8",
                                }}>
                                    <Link href="#" sx={{
                                        background: "#3fbbc0",
                                        display: "inline-block",
                                        padding: "8px 35px 10px 35px",
                                        borderRadius: "4px",
                                        color: "#fff",
                                        fontSize: "14px",
                                        fontWeight: 600,
                                        transition: "0.3s",
                                        textDecoration: "none",
                                        "&:hover": {
                                            background: "#65c9cd"
                                        }
                                    }}>
                                        Buy Now
                                    </Link>
                                </Typography>
                            </Box>
                        </Fade>
                    </Grid>

                </Grid>
            </Box>
            <Box id="faq" sx={{
                padding: "60px 0",
                overflow: "hidden",
                backgroundColor: "#f7fcfc",
            }}>
                <Grid container justifyContent="center" textAlign="start">
                    <Grid item xl={10.5} lg={12} md={11} sm={10.8} xs={11} spacing={0}>
                        <Fade bottom>
                            <Box sx={{ paddingBottom: "30px" }}>
                                <Box sx={{ justifyContent: "center", display: "flex", }}>
                                    <Typography sx={{
                                        fontSize: "32px ",
                                        fontWeight: "bold",
                                        textTransform: "uppercase",
                                        mb: "15px",
                                        position: "relative",

                                    }}>
                                        Frequently Asked Questioins
                                    </Typography>
                                </Box>
                                <Box sx={{ justifyContent: "center", display: "flex" }}>
                                    <Typography sx={{
                                        width: "50px",
                                        height: "3px",
                                        background: "#3fbbc0"
                                    }}></Typography>
                                </Box>
                                <Box>
                                    <Typography sx={{
                                        textAlign: "center",
                                        mt: "15px",
                                        color: "#000",
                                        color: "#3A3A3A"
                                    }}>
                                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem.
                                        Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                                        Quia fugiat sit in iste officiis commodi quidem hic quas.
                                    </Typography>
                                </Box>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>
                <Box>
                    <Grid container justifyContent="center" textAlign="start">
                        <Grid item xl={10.5} lg={12} md={11} sm={10.8} xs={11} spacing={0}>
                            <Fade bottom>
                                <CustomizedAccordions />
                            </Fade>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}
export default Doctors
