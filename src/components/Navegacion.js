import React from 'react';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';



class Navegacion extends React.Component{
    render(){
        
        return(
            <Navbar color='light' light expand ='sm'>
                <NavbarBrand href='/'>CAA DS MORUS</NavbarBrand>
                <Nav>
                    <NavItem>
                        <NavLink href="/noticias">Noticias</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="/about">Sobre Nosotros</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        )
}
}
export default Navegacion;