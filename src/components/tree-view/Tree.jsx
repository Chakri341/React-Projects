import React, { useState } from "react";
import SubTree from "./SubTree";
import "./treeview.css";

const Tree = ({ treeData }) => {
  return (
    <div className="tree">
      <ul>
        {treeData?.map((node) => (
          <SubTree node={node} key={node.key} />
        ))}
      </ul>
    </div>
  );
};

export default Tree;


