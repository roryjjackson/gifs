import React from 'react';
import {faSpinner} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loader = () => {
  return (
    <div>
      <FontAwesomeIcon icon={faSpinner} spin size="lg" />
    </div>
  )
};

export default Loader;
