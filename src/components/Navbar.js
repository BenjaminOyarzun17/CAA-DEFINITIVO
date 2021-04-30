import React from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



class Navegacion extends React.Component{
    render(){
        
        return(
            <Navbar color='light' light expand ='sm'>
                <NavbarBrand href='/'>CAA DS MORUS</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavItem>
                        
                    </NavItem>

                </Nav>
            </Navbar>
        )
}
}
export default Navegacion;