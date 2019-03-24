import apiCall from '../utils/api';
import routes from '../config/routes';

const Photos = {
  getPhotos: apiCall(routes.photosPath),
};

export default { Photos };
