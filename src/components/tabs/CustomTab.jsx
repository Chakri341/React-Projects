import { useState } from "react";
import './tab.css';

const  CustomTab=({ tabsContent}) =>{

  const [currentTabIndex, setCurrentTabIndex] = useState(0);

  function handleOnClick(getCurrentIndex) {
    setCurrentTabIndex(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent?.map((tabItem, index) => (
          <div
            className={`tab-item ${currentTabIndex === index ? "active" : ""}`}
            onClick={() => handleOnClick(index)}
            key={tabItem.label}
          >
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content" style={{ color: "red" }}>
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}

export default CustomTab;