import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Accordian from "./components/accordian/Accordian";
import ProfileFinder from "./components/github-finder/ProfileFinder";
import ImageSlider from "./components/image-slider/ImageSlider";
import LoadMore from "./components/load-more/LoadMore";
import ModalTest from "./components/modal-popup/ModalTest";
import QrCode from "./components/qr-code/QrCode";
import RandomColor from "./components/random-color/RandomColor";
import Scroll from "./components/scroll/Scroll";
import StarRating from "./components/star-rating/StarRating";
import TabData from "./components/tabs/TabData";
import Theme from "./components/theme-switch/Theme";
import TicTacToe from "./components/tic-tac-toe/TicTacToe";
import TreeView from "./components/tree-view/TreeView";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accordian" element={<Accordian />} />
        <Route path="/profilefinder" element={<ProfileFinder />} />
        <Route path="/imageslider" element={<ImageSlider />} />
        <Route path="/loadmore" element={<LoadMore />} />
        <Route path="/modaltest" element={<ModalTest />} />
        <Route path="/qrcode" element={<QrCode />} />
        <Route path="/randomcolor" element={<RandomColor />} />
        <Route path="/scroll" element={<Scroll />} />
        <Route path="/starrating" element={<StarRating />} />
        <Route path="/tabdata" element={<TabData />} />
        <Route path="/theme" element={<Theme />} />
        <Route path="/tictactoe" element={<TicTacToe />} />
        <Route path="/treeview" element={<TreeView />} />
      </Routes>
    </Router>
  );
}

export default App;
