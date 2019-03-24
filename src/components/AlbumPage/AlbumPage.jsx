import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import AlbumPageContent from './AlbumContent/AlbumPageContent';
import Button from '../Shared/Button';

import styles from './styles';

const AlbumPage = ({ store, classes }) => (
  <React.Fragment>
    <div className={classes.AlbumPage}>
      <h2 className={classes.AlbumPageTitle}>Album { store.currentAlbumId }</h2>
      {
        store.albums.map(item => (
          item.photos.map(props => (
            <AlbumPageContent
              {...props}
              key={props.id}
              itemId={item.id}
              currentAlbumId={store.currentAlbumId}
            />
          ))
        ))
      }
    </div>
    <Link to="/"><Button>Back</Button></Link>
  </React.Fragment>
);

AlbumPage.propTypes = {
  store: PropTypes.instanceOf(Object).isRequired,
  classes: PropTypes.instanceOf(Object).isRequired,
};

export default injectSheet(styles)(AlbumPage);
