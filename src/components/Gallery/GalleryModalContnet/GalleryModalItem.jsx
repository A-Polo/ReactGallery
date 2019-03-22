import React from 'react';
import PropTypes from 'prop-types';

const GalleryModalItem = ({ title, id, url }) => (
  <div>
    <h2>{title}</h2>
    <img key={id} src={url} alt={title} title={title} />
  </div>
);

GalleryModalItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default GalleryModalItem;
