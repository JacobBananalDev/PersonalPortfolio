import React from 'react';
import PortfolioLogo from '../../icons/JB_logo_transparentBg.png';

const NavBar = () => {
    return (
        <div className='flex flex-row w-full items-center justify-between shadow-2xl'>

            <div className='flex flex-row'>
                <img src={PortfolioLogo} height={60} width={60} />
            </div>

            <nav className='flex flex-row mr-2'>
                <ul className='flex flex-row items-center gap-4'>
                    <li className='mr-4'><a href='#'>Home</a></li>
                    <li className='mr-4'><a href='#'>About</a></li>
                    <li className='mr-4'><a href='#'>Projects</a></li>
                    <li className='mr-4'><a href='#'>Contact</a></li>
                </ul>
                <button className='bg-pink-500 p-2 rounded-lg'>Resume</button>
            </nav>

        </div>
    )
}

export default NavBar;
