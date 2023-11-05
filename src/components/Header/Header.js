import React from 'react';
import RobinhoodLogo from '../../robinhood.svg';
import './header.css';
import SearchIcon from '@mui/icons-material/Search';

export default function Header() {
    return (
        <div className='header_wrapper'>
            {/* Logo */}
            <div className='robinhood_logo'>
                <img src={RobinhoodLogo}></img>
            </div>
            {/* Search */}
            <div className='search_container'>
                {/* Search Icon */}
                <SearchIcon color="primary" />
                <input type='text'></input>
            </div>

            <div className='menu_items'>
                <a href='#'>Free Stocks</a>
                <a href='#'>Portfolio</a>
                <a href='#'>Cash</a>
                <a href='#'>Messages</a>
            </div>

        </div>
    )
}