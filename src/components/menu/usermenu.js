import React from 'react';

const UserMenu = (props) => {

    return (
      <div className='user-info'>
          <div className='image'>
              <img src='../../images/user.png' width='48' height='48' alt='User' />
          </div>
          <div className='info-container'>
              <div className='name' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>{props.namesurname}</div>
              <div className='email'>user: {props.username}</div>
              <div className='btn-group user-helper-dropdown'>
                  <i className='material-icons' data-toggle='dropdown' aria-haspopup='true' aria-expanded='true'>keyboard_arrow_down</i>
                  <ul className='dropdown-menu pull-right'>
                      <li><a><i className='material-icons'>person</i>Profil</a></li>
                      <li role='seperator' className='divider'></li>
                      <li><a><i className='material-icons'>favorite</i>Favori İşlemler</a></li>
                      <li role='seperator' className='divider'></li>
                      <li><a><i className='material-icons'>input</i>Çıkış</a></li>
                  </ul>
              </div>
          </div>
      </div>
    )
}

export default UserMenu;
