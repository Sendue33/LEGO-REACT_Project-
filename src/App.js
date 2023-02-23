import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';

function App() {

  const [showNav, setShowNav] = useState(true)

  return <div className={`body-area${showNav ? ' body-pd' : ''}`}>
    <header className={`header${showNav ? ' body-pd' : ''}`}>
      <div className="header_toggle">
        <i
          className={`bi ${showNav ? 'bi-x' : 'bi-list'}`}
          onClick={() => setShowNav(!showNav)} />
      </div>
      <div className="header_img">
        <img src="images/head.png"/>
      </div>
    </header>
    <div className={`l-navbar${showNav ? ' show' : ''}`}>
      <nav className="nav">
        <div>
          <a href="" target="_blank" className="nav_logo">
            <img src="bi bi-apple" /> <span className="nav_logo-name"></span>
          </a>
          <div className="nav_list">
            <a href="" target="_blank" className="nav_link">
              <i className='bi bi-bookmark-check' /><span className="nav_name">게시판</span>
            </a>
            <a href="" target="_blank" className="nav_link">
              <i className='bi bi-clipboard-check' /><span className="nav_name">결재</span>
            </a>
            <a href="" target="_blank" className="nav_link">
              <i className='bi bi-database-exclamation' /><span className="nav_name">관리</span>
            </a>
            <a href="" target="_blank" className="nav_link">
              <i className='bi bi-calendar-check nav_icon' /><span className="nav_name">스케줄</span>
            </a>
            <a href="" target="_blank" className="nav_link">
              <i className='bi bi-command' /><span className="nav_name">조직도</span>
            </a>
            <a href="" target="_blank" className="nav_link">
              <i className='bi bi-person-plus' /><span className="nav_name">마이페이지</span>
            </a>
            <a href="" target="_blank" className="nav_link">
              <i className='bi bi-people' /><span className="nav_name">인사</span>
            </a>
          </div>
        </div>
      </nav>
    </div>
    <div>
       <h1>여기다가 작성할꺼야 :)</h1>
    </div>
  </div>
}

export default App;