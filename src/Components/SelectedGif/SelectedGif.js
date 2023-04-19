import React from 'react';
import './SelectedGif.css';

const SelectedGif = ({ selectedGif }) => {
  return (
    <div >
      {selectedGif && <img className="selected-gif" src={selectedGif.images.original.url} alt=""></img>}
    </div>
  );
}

export default SelectedGif;
