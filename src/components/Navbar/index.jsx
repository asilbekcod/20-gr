import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { BsClock, BsPhone } from "react-icons/bs";
import Logo from "../../assets/img/logo.png"
import "./style.css"
import { Navbar } from '../../assets/Navbar/Navbar';
import Link from '@mui/material/Link';
import Modal from '@mui/material/Modal';
import { AiOutlineClose } from "react-icons/ai";
import Dropdown from 'react-bootstrap/Dropdown';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem'
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
    setAnchorElNav(null);
    setAnchorElUser(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const [height, setHeight] = useState(0);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setHeight(window.pageYOffset);
    })
    return () => window.removeEventListener('scroll', () => { })
  })

  return (
    <Box>
      <AppBar position="fixed" sx={{
        boxShadow: '0px 2px 15px rgb(0 0 0 / 10%)'
      }}>
        <Box sx={{
          display: "flex",
          background: "#3fbbc0",
          height: height > 40 ? '0px' : '40px',
          padding: { xl: "0px 110px", lg: "0px 80px", md: "0px 45px", sm: "0px 35px", xs: "0px" },
          textAlign: { xl: "start", lg: "start", md: "start", sm: "start", xs: "center" },
          width: "100%",
          justifyContent: { xl: "start", lg: "start", md: "start", sm: "start", xs: "center" },
          alignItems: "center",
          width: height > 40 ? '0px' : '100%'
        }}>
          <Box sx={{
            display: "flex",
            width: '100%',
            justifyContent: { xl: "start", lg: "start", md: "start", sm: "start", xs: "center" },
          }}>
            <Typography sx={{
              padding: '2px 5px 0px 0px',
              fontSize: "17px",
              color: "#fff",
            }}>
              <BsClock />
            </Typography>
            <Typography sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#fff",
            }}>
              Monday - Saturday, 8AM to 10PM
            </Typography>
          </Box>
          <Box sx={{
            display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none" },
            width: '100%',
            justifyContent: 'right'
          }}>
            <Typography sx={{
              padding: '2px 5px 0px 0px',
              fontSize: "17px",
              color: "#fff",
            }}>
              <BsPhone />
            </Typography>
            <Typography sx={{
              fontSize: "16px",
              fontWeight: "500",
              color: "#fff",
            }}>
              Call us now +1 5589 55488 55
            </Typography>
          </Box>
        </Box>
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{
            padding: { xl: "20px 110px", lg: "20px 80px", md: "0px 15px 0px 45px", sm: "15px 35px", xs: "15px 10px" },
            height: { xl: '80px', lg: '80px', md: '80px', sm: '70px', xs: '70px' },
            background: '#fff'
          }}>
            <Typography href="/" sx={{
              width: { xl: 'auto', lg: 'auto', md: 'auto', sm: '100%', xs: '100%' },
            }}>
              <img src={Logo} alt="" width={'150px'} height={"40px"} />
            </Typography>
            <Box sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'right',
              padding: '0px',
              alignItems: 'center'
            }}>
              {Navbar.map((val) => (
                <Box>
                  {
                    val.ok ?
                      <DropdownButton id="dropdown-basic-button" title="Drop Down">
                        <Dropdown.Item href="#" className='hovIch'>Drop Down 1</Dropdown.Item>
                        <Dropdown as={ButtonGroup}>
                          <Dropdown.Item className='hovIch2'>Deep Drop Down</Dropdown.Item>
                          <Dropdown.Toggle split id="dropdown-split-basic" />
                          <Dropdown.Menu>
                            <Dropdown.Item href="#" className='hovIch'>Drop Down 1</Dropdown.Item>
                            <Dropdown.Item href="#" className='hovIch'>Drop Down 2</Dropdown.Item>
                            <Dropdown.Item href="#" className='hovIch'>Drop Down 3</Dropdown.Item>
                            <Dropdown.Item href="#" className='hovIch'>Drop Down 4</Dropdown.Item>
                            <Dropdown.Item href="#" className='hovIch'>Drop Down 5</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown.Item href="#" className='hovIch'>Drop Down 2</Dropdown.Item>
                        <Dropdown.Item href="#" className='hovIch'>Drop Down 3</Dropdown.Item>
                        <Dropdown.Item href="#" className='hovIch'>Drop Down 4</Dropdown.Item>
                      </DropdownButton>
                      :
                      <Link className='hovnav' href={val.hr}
                        key={val}
                        onClick={handleCloseNavMenu}
                        sx={{
                          my: 2,
                          display: 'block',
                          fontSize: '13px',
                          padding: { xl: '10px 0 10px 30px', lg: '10px 0 10px 27px', md: '10px 0 10px 15px' },
                          color: '#626262',
                          textDecoration: 'none',
                          textTransform: 'uppercase',
                          fontWeight: '550',
                          fontFamily: '"Roboto", sans-serif'
                        }}
                      >
                        {val.NavYoz1}
                      </Link>
                  }
                </Box>
              ))}
            </Box>
            <Box sx={{
              display: 'flex',
              alignItems: 'center',
              width: { xl: 'auto', lg: 'auto', md: 'auto', sm: '100%', xs: '100%' },
              justifyContent: 'right'
            }}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'right',
              }}>
                <Button href='#make' sx={{
                  background: '#3fbbc0',
                  height: '37px',
                  padding: { xl: '8px 20px', lg: '8px 20px', md: '8px 10px !important', sm: '6px 12px', xs: '6px 12px' },
                  textTransform: 'none',
                  fontSize: '14px',
                  color: '#fff',
                  marginLeft: '20px',
                  display: 'flex',
                  '&:hover': {
                    background: '#3fbbc0',
                    color: '#fff',
                  }
                }}>
                  <Box sx={{
                    display: { xl: "flex", lg: "flex", md: "flex", sm: "flex", xs: "none" }
                  }}>Make an</Box>Appointment
                </Button>
              </Box>
              <Box sx={{
                display: { xs: 'flex', md: 'none' },
                justifyContent: 'right',
              }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenUserMenu}
                  color="black"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem>
                    <Box sx={{
                      background: 'rgba(60, 60, 60, 0.9)',
                      width: '100%',
                      minHeight: '100vh !important',
                      padding: '55px 15px 15px 15px'
                    }}>
                      <Box sx={{
                        width: 'calc(100%-30px)',
                        background: '#fff',
                        minHeight: '89vh !important',
                        borderRadius: '8px',
                        padding: '10px 0px',
                        overflow: 'scroll',
                      }}>
                        <Link onClick={handleCloseNavMenu}>
                          <Box sx={{
                            position: 'absolute',
                            color: '#fff',
                            justifyContent: 'right',
                            display: 'flex',
                            marginTop: '-45px',
                            fontSize: '25px',
                            marginLeft: { sm: '93%', xs: '87%' }
                          }}>
                            <AiOutlineClose />
                          </Box>
                        </Link>
                        {Navbar.map((val) => (
                          <Box>
                            {val.ok ?
                              <Box>
                                <Accordion>
                                  <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                  >
                                    <Typography sx={{
                                      width: '100%',
                                      display: 'block',
                                      fontSize: '15px',
                                      color: '#626262',
                                      textDecoration: 'none',
                                      textTransform: 'uppercase',
                                      fontWeight: '550',
                                      fontFamily: '"Roboto", sans-serif'
                                    }}>Drop Down</Typography>
                                  </AccordionSummary>
                                  <AccordionDetails>
                                    <Typography href="#" className='hovIch'>Drop Down 1</Typography>
                                    <Box id='it'>
                                      <Accordion>
                                        <AccordionSummary
                                          expandIcon={<ExpandMoreIcon />}
                                          aria-controls="panel1a-content"
                                          id="panel1a-header"
                                        >
                                          <Typography href="#" className='hovIch'>Deep Drop Down</Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                          <Typography href="#" className='hovIch'>Drop Down 1</Typography>
                                          <Typography href="#" className='hovIch'>Drop Down 2</Typography>
                                          <Typography href="#" className='hovIch'>Drop Down 3</Typography>
                                          <Typography href="#" className='hovIch'>Drop Down 4</Typography>
                                        </AccordionDetails>
                                      </Accordion>
                                    </Box>
                                    <Typography href="#" className='hovIch'>Drop Down 2</Typography>
                                    <Typography href="#" className='hovIch'>Drop Down 3</Typography>
                                    <Typography href="#" className='hovIch'>Drop Down 4</Typography>
                                  </AccordionDetails>
                                </Accordion>
                              </Box>
                              :
                              <Link className='hovnav' href={val.hr}
                                key={val}
                                onClick={handleCloseNavMenu}
                                sx={{
                                  width: '100%',
                                  display: 'block',
                                  fontSize: '15px',
                                  padding: '12px 20px',
                                  color: '#626262',
                                  textDecoration: 'none',
                                  textTransform: 'uppercase',
                                  fontWeight: '550',
                                  fontFamily: '"Roboto", sans-serif'
                                }}
                              >
                                {val.NavYoz1}
                              </Link>
                            }
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      {/* <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          background: 'rgba(60, 60, 60, 0.5)',
          width: '100%',
          height: '100%',
          padding: '55px 15px 15px 15px'
        }}
      >
        <Box sx={{
          width: 'calc(100%-30px)',
          background: '#fff',
          height: '100%',
          borderRadius: '8px',
          padding: '10px 0px',
          overflow: 'scroll',
        }}>
          <Link onClick={Ixs}>
            <Box sx={{
              position: 'absolute',
              color: '#fff',
              justifyContent: 'right',
              display: 'flex',
              marginTop: '-45px',
              fontSize: '25px',
              marginLeft: { sm: '93%', xs: '87%' }
            }}>
              <AiOutlineClose />
            </Box>
          </Link>
          {Navbar.map((val) => (
            <Box>
              {val.ok ?
                <Box id='mod' onClick={handleCloseNavMenu} >
                  <Accordion>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography sx={{
                        width: '100%',
                        display: 'block',
                        fontSize: '15px',
                        color: '#626262',
                        textDecoration: 'none',
                        textTransform: 'uppercase',
                        fontWeight: '550',
                        fontFamily: '"Roboto", sans-serif'
                      }}>Drop Down</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography href="#" className='hovIch'>Drop Down 1</Typography>
                      <Box id='it'>
                        <Accordion>
                          <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                          >
                            <Typography href="#" className='hovIch'>Deep Drop Down</Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                            <Typography href="#" className='hovIch'>Drop Down 1</Typography>
                            <Typography href="#" className='hovIch'>Drop Down 2</Typography>
                            <Typography href="#" className='hovIch'>Drop Down 3</Typography>
                            <Typography href="#" className='hovIch'>Drop Down 4</Typography>
                          </AccordionDetails>
                        </Accordion>
                      </Box>
                      <Typography href="#" className='hovIch'>Drop Down 2</Typography>
                      <Typography href="#" className='hovIch'>Drop Down 3</Typography>
                      <Typography href="#" className='hovIch'>Drop Down 4</Typography>
                    </AccordionDetails>
                  </Accordion>
                </Box>
                :
                <Link className='hovnav'  href={val.hr}
                  key={val}
                  onClick={handleCloseNavMenu}
                  sx={{
                    width: '100%',
                    display: 'block',
                    fontSize: '15px',
                    padding: '12px 20px',
                    color: '#626262',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    fontWeight: '550',
                    fontFamily: '"Roboto", sans-serif'
                  }}
                >
                  {val.NavYoz1}
                </Link>
              }
            </Box>
          ))}
        </Box>
      </Modal> */}
    </Box>
  );
}
export default ResponsiveAppBar;
