import * as React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.SFC<NavbarProps> = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-danger">
            <span className="navbar-brand">Luke's Blog</span>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link mx-1">All Blogs</Link>
                    <Link to='/admin' className="nav-item nav-link mx-1">Admin</Link>
                </div>
            </div>
        </nav>
    );
}

interface NavbarProps { }

export default Navbar;