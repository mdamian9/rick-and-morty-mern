import React, { Component } from 'react';
import Logo from '../Logo/Logo';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

class UserNavbar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            collapseOpen: false
        };
    };

    toggleCollapse = () => {
        this.setState(prevState => ({
            collapseOpen: !prevState.collapseOpen
        }));
    };

    render = () => {
        return (
            <Navbar color='light' light expand='md'>
                <NavbarBrand href='/home' className='d-flex align-items-center'>
                    <Logo width='30px' height='30px' />&ensp;<b>Click and Morty!</b>
                </NavbarBrand>
                <NavbarToggler onClick={this.toggleCollapse} />
                <Collapse isOpen={this.state.collapseOpen} navbar>
                    <Nav className='ml-auto' navbar>
                        <NavItem>
                            <NavLink href='/home'>Home</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Menu
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    My Account
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem onClick={this.props.handleLogout}>
                                    Log Out
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    };

};

export default UserNavbar;
