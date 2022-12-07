import { Box, Button, Grid, TextareaAutosize, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import { Input } from '../../assets/make'
import Fade from 'react-reveal/Fade';
import "../../Pages/Home/style.css"
function Make() {
    return (
        <Box sx={{ background: "#F7FCFC", padding: " 60px 0" }} id='make'>
            {/* <Container> */}
            <Fade bottom>
                <Box >
                    <Box sx={{ justifyContent: "center", display: "flex" }}>
                        <Typography sx={{ fontSize: "32px ", fontWeight: "bold", textTransform: "uppercase", mb: "15px", position: "relative" }}>
                            MAKE AN APPOINTMENT
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
                </Box>
            </Fade>
            <Box sx={{justifyContent:"center", width:"100%",display:"flex"}}>

                <Grid container rowSpacing={2} columnSpacing={2} sx={{ mt: "0.5%", justifyContent: "center" , width:{lg:"88%", md:"95%",sm:"90%", xs:"100%"}, display:"flex"}}>

                    <Grid item lg={4} md={4} sm={4} xs={12} justifyContent="center">
                        <Fade bottom>
                            <Box>
                                <input type="text" placeholder="Your Name" style={{ width: "100%", height: "35px", borderRadius: "0px", border: "1px solid grey", outline: "none", "&:focus": { borderColor: "#3fbbc0" } }} />
                            </Box>
                        </Fade>

                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <Fade bottom>
                            <Box>
                                <input type="text" placeholder="Your Email" style={{ width: "100%", height: "35px", borderRadius: "0px", border: "1px solid grey", outline: "none" }} />
                            </Box>
                        </Fade>

                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <Fade bottom>
                            <Box>
                                <input type="text" placeholder="Your Phone" style={{ width: "100%", height: "35px", borderRadius: "0px", border: "1px solid grey", outline: "none" }} />
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <Fade bottom>
                            <Box>
                                <input type="text" placeholder="Apportment Date" style={{ width: "100%", height: "35px", borderRadius: "0px", border: "1px solid grey", outline: "none" }} />
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <Fade bottom>
                            <Box>
                                <select class="form-select" aria-label="Default select example" style={{ width: "102%", height: "40px", borderRadius: "0px ", outline: "none" }}>
                                    <option selected>Select Department</option>
                                    <option value="1">Department 1</option>
                                    <option value="2">Department 2 </option>
                                    <option value="3">Department 3</option>
                                </select>
                            </Box>
                        </Fade>
                    </Grid>
                    <Grid item lg={4} md={4} sm={4} xs={12}>
                        <Fade bottom>
                            <Box>
                                <select class="form-select" aria-label="Default select example" style={{ width: "102%", height: "40px", borderRadius: "0px ", outline: "none" }}>
                                    <option selected>Select Doctor</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </Box>
                        </Fade>
                    </Grid>

                    <Grid item lg={12} md={12} sm={12} xs={12} >
                        <Fade bottom>
                            <textarea name="saa" id="" rows="7" style={{ width: "100%", outline: "none" }} placeholder="Messenge (Optional)"></textarea>

                            <Box sx={{ justifyContent: "center", display: "flex", mt: "2%" }}>
                                <Button href='#' sx={{ textTransform: "capitalize", fontSize: "16px", m: "10px 0 0", padding: "10px 35px", border: "2px solid white", borderRadius: "30px", color: "white", background: "#3fbbc0", fontWeight: "500", "&:hover": { background: "#3fbbc0", color: "white" } }}>
                                    Make an Make an Appointment
                                </Button>
                            </Box>
                        </Fade>
                    </Grid>
                </Grid>

            </Box>




            {/* </Container> */}

        </Box>
    )
}

export default Make