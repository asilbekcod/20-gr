import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react'
import ReactDOM from 'react-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "./style.css"
import Fade from 'react-reveal/Fade';
import rasm1 from "../../assets/img/departments-1.jpg"
import rasm2 from "../../assets/img/departments-2.jpg"
import rasm3 from "../../assets/img/departments-3.jpg"
import rasm4 from "../../assets/img/departments-4.jpg"
function Depart() {
    return (
        <Box id='depart'>
            {/* <Container> */}
            <div className="App">
                <Fade bottom>
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <Typography sx={{ fontSize: "32px ", fontWeight: "bold", textTransform: "uppercase", mb: "15px", position: "relative", marginTop: '60px' }}>
                            DEPARTMENTS
                        </Typography>
                    </Box>
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <Typography sx={{ width: "50px", height: "3px", background: "#3fbbc0" }}></Typography>
                    </Box>
                    <Box>
                        <Typography sx={{ textAlign: "center", m: { lg: "15px 60px", md: "15px 23.5px", sm: "15px 15px", xs: "15px 10px" }, color: "#000", color: "#3A3A3A" }}>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </Typography>
                    </Box>
                </Fade>
                <Box sx={{justifyContent:"center", display:"flex", width:"100%",}}>
                    <Tabs style={{ p: "40px 0", width:"90%"}}>
                        <Grid container spacing={2} sx={{ justifyContent: "center" }}>
                            <Grid item lg={4} md={4} sm={12} xs={12}>
                                <TabList style={{ width: "100%" }}>
                                    <Tab >
                                        <Box >
                                            <Typography sx={{ fontSize: "18px", fontWeight: "600", transition: ".3s", display: "flex",  m: "10px 0 0" }}>
                                                Cardiology
                                            </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "black" }}>
                                                Quis excepturi porro totam sint earum quo nulla perspiciatis eius.
                                            </Typography>
                                        </Box>
                                    </Tab>
                                    <Tab>
                                        <Box>
                                            <Typography sx={{ fontSize: "18px", fontWeight: "600", transition: ".3s", display: "flex", alignItems: "center", m: "10px 0 0" }}>
                                                Neurology
                                            </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "black" }}>
                                                Voluptas vel esse repudiandae quo excepturi.
                                            </Typography>
                                        </Box>
                                    </Tab>
                                    <Tab>
                                        <Box>

                                            <Typography sx={{ fontSize: "18px", fontWeight: "600", transition: ".3s", display: "flex", alignItems: "center", m: "10px 0 0" }}>
                                                Hepatology
                                            </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "black" }}>
                                                Velit veniam ipsa sit nihil blanditiis mollitia natus.
                                            </Typography>
                                        </Box>
                                    </Tab>
                                    <Tab>
                                        <Box>

                                            <Typography sx={{ fontSize: "18px", fontWeight: "600", transition: ".3s", display: "flex", alignItems: "center", m: "10px 0 0" }}>
                                                Pediatrics
                                            </Typography>
                                            <Typography sx={{ fontSize: "14px", color: "black" }}>
                                                Ratione hic sapiente nostrum doloremque illum nulla praesentium id
                                            </Typography>
                                        </Box>
                                    </Tab>

                                </TabList>
                            </Grid>
                            <Grid item lg={8} md={8} sm={12} xs={12} sx={{justifyContent:"center", display:"flex", width:"100%"}}>
                                <TabPanel >

                                    <Box className="panel-content" s={{width:"100%"}}>
                                        <Typography sx={{ fontSize: "26px", fontWeight: "600", mb: "20px", color: "#3fbbc0" }}>
                                            Cardiology
                                        </Typography>
                                        <Typography sx={{ color: "#777777", fontStyle: "italic", fontSize: "16px", m: "0 0 16px" }}>
                                            Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
                                        </Typography>
                                        <Box>
                                            <Grid container spacing={2} sx={{width:"100%"}}>
                                                <Grid item lg={4.3} md={6} sm={11} xs={12} sx={{width:"100%"}}>
                                                    <img src={rasm1} alt="" style={{ width: "100%" }} />
                                                </Grid>
                                                <Grid item lg={7.7} md={6}  sm={12} xs={12}>
                                                    <Typography sx={{ fontSize: "16px", color: "#777777" }}>
                                                        Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>

                                </TabPanel>

                                <TabPanel>
                                    <Box className="panel-content">
                                        <Typography sx={{ fontSize: "26px", fontWeight: "600", mb: "20px", color: "#3fbbc0" }}>
                                            Neurology
                                        </Typography>
                                        <Typography sx={{ color: "#777777", fontStyle: "italic", fontSize: "16px", m: "0 0 16px" }}>
                                            Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
                                        </Typography>
                                        <Box>
                                            <Grid container spacing={2}>
                                                <Grid item lg={4.3} md={6} sm={11} xs={12} >
                                                    <img src={rasm2} alt="" style={{ width: "100%", height: "100%" }} />
                                                </Grid>
                                                <Grid item  lg={7.7} md={6}  sm={12} xs={12} >
                                                    <Typography sx={{ fontSize: "16px", color: "#777777", width: "100%" }}>
                                                        Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box className="panel-content">
                                        <Typography sx={{ fontSize: "26px", fontWeight: "600", mb: "20px", color: "#3fbbc0" }}>
                                            Hepatology
                                        </Typography>
                                        <Typography sx={{ color: "#777777", fontStyle: "italic", fontSize: "16px", m: "0 0 16px" }}>
                                            Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
                                        </Typography>
                                        <Box>
                                            <Grid container spacing={2}>
                                                <Grid item lg={4.3} md={6} sm={11} xs={12} >
                                                    <img src={rasm3} alt="" style={{ width: "100%" }} />
                                                </Grid>
                                                <Grid item  lg={7.7} md={6}  sm={12} xs={12}>
                                                    <Typography sx={{ fontSize: "16px", color: "#777777" }}>
                                                        Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </TabPanel>
                                <TabPanel>
                                    <Box className="panel-content">
                                        <Typography sx={{ fontSize: "26px", fontWeight: "600", mb: "20px", color: "#3fbbc0" }}>
                                            Pediatrics
                                        </Typography>
                                        <Typography sx={{ color: "#777777", fontStyle: "italic", fontSize: "16px", m: "0 0 16px" }}>
                                            Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka
                                        </Typography>
                                        <Box>
                                            <Grid container spacing={2}>
                                                <Grid item lg={4.3} md={6} sm={11} xs={12} >
                                                    <img src={rasm4} alt="" style={{ width: "100%" }} />
                                                </Grid>
                                                <Grid item  lg={7.7} md={6}  sm={12} xs={12}>
                                                    <Typography sx={{ fontSize: "16px", color: "#777777" }}>
                                                        Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Box>
                                </TabPanel>

                            </Grid>

                        </Grid>


                    </Tabs>
                </Box>
            </div>
            {/* </Container> */}
        </Box >


    )
}

export default Depart