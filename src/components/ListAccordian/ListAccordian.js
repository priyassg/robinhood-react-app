import React from 'react';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { styled } from '@mui/material/styles';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import './ListAccordian.css';

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    '&:not(:last-child)': {
        borderBottom: 0,
    },
    '&:before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
        // expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor: 'black',
    color: 'white',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
        alignItems: 'center'
    }
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderBottom: '1px solid gray',
    backgroundColor: 'black',
    color: 'white'
}));

function ListAccordian() {

    const listDetails = [
        {
            title: 'Potential Buy',
            icon: <AutoAwesomeIcon />,
            stocks: ['apple', 'microsoft']

        },
        {
            title: 'Tech',
            icon: <AutoAwesomeIcon />,
            stocks: ['apple', 'microsoft']

        },
        {
            title: 'Crypto',
            icon: <AutoAwesomeIcon />,
            stocks: ['btc', 'eth']

        },
    ]


    return (
        <div className='list_accordian_container'>
            {listDetails.map((element) => {
                return (
                    <>
                        <Accordion>
                            <AccordionSummary>
                                <span className='list_icon'>{element.icon}</span>
                                <span className='list_name'>{element.title}</span>
                            </AccordionSummary>
                            <AccordionDetails>
                                {element.stocks.join(' ,')}
                            </AccordionDetails>
                        </Accordion>
                    </>
                )
            })}
        </div>
    )
}

export default ListAccordian