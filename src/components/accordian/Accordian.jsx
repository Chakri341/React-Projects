import React, { useState } from 'react';
import { data } from '../accordian/data.js';
import './accordian.css';


const Accordian = (id) => {
    const [selectedId, setSelectedId] = useState(null);
    const [multiSelect, setMultiSelect] = useState(false);
    const [multiple, setMultiple] = useState([]);

    const handleEnable = () => {
        setMultiSelect(!multiSelect);
    }
    const handleSingleClick = (id) => {
        setSelectedId(id === selectedId ? null : id);
    }
    const handleMultiselect = (id) => {
        let cpyMultiple = [...multiple];
        let findIdx = cpyMultiple.indexOf(id);

        if (findIdx == -1) {
            cpyMultiple.push(id);
        } else {
            cpyMultiple.splice(findIdx, 1);
        }
        setMultiple(cpyMultiple);
    }


    return (
        <>
            
                <button className='button enable' onClick={() => {
                    handleEnable()
                }}>{multiSelect ? "Enable  SingleSelect" : " Enable MultiSelect"}</button>
    
            {data && data.map((d) => {
                return (
                    <div key={d.id} className='question' onClick={() => { multiSelect ? handleMultiselect(d.id) : handleSingleClick(d.id) }} >
                        <div className='div-q'>
                            <h1 className='q'>{d.question}</h1>
                            <span className='plus'>➕</span>
                        </div>
                        {!multiSelect ?
                            selectedId === d.id && <h3 className='q '>{d.answer}</h3>
                            :
                            multiple.indexOf(d.id) != -1 && <h3 className='q '>{d.answer}</h3>
                        }
                    </div>
                )
            })}
        </>
    )
}

export default Accordian;