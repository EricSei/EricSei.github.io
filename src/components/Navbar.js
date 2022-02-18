import React, { useState } from "react";
import { Image, Menu, Sidebar, Responsive,Segment, Input, Icon } from "semantic-ui-react";
import { Link, useHistory} from "react-router-dom";

const NavBar = () => {
  
  const [activeItem, setActiveItem] = useState(null);
  const history = useHistory();

  const handleItemClick = (e, { name }) => {
    setActiveItem(name);
  };

    return(
      <Segment
        textAlign='center'
        style={{ minHeight: 50, padding: '0em 0em' }}
        vertical
        inverted
      >
      <Menu style={{ minHeight: 50, padding: '1em 0em' }} stackable inverted >
        <Menu.Item
          as={Link} 
          to={"/"}
          name="Eric Sei"
          active={activeItem === "Eric Sei"}
          fixed="top" color="teal" sticky inverted> Eric Sei </Menu.Item>
        
        <Menu.Menu position='right'>
        <Menu.Item
              as={Link}
              to={"/projects"}
              name='projects'
              active={activeItem === 'projects'}
              onClick={handleItemClick}
            />
            <Menu.Item
              as={Link}
              to={"/skills"}
              name='skills'
              active={activeItem === 'skills'}
              onClick={handleItemClick}
            />
        </Menu.Menu>
      </Menu>
      </Segment>
  )
}

export default NavBar;