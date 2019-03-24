import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { compose, withProps, withHandlers, lifecycle } from 'recompose';
import Modal from 'react-modal';
import injectSheet from 'react-jss';
import styles from './styles';

import GalleryList from './GalleryList';
import GalleryModalContent from './GalleryModalContnet';
import AlbumPage from '../AlbumPage';

const enhance = compose(
  inject('store'),
  withProps(({ store: { userStore }, location }) => ({
    store: userStore,
    previousLocation: location,
  })),
  withHandlers({
    closeModal: ({ store }) => () => {
      store.closeModal();
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.store.getPhotos();
      Modal.setAppElement('#app');
    },
  }),
  observer,
);

const GalleyContent = ({
  classes, store, location, closeModal,
}) => (
  <div className={classes.GalleryContainer}>
    <Switch>
      <Route exact path="/" component={GalleryList} />
      <Route path={location.pathname} render={props => <AlbumPage {...props} store={store} />} />
    </Switch>
    <Modal isOpen={store.isOpen} onRequestClose={closeModal}>
      <div onClick={closeModal} onKeyPress={() => console.info('press')} role="button" tabIndex="0">Close</div>
      {
        store.albums.map(item => (
          item.photos.map(props => (
            <GalleryModalContent
              {...props}
              key={props.id}
              currentPhotoId={store.currentPhotoId}
            />
          ))
        ))
      }
    </Modal>
  </div>
);

GalleyContent.propTypes = {
  classes: PropTypes.instanceOf(Object).isRequired,
  store: PropTypes.instanceOf(Object).isRequired,
  location: PropTypes.instanceOf(Object).isRequired,
  closeModal: PropTypes.func.isRequired,
};


export default injectSheet(styles)(enhance(GalleyContent));
