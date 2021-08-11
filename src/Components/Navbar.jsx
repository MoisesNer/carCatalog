import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { GiRaceCar } from 'react-icons/gi';
import { GiCheckeredFlag } from 'react-icons/gi';


export default class Navbar extends Component {

    state = {
        isOpen: false
    }

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen })
    }

    render() {
        return (
            <nav className='navbar'>
                <div className="nav-center">
                    <div className="nav-header">
                        <Link to='/' alt='cars logo'>
                            <GiRaceCar className='checkered-logo' />
                        </Link>
                        <button type='button' className='nav-btn' onClick={this.handleToggle}>
                            <GiCheckeredFlag className='nav-icon' />
                        </button>
                    </div>
                </div>
                <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/cars'>Cars</Link></li>
                </ul>
            </nav>
        )
    }
}
