import React from 'react';

const Login = () =>{
    return (
      <div className="login-page">
        <div className="login-box">
            <div className="logo">
                <a>Uyumsoft</a>
                <small>Otomasyon Sistemi v2</small>
            </div>
            <div className="card">
                <div className="body">
                    <form id="sign_in" method="POST">
                        <div className="msg">Lütfen giriş yapınız</div>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="material-icons">person</i>
                            </span>
                            <div className="form-line">
                                <input type="text" className="form-control" name="username" placeholder="Kullanıcı" />
                            </div>
                        </div>
                        <div className="input-group">
                            <span className="input-group-addon">
                                <i className="material-icons">lock</i>
                            </span>
                            <div className="form-line">
                                <input type="password" className="form-control" name="password" placeholder="Şifre" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-4">
                                <button className="btn btn-block bg-pink waves-effect" type="submit">Giriş</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
      </div>
    )
}

export default Login;
