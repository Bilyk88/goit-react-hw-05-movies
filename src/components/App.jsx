// import { useEffect, useState } from 'react';
// import toast, { Toaster } from 'react-hot-toast';
// import { Searchbar } from './Searchbar/Searchbar';
// import { ImageGallery } from './ImageGallery/MoviesList';
// import { Loader } from './Loader/Loader';
// import { Button } from './Button/Button';
// import { fetchImages } from 'api';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from 'pages/Home';
import Movies from 'pages/Movies';
import MovieDetails from 'pages/MovieDetails';

export const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/movies">Movies</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </div>
  );
};

// export const App1 = () => {
//   const [images, setImages] = useState([]);
//   const [value, setValue] = useState('');
//   const [page, setPage] = useState(1);
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [, setError] = useState(false);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   useEffect(() => {
//     if (value === '') {
//       return;
//     }
//     async function getImages() {
//       try {
//         setIsLoading(true);
//         setError(false);
//         const searchResult = await fetchImages({ page, value });
//         setImages(prev => [...prev, ...searchResult]);
//       } catch (error) {
//         setError(true);
//         toast.error('Please, try again.');
//       } finally {
//         setIsLoading(false);
//       }
//     }
//     getImages();
//   }, [page, value]);

//   const handleSubmit = newValue => {
//     setValue(newValue);
//     setPage(1);
//     setImages([]);
//   };

//   const handleLoadMore = () => {
//     setPage(prev => prev + 1);
//   };

//   const openModal = image => {
//     setIsModalOpen(true);
//     setSelectedImage(image);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <div
//       style={{
//         display: 'grid',
//         gridTemplateColumns: '1fr',
//         gridGap: '16px',
//         paddingBottom: '24px',
//       }}
//     >
//       <Searchbar onSubmit={handleSubmit} />
//       {images.length > 0 && (
//         <ImageGallery images={images} onClick={openModal} />
//       )}
//       {images.length > 0 && !isLoading && <Button onClick={handleLoadMore} />}
//       {isLoading && <Loader />}
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//           <img src={selectedImage} alt="" />
//         </Modal>
//       )}
//       <Toaster position="top-right" />
//     </div>
//   );
// };
