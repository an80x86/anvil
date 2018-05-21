import React from 'react';
import UserMenu from './usermenu';
import MenuCiz from './menuciz';
import Footer from './footer';

const LeftSideBar = (props) => {

  let menu = props.menu;

  return (
    <aside id="leftsidebar" className="sidebar">
       <UserMenu namesurname={'Mustafa Bayer'} username={'mustafa'}/>
        <MenuCiz menu={menu}/>
        <Footer />
    </aside>
  )

}

export default LeftSideBar;
