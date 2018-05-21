import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/home';
import Artist from './components/artist';
import Kullanici from './components/kullanici';
import Modul from './components/modul';
import Rol from './components/rol';
import Yetki from './components/yetki';

import CrmForm from './components/crmform';
import FormIsl from './components/formisl';
import Hedef from './components/hedef';

import NotFound from './components/notfound.js';

//import Loader from '../components/loader';
import Overlay from './components/overlay';
import Navbar from './components/navbar';
import LeftSideBar from './components/menu/leftsidebar';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { menuListAll } from './actions';


class Routes extends Component {
  componentWillMount() {
      this.props.menuListAll()
  }

  render() {



    return(
        <div>
          <Overlay />
          <Navbar />
          <section>
            <LeftSideBar menu={this.props.menus.menuList}/>
            <section className="content">
              <div className="container-fluid">
                <Switch>
                    <Route path="/" exact component={Kullanici}/>

                    <Route path="/kullanici" exact component={Kullanici}/>
                    <Route path="/modul" exact component={Modul}/>
                    <Route path="/rol" exact component={Rol}/>
                    <Route path="/yetki" exact component={Yetki}/>

                    <Route path="/crmform" exact component={CrmForm}/>
                    <Route path="/form" exact component={FormIsl}/>
                    <Route path="/hedef" exact component={Hedef}/>

                    <Route path="/artist/:id" exact component={Artist}/>

                    <Route path="*" component={NotFound}/>
                </Switch>
              </div>
            </section>
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

export default connect(mapStateToProps,mapDispatchToProps)(Routes)
//export default Routes;
