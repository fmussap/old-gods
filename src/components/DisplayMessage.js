import React from 'react';
import PropTypes from 'prop-types';
import capitalizeFirstLetter from 'Utils/capitalizeFirstLetter';

const DisplayMessage = ({ message }) => {
  const capitalMessage = capitalizeFirstLetter(message);
  return (
    <div className="error-message">
      {capitalMessage}
    </div>
  );
};

DisplayMessage.propTypes = {
  message: PropTypes.string.isRequired
};

export default DisplayMessage;
