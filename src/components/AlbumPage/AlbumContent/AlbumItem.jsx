import React from 'react';
import PropTypes from 'prop-types';
import { inject, observer } from 'mobx-react';
import { compose, withHandlers, withProps } from 'recompose';
import Thumbnail from '../../Shared/Thumbnail';

const enhance = compose(
  inject('store'),
  withProps(({ store: { userStore } }) => ({
    store: userStore,
  })),
  withHandlers({
    openModal: ({ store }) => (v) => {
      store.openModal(v);
    },
  }),
  observer,
);

const AlbumItem = ({
  id, thumbnailUrl, title, openModal,
}) => (
  <Thumbnail key={id} onClick={() => openModal(id)} onKeyPress={() => console.info('press')}>
    <h2>Photo {id}</h2>
    <img src={thumbnailUrl} alt={title} title={title} />
  </Thumbnail>
);

AlbumItem.propTypes = {
  id: PropTypes.number.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
};

export default enhance(AlbumItem);
