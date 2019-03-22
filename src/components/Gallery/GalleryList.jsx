import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { compose, withProps, withHandlers } from 'recompose';
import { Link } from 'react-router-dom';

import Thumbnail from '../Shared/Thumbnail';

const enhance = compose(
  inject('store'),
  withProps(({ store: { userStore } }) => ({
    store: userStore,
  })),
  withHandlers({
    setCurrentAlbum: ({ store }) => (v) => {
      store.setCurrentAlbumId(v);
    },
  }),
  observer,
);

const GalleryList = ({ store, setCurrentAlbum }) => (
  <React.Fragment>
    {
      store.albums.map(({ id, photos }) => {
        const rout = `/album/${id}`;

        return (
          <Link to={{ pathname: rout }} key={id}>
            <Thumbnail onClick={() => setCurrentAlbum(id)} onKeyPress={() => console.log('press')}>
              <h2>Album {id}</h2>
              <img src={photos[0].thumbnailUrl} alt={photos[0].title} title={photos[0].title} />
            </Thumbnail>
          </Link>
        );
      })
    }
  </React.Fragment>
);

GalleryList.propTypes = {
  store: PropTypes.shape({
    albums: PropTypes.object.isRequired,
  }).isRequired,
  setCurrentAlbum: PropTypes.func.isRequired,
};

export default enhance(GalleryList);
