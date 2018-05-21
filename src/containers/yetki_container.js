import React, { Component } from 'react';

import { connect } from 'react-redux';
import { artistListAll,artistList } from '../actions';
import { bindActionCreators } from 'redux';

//import Search from '../components/search';
//import Artistlist from '../components/artistlist';

//import Loader from '../components/loader';
//import Overlay from '../components/overlay';
//import Navbar from '../components/navbar';

//import LeftSideBar from '../components/menu/leftsidebar';

class YetkiContainer extends Component {

    componentWillMount() {
        this.props.artistListAll()
    }


    getKeywords = (event) => {
        let key = event.target.value;
        this.props.artistList(key)
    }

    render(){
        //console.log(this.props);
        return (
            <div>
              <h1>Yetki İşlemleri</h1>
            </div>
        )
    }

}


function mapStateToProps(state){
    //console.log(state.menus.menuList);
    return {
        artists:state.artists
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({artistListAll,artistList},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(YetkiContainer)
