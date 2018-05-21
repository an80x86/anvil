import React, { Component } from 'react';

import { connect } from 'react-redux';
import { artistListAll,artistList, menuListAll } from '../actions';
import { bindActionCreators } from 'redux';

//import Search from '../components/search';
//import Artistlist from '../components/artistlist';

//import Loader from '../components/loader';
import Overlay from '../components/overlay';
import Navbar from '../components/navbar';

import LeftSideBar from '../components/menu/leftsidebar';

class CrmFormContainer extends Component {

    componentWillMount() {
        this.props.menuListAll()
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

                <Overlay />
                <Navbar />
                <section>
                  <LeftSideBar menus={this.props.menus.menuList} />
                  <section className="content">
                    <div className="container-fluid">

                      <h1>Crm Form İşlemleri</h1>

                    </div>
                  </section>
                </section>
            </div>
        )
    }

}


function mapStateToProps(state){
    //console.log(state.menus.menuList);
    return {
        artists:state.artists,
        menus:state.menus
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({artistListAll,artistList,menuListAll},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(CrmFormContainer)
