import React, { Component } from 'react';

import { connect } from 'react-redux';
import { userListAll } from '../actions';
import { bindActionCreators } from 'redux';

//import Search from '../components/search';
//import Artistlist from '../components/artistlist';

//import Loader from '../components/loader';
//import Overlay from '../components/overlay';
//import Navbar from '../components/navbar';

//import LeftSideBar from '../components/menu/leftsidebar';

class KullaniciContainer extends Component {

    componentWillMount() {
        this.props.userListAll()
    }

    componentWillUnmount() {
      console.log("exits");
    }

    kullaniciCiz(users) {
      return (
        <ul>
          {users.map((e,i) => <li key={i}>{e.email}</li>)}
        </ul>
      )
    }

    render(){
        return (
            <div>
              <h1>Kullanıcı İşlemlerixxx</h1>
              {this.props.users ? this.kullaniciCiz(this.props.users) : null}
            </div>
        )
    }

}


function mapStateToProps(state){
    return {
        users:state.users.userList
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({userListAll},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(KullaniciContainer)
