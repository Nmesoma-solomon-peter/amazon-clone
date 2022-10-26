import SearchIcon from '@mui/icons-material/Search';
import React from 'react';
import { countries } from 'country-flag-icons'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src='https://www.freepnglogos.com/uploads/amazon-png-logo-vector/large-images-amazon-png-logo-vector-7.png3ft3d1416935166817' alt='logo' />

            <div className='glow__container'>
                <div className='location__icon'> <LocationOnIcon /></div>
                <div className='glow__ingress'>
                    <span className='glow__ingressLine line1'>Deliver to</span>
                    <span className='glow__ingressLine line2'>Nigeria</span>
                </div>
            </div>

            <div className='locationdiv header__option '>


            </div>


            <div className='header__search '>
                <input type='text' name='header__searchInput' className='header__searchInput' />
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className="header__nav ">
                <div className='header__option header__optionh'>
                    <span className='header__optionLineone'> English </span>
                    <span className='header__optionLineTwo'>
                        <img
                            alt="United States"
                            src="http://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg" width="20px" />
                        <ArrowDropDownIcon />
                    </span>
                </div>

                <div className='header__option header__optionh'>
                    <span className='header__optionLineone'>Hello,sign in</span>
                    <span className='header__optionLineTwo account__andLIstSpan'>
                        <span>Account & Lists</span>
                        <span> <ArrowDropDownIcon /> </span>
                    </span>
                </div>

                <div className='header__option header__optionh'>
                    <span className='header__optionLineone'>Returns</span>
                    <span className='header__optionLineTwo'>
                        & Orders
                    </span>
                </div>


                <div className="header__optionBasket">
                <AddShoppingCartIcon fontSize="large" />
                <span className='header__optionLineTwo header__basketCount'>0</span>
                </div>

            </div>
        </div >
    )
}

export default Header