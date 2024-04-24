import React, { useRef, useState } from 'react';
import QRCode from 'react-qr-code';
import './qr.css'; 

const QrCode = () => {
  const textRef = useRef('');
  const [qrValue, setQrValue] = useState(''); 

  const handleGenerate = () => {
    setQrValue(textRef.current.value); 
  };

  return (
    <div className='cont'>
      <div className='sub-cont'>
        <input
          type="text"
          name="text"
          placeholder='Enter Your Value'
          className='input'
          id="text"
          ref={textRef}
        />
        <button className='btn-btn' onClick={handleGenerate}>
          Generate
        </button>
      </div>
      <div className='qr-scanner'>
        {qrValue && ( 
          <QRCode
            size={279}
            value={qrValue}
            viewBox={`0 0 256 256`}
          />
        )}
      </div>
    </div>
  );
};

export default QrCode;
