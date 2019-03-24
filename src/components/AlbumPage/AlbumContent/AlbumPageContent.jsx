import { branch, renderComponent, renderNothing } from 'recompose';
import AlbumItem from './AlbumItem';

export default branch(
  ({ itemId, currentAlbumId }) => itemId === currentAlbumId,
  renderComponent(AlbumItem),
  renderNothing,
)();
