import React from 'react';
import ListAccordian from '../ListAccordian/ListAccordian';
import './Stats.css';
import AddIcon from '@mui/icons-material/Add';

function Stats() {
    return (
        <div className='stats'>
            <div className='list-button'>
                <span>List</span>
                <button onClick={() => { }}>
                <AddIcon />
                </button>
            </div>
            <ListAccordian />
        </div>
    )
}


export default Stats