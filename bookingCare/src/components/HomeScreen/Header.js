import React from 'react';

import './Header.css';

const Header = () => {
  return (
    <div className="col-md-12">
        <div className='headerContainer'>
            <ul className="nav">
                <div id='logo'>
                    <li className="logo">
                        <a href="/" className="nav-link">
                        <i className="fa fa-bars"></i>
                        </a>
                    </li>
                    {/* <li className="nameLogo">
                        <a href="/" className="nav-link">
                        BookingCare
                        </a>
                    </li> */}
                    <img
                        src='https://bookingcare.vn/assets/icon/bookingcare-2020.svg'
                        alt='logoName'
                    />
                </div>
            </ul>
            <ul className="nav">
                <li className="nav-item">
                    <a className="nav-link">
                    Chuyên Khoa
                    <p>Tìm bác sĩ chuyên khoa</p>
                    </a>
                    
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                    Cơ sở y tế
                    <p>Chọn bệnh viện phòng khám</p></a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                    Bác sĩ
                    <p>Chọn bác sĩ giỏi</p></a>
                </li>
                <li className="nav-item">
                    <a href="/" className="nav-link">
                    Gói Khám
                   <p>Khám sức khỏe tổng quát</p></a>
                </li>
            </ul>
            <ul className="nav ml-auto ">
                <li className="nav-item">
                    <a href="/" className="nav-link">
                    Hỗ Trợ
                    <p>024-7301-2468</p></a>
                </li>
            </ul>
        </div>

      {/* <nav className="navbar py-3">
        
      </nav> */}
    </div>
  );
};
export default Header;