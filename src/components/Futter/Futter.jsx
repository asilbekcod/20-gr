import React from "react"
import { Box, Button, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Grid';
import { Futlink, Futtext, Futtext2 } from "../../assets/futter/futter";



function Futter() {
    return (
        <>
            <Box sx={{
                background: "#eeeeee",
                padding: "0 0 30px 0",
                color: "#555555",
                fontSize: "14px"
            }}>
                <Box sx={{
                    background: "#f6f6f6",
                    padding: "60px 0 30px 0",
                    marginBottom:"30px"
                }}>
                    <Grid container justifyContent="center" textAlign="start">
                        <Grid item xl={2.6} lg={2.7} md={2.8} sm={5.4} xs={11} spacing={0}>
                            <Box sx={{ marginBottom: "30px" }}>
                                <Typography variant="h3" sx={{
                                    fontSize: "24px",
                                    margin: "0 0 20px 0",
                                    padding: "2px 0 2px 0",
                                    lineHeight: 1,
                                    fontWeight: 700,
                                }}>
                                    Medicio
                                </Typography>
                                <Typography sx={{
                                    fontSize: "14px",
                                    lineHeight: "24px",
                                    marginBottom: "15px"
                                }}>
                                    A108 Adam Street <br />
                                    NY 535022, USA<br /><br />
                                    <strong>Phone:</strong> +1 5589 55488 55<br />
                                    <strong>Email:</strong> info@example.com<br />
                                </Typography>
                                <Grid container textAlign="start">
                                    {Futlink.map((val) => (
                                        <Grid item xl={1.6} lg={1.7} md={2} sm={1.5} xs={1.5} spacing={0} sx={{marginBottom:"30px"}}>
                                            <Link href="#" sx={{
                                                fontSize: "18px",
                                                display: "inline-block",
                                                background: "#3fbbc0",
                                                color: "#fff",
                                                lineHeight: 1,
                                                padding: "8px 0",
                                                marginRight: "4px",
                                                borderRadius: "4px",
                                                textAlign: "center",
                                                width: "36px",
                                                height: "36px",
                                                transition: "0.3s",
                                                "&:hover":{
                                                    background:"#65c9cd"
                                                }
                                            }}>
                                                {val.icon}
                                            </Link>
                                        </Grid>
                                    ))}
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xl={2} lg={2} md={2} sm={5.3} xs={11} spacing={0} sx={{marginBottom:"30px"}}>
                            <Typography variant="h4" sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                position: "relative",
                                paddingBottom: "12px",
                            }}>
                                Useful Links
                            </Typography>
                            {Futtext.map((val) => (
                                <Typography sx={{
                                    padding: "10px 0",
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                    <i style={{
                                        paddingRight: "5px",
                                        color: "#3fbbc0",
                                        fontSize: "13px",
                                        lineHeight: 1,
                                    }}>{val.icon}</i>
                                    <Link href="#" sx={{
                                        color: "#555555",
                                        transition: "0.3s",
                                        display: "inline-block",
                                        lineHeight: 1,
                                        textDecoration: "none",
                                        fontSize: "15px",
                                        "&:hover":{
                                            color:"#3fbbc0"
                                        }
                                    }}>
                                        {val.name}
                                    </Link>
                                </Typography>
                            ))}
                        </Grid>
                        <Grid item xl={2.4} lg={2.5} md={2.5} sm={5.4} xs={11} spacing={0}sx={{marginBottom:"30px"}}>
                            <Typography variant="h4" sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                position: "relative",
                                paddingBottom: "12px",
                            }}>
                                Our Services
                            </Typography>
                            {Futtext2.map((val) => (
                                <Typography sx={{
                                    padding: "10px 0",
                                    display: "flex",
                                    alignItems: "center",
                                }}>
                                    <i style={{
                                        paddingRight: "5px",
                                        color: "#3fbbc0",
                                        fontSize: "13px",
                                        lineHeight: 1,
                                    }}>{val.icon}</i>
                                    <Link href="#" sx={{
                                        color: "#555555",
                                        transition: "0.3s",
                                        display: "inline-block",
                                        lineHeight: 1,
                                        textDecoration: "none",
                                        fontSize: "15px",
                                        "&:hover":{
                                            color:"#3fbbc0"
                                        }
                                    }}>
                                        {val.name}
                                    </Link>
                                </Typography>
                            ))}
                        </Grid>
                        <Grid item xl={3.2} lg={3.2} md={3.5} sm={5.3} xs={11} sx={{marginBottom:"30px"}}>
                            <Typography variant="h4" sx={{
                                fontSize: "16px",
                                fontWeight: 600,
                                position: "relative",
                                paddingBottom: "18px",
                            }}>
                                Our Newsletter
                            </Typography>
                            <Typography sx={{
                                color: "#555555",
                                fontSize: "14px",
                            }}>
                            Tamen quem nulla quae legam multos aute sint culpa legam noster magna
                            </Typography>
                            <Typography sx={{
                                marginTop: "30px",
                                background: "#fff",
                                padding: "6px 10px",
                                position: "relative",
                                border: "1px solid #d5d5d5",
                                borderRadius: "4px"
                            }}>
                               <input type="email" name="email" style={{
                                border:"0",
                                padding:"4px",
                                width: "calc(100% - 110px)",
                                lineHeight: "inherit"
                               }}/>
                               <Link sx={{
                                position: "absolute",
                                top: "-1px",
                                right: "-1px",
                                bottom: "-1px",
                                border: 0,
                                background: "none",
                                fontSize: "16px",
                                padding: "8px 20px",
                                background: "#3fbbc0",
                                color: "#fff",
                                transition: "0.3s",
                                borderRadius: "0 4px 4px 0",
                                textDecoration:"none",
                                "&:hover":{
                                    background:"#65c9cd"
                                }
                               }}>
                                Subscribe
                               </Link>
                            </Typography>
                        </Grid>


                    </Grid>
                </Box>
                <Box sx={{textAlign:"center",paddingtop:"30px", }}>
                    <Typography sx={{fontSize: "14px",}}>
                    &copy; Copyright <strong><span>Medicio</span></strong>. All Rights Reserved
                    </Typography>
                    <Typography sx={{
                        paddingTop: "10px",
                        textAlign: "center",
                        fontSize: "13px",
                    }}>
                           Designed by
                            <Link href="#" sx={{
                            color: "#3fbbc0",
                            textDecoration: "none",
                            "&:hover":{
                                color:"#65c9cd"
                            }
                           }}>BootstrapMade</Link>
                    </Typography>
                </Box>
            </Box>
        </>
    )
}
export default Futter
