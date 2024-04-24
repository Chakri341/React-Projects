import React from 'react';
import menus from './data.js';
import Tree from './Tree.jsx';
import './treeview.css'


const TreeView = () => {

  return (
    <div className='tree-container'>
      <Tree treeData={menus}/>
    </div>
  );
};

export default TreeView;
