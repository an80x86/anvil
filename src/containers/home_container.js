import React, { Component } from 'react';

import { connect } from 'react-redux';
import { artistListAll,artistList, menuListAll } from '../actions';
import { bindActionCreators } from 'redux';

import Search from '../components/search';
import Artistlist from '../components/artistlist';

class HomeContainer extends Component {

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

              <Search keywords={this.getKeywords}/>
              <Artistlist artists={this.props.artists.artistList}/>

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

export default connect(mapStateToProps,mapDispatchToProps)(HomeContainer)
