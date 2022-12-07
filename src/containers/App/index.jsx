import { Box } from '@mui/material'
import React from 'react'
import Router from '../../routes/routes'
import Navbar from '../../components/Navbar/index'
import Futter from '../../components/Futter/Futter'
import Strelka from '../../components/Sitrel/Strelka';

export default function App() {
  return (
    <Box>
      <Box>
        <Navbar />
      </Box>
      <Router />
      <Futter />
      <Strelka />
    </Box>


  )
}