import * as React from 'react';
import { styled } from '@mui/material/styles';
// import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Acar } from '../../assets/acardion/acardion';
import { Box } from '@mui/system';
import { TfiAngleUp } from 'react-icons/tfi';
import "./style.css"

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  borderBottom: `1px solid #d9f1f2`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary sx={{'&:hover':{
    color:"#3fbbc0"
  }}} 
    expandIcon={<TfiAngleUp sx={{ fontSize: '0.8rem', }} className="icon"/>}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === '#f7fcfc'
      ? 'rgba(255, 255, 255, .05)'
      : '#f7fcfc',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(180deg)',
    color:"#3fbbc0"
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '0px solid #d9f1f2',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
       {Acar.map((val)=>(
        <Box>
      <Accordion  onChange={handleChange('panel1')} >      
        <AccordionSummary id="dd">
          <Typography sx={{
            fontSize:"17px",
            lineHeight:"24px",
            fontWeight:400,
        }}>{val.name}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{backgroundColor:(val.bg),}}>
          <Typography sx={{padding:"0px 0 0 25px"}}>
            {val.text}
          </Typography>
        </AccordionDetails>          
      </Accordion> 
      </Box>
       ))}
  
    </div>
  );
}