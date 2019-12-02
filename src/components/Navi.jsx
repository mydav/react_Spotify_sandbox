import React from 'react'
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { faHome, faSearch, faBookmark } from '@fortawesome/free-solid-svg-icons'
import {Button} from 'reactstrap'
import { Link } from 'react-router-dom'
import '../index.css'


class Navi extends React.Component{
    state = {
        searchQuery: ''
    }
    search = (event) => {
        console.log(event.target.value)
    }
    render() {
        return (
        <SideNav className="sideNavi">
        <SideNav.Toggle />
            <SideNav.Nav defaultSelected="home">
                <NavItem eventKey="home">
                    <NavIcon>
                        <FontAwesomeIcon icon={faHome} style={{fontSize: "25px"}} /> 
                    </NavIcon>
                        <NavText>
                        <Link to="/">
                            Home
                        </Link>
                        </NavText>
                </NavItem>
                <NavItem eventKey="search">
                    <NavIcon>
                        <FontAwesomeIcon icon={faSearch} style={{fontSize: "25px"}} /> 
                    </NavIcon>
                    <NavText>
                        Search
                    </NavText>
                </NavItem>
                <NavItem eventKey="library">
                    <NavIcon>
                        <FontAwesomeIcon icon={faBookmark} style={{fontSize: "25px"}} /> 
                    </NavIcon>
                    <NavText>
                        Bookmarks
                    </NavText>
                </NavItem>
                    <NavItem eventKey="sign-in">
                        <NavIcon>
                        </NavIcon>
                        <NavText>
                            <Button outline id="sign-up-btn">Sign up</Button>
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="log-in">
                        <NavIcon>
                        </NavIcon>
                        <NavText>
                            <Button outline id="login-btn">Login</Button>
                        </NavText>
                    </NavItem>
            </SideNav.Nav>
        </SideNav>
        )
    }
}

export default Navi