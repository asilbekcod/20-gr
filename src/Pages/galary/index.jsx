import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Carousel from "react-elastic-carousel";
import { Gala } from '../../assets/galarymap';
import '../Home/style.css'

function Galary() {


    const breakPoints = [
        { width: 100, itemsToShow: 1, showArrows: false },
        { width: 550, itemsToShow: 3, showArrows: false },
        { width: 768, itemsToShow: 5, showArrows: false },
        { width: 1024, itemsToShow: 5, showArrows: false },


    ];
    return (
        <Box sx={{ p: "60px 0" }}>
            {/* <Container> */}
            <Box>
                <Box sx={{ justifyContent: "center", display: "flex" }}>
                    <Typography sx={{ fontSize: "32px ", fontWeight: "bold", textTransform: "uppercase", mb: "15px", position: "relative" }}>
                        GALLARY
                    </Typography>
                </Box>
                <Box sx={{ justifyContent: "center", display: "flex" }}>
                    <Typography sx={{ width: "50px", height: "3px", background: "#3fbbc0" }}></Typography>
                </Box>
                <Box>
                    <Typography sx={{ textAlign: "center", m: { lg: "15px 60px", md: "15px 23.5px", sm: "15px 15px", xs: "15px 10px" }, color: "#000", color: "#3A3A3A", mb: "20px" }}>
                        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
                    </Typography>
                </Box>

                <Box sx={{width:"100%", justifyContent:"center", display:"flex"}}>
                    <Grid container spacing={2} justifyContent="center"  sx={{width:{lg:"88%", md:"95%",sm:"93%", xs:"100%"}}} >
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <Carousel breakPoints={breakPoints} enableAutoPlay={true} autoPlaySpeed={3500}  >
                                {Gala.map((v) => (
                                    <Box sx={{ mt: "15%", }}>
                                        <img src={v.rasm} alt="" style={{ width: "100%", height: "100%", borderRadius: "6px solid #3fbbc0", padding: "4px", }} />
                                    </Box>

                                ))}
                            </Carousel>
                        </Grid>
                    </Grid>
                </Box>


            </Box>

            {/* </Container> */}

        </Box>

    )
}

export default Galary