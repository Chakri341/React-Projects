import React, { useState } from 'react'
import Tree from './Tree';

const SubTree = ({ node }) => {
    const { children, label } = node;
    const [expand, setExpand] = useState(false);

    const handleClick = () => {
        setExpand(!expand);
    };

    return (
        <div className=''>
            <div onClick={handleClick} style={{ marginBottom:"10px" }}>
                <h1 style={{ paddingLeft:"10px"}} >{label}<span>{expand?"➖":"➕"}</span></h1>
            </div>
            <ul style={{ paddingLeft:"10px", borderLeft: "1px solid black", marginLeft:"40px" }}>
                {expand && <Tree treeData={children} />}
            </ul>
        </div>
    );
}
export default SubTree;

