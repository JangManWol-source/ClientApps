import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg'
import { BoxArrowRight, GearFill } from "react-bootstrap-icons";
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render() {
    return (
      <header className='bg-light'>
        {true && <div id='sign_out' className='flex-grow position-absolute w-100 d-flex justify-content-end text-primary d-flex align-items-center'>
          <a className='m-1 text-decoration-none' href='#'>Sign-out</a>
          <BoxArrowRight /> </div>}

        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" container light>
          <a class="navbar-brand" href="#">
            <img src={logo} width="100" height="auto" class="d-inline-block align-top" alt="" />
          </a>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
            <ul className="navbar-nav flex-grow d-flex align-items-end">
              <NavItem>
                <NavLink tag={Link} className="text-primary" to="/">
                  <span className='item'>
                  ORGANIZATIONS
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-primary" to="/counter">
                  <span className='item'>
                  PEOPLE
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-primary" to="/fetch-data">
                  <span className='item'>
                  STUDIES
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-primary" to="/fetch-data">
                  <span className='item'>
                  REPORTS
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-primary text-nowrap" to="/fetch-data">
                  <span className='item'>
                  NETWORK ACTIVITY
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-primary" to="/fetch-data">
                  <span className='item'>
                  PROTOCOLS
                  </span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} id='sign_out_collapse' className="text-primary" to="/fetch-data">
                 <span className='item'>
                 Sign out
                 </span>
                 </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} className="text-primary" to="/fetch-data">
                 <span className='item'>
                 <GearFill />
                 </span>
                 </NavLink>
              </NavItem>
            </ul>
          </Collapse>

        </Navbar>
      </header>
    );
  }
}
