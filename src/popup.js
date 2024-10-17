import React, { useEffect, useState } from 'react';

const Popup = () => {
  const [clipboardData, setClipboardData] = useState('');

  const handlePaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setClipboardData(text);
    } catch (error) {
      console.error("Error reading clipboard: ", error);
    }
  };

  return (
    <div>
      <h1>Clipboard Extension</h1>
      <button onClick={handlePaste}>Paste from Clipboard</button>
      <p>Clipboard Data: {clipboardData}</p>
    </div>
  );
};

export default Popup;
