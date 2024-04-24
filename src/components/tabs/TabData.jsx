import CustomTab from "./CustomTab";
import "./tab.css";

const TabData=() =>{
  const tabs = [
    {
      label: "Tab 1",
      content: <h1>(1). This is content for Tab 1</h1>,
    },
    {
      label: "Tab 2",
      content: <h1> (2). This is content for Tab 2</h1>,
    },
    {
      label: "Tab 3",
      content: <h1>(3). This is content for Tab 3</h1>,
    },
  ];

  return <CustomTab tabsContent={tabs} />;
}

export default TabData;