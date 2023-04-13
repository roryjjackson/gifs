import React from 'react';

const SelectedGif = ({ selectedGif }) => {
  return (
    <div className="selected-gif">
      {selectedGif && <img src={selectedGif.images.original.url} alt=""></img>}
    </div>
  );
}

export default SelectedGif;
