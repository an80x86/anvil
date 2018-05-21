import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home'
import Roster from './roster'
import Schedule from './schedule'

import Kullanici from './kullanici'
import Yetki from './yetki'
import Rol from './rol'
import Modul from './modul'


// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = () => (
  <section className="content">
    <div className="container-fluid">
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/kullanici' component={Kullanici}/>
          <Route path='/rol' component={Rol}/>
          <Route path='/yetki' component={Yetki}/>
          <Route path='/modul' component={Modul}/>
          <Route path='/roster' component={Roster}/>
          <Route path='/schedule' component={Schedule}/>
        </Switch>
      </main>
    </div>
  </section>
)

export default Main
