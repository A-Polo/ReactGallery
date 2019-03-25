import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import styles from '../styles';

const GalleryModalItem = ({
  title, id, url, classes,
}) => (
  <div className={classes.GalleryModalItem}>
    <h2>{title}</h2>
    <img key={id} src={url} alt={title} title={title} />
  </div>
);

GalleryModalItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default injectSheet(styles)(GalleryModalItem);
