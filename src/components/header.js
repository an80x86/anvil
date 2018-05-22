import React, {Component} from 'react'

import Overlay from './overlay';
import Navbar from './navbar';
import LeftSideBar from './menu/leftsidebar';

import { connect } from 'react-redux';
import { menuListAll } from '../actions';
import { bindActionCreators } from 'redux';

class Header extends Component {
  componentWillMount() {
      this.props.menuListAll()
  }

  render() {
      return (
        <div>
          <Overlay />
          <Navbar />
          <section>
            <LeftSideBar menu={this.props.menus.menuList}/>
          </section>
        </div>
      )
  }
}

function mapStateToProps(state){
    return {
        menus:state.menus
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({menuListAll},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(Header)
