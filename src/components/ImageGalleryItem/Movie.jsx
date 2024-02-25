// import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled';

import { Link } from 'react-router-dom';

export const Movie = ({ id, title, name }) => {
  return (
    <li>
      <Link to="/movies/{id}">{title}</Link>
    </li>
  );
};
