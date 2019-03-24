import { action, observable } from 'mobx';
import { MAX_PHOTO_COUNT } from '../../../lib/utils/consts';

class UserStore {
  @observable photos = [];
  @observable albums = [];
  @observable currentAlbumId = 1;
  @observable currentPhotoId = 1;
  @observable mappedProps = '';
  @observable isOpen = false;

  constructor({ transport }) {
    this.transport = transport;
  }

  setPhotos = (v) => {
    this.photos = v;
    this.createAlbums();
  };

  createAlbums = () => {
    this.albums = Array.from(new Set(this.photos
      .map(items => items.albumId)))
      .map(id => ({
        id,
        photos: [
          ...new Set(this.photos
            .filter(items => items.albumId === id)
            .map(items => items)),
        ],
      }));
  };

  @action('[UserStore] open modal')
  openModal = (v) => {
    this.isOpen = true;
    this.currentPhotoId = v;
  };

  @action('[UserStore] close modal')
  closeModal() {
    this.isOpen = false;
  }

  @action('[UserStore] set current album id')
  setCurrentAlbumId = (v) => {
    this.currentAlbumId = v;
  };

  @action('[UserStore] get photos')
  getPhotos = () => {
    this.transport.Photos.getPhotos
      .then(response => response.json())
      .then((json) => {
        this.setPhotos(json.slice(0, MAX_PHOTO_COUNT));
      });
  }
}

export default UserStore;
