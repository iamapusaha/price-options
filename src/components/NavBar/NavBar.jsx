
// import PropTypes from 'prop-types';
import { RiMenu2Line } from 'react-icons/ri';
import { GrClose } from 'react-icons/gr';
import Link from './Link/Link';
import { useState } from 'react';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '/products/:id', name: 'Product Detail' }
    ];

    return (
        <nav className='' >
            <div onClick={() => setOpen(!open)} className='text-3xl md:hidden'>
                {
                    open === true ? <GrClose></GrClose> : <RiMenu2Line></RiMenu2Line>
                }
            </div>
            <ul className={`${open ? 'top-8' : '-top-96'} md:flex gap-8 bg-blue-400 absolute md:static duration-1000`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
            <h1>hello</h1>
        </nav>
    );
};

NavBar.propTypes = {

};

export default NavBar;