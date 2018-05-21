import React from 'react';

const Bilgi = () => {

    return (
        <div>
          <li className="header">BİLGİ</li>
          <li>
              <a>
                  <i className="material-icons col-red">donut_large</i>
                  <span>Önemli</span>
              </a>
          </li>
          <li>
              <a>
                  <i className="material-icons col-amber">donut_large</i>
                  <span>Dikkat</span>
              </a>
          </li>
          <li>
              <a>
                  <i className="material-icons col-light-blue">donut_large</i>
                  <span>Bilgi</span>
              </a>
          </li>
        </div>
    )
}

export default Bilgi;
