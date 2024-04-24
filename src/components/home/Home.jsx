import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'; 


const Home = () => {
  return (
    <>
    <div className="container">
      <h1 className="heading">Projects</h1>
      <ul className="list">
        <li className="listItem"><Link to="/accordian" className="link">Accordian</Link></li>
        <li className="listItem"><Link to="/profilefinder" className="link">Profile Finder</Link></li>
        <li className="listItem"><Link to="/imageslider" className="link">Image Slider</Link></li>
        <li className="listItem"><Link to="/loadmore" className="link">Load More</Link></li>
        <li className="listItem"><Link to="/modaltest" className="link">Modal Test</Link></li>
        <li className="listItem"><Link to="/qrcode" className="link">QR Code</Link></li>
        <li className="listItem"><Link to="/randomcolor" className="link">Random Color</Link></li>
        <li className="listItem"><Link to="/scroll" className="link">Scroll</Link></li>
        <li className="listItem"><Link to="/starrating" className="link">Star Rating</Link></li>
        <li className="listItem"><Link to="/tabdata" className="link">Tab Data</Link></li>
        <li className="listItem"><Link to="/theme" className="link">Theme</Link></li>
        <li className="listItem"><Link to="/tictactoe" className="link">Tic Tac Toe</Link></li>
        <li className="listItem"><Link to="/treeview" className="link">Tree View</Link></li>
      </ul>
    </div>
    </>
  );
};

export default Home;
