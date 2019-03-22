import { branch, renderComponent, renderNothing } from 'recompose';
import GalleryModalItem from './GalleryModalItem';

export default branch(
  ({ id, currentPhotoId }) => id === currentPhotoId,
  renderComponent(GalleryModalItem),
  renderNothing,
)();
