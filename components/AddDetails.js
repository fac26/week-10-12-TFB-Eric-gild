// //refactor

// import React, { useState, useEffect } from 'react';
// import { useSession } from '@supabase/auth-helpers-react';

// import styles from '../styles/AddDetails.module.css';


// const AddDetails = () => {
//   const session = useSession();
//   const [title, setTitle] = useState('');
//   const [artist, setArtist] = useState('');
//   const [location, setLocation] = useState('');
//   const [time, setTime] = useState('');
//   const [description, setDescription] = useState('');
//   const [rating, setRating] = useState(0);
//   const [image, setImage] = useState('');
//   const [user_uuid, setUserUuid] = useState('');

//   useEffect(() => {
//     if (session) {
//       setUserUuid(session.user.id);
//     }
//   }, [session]);

//   useEffect(() => {
//     const image = localStorage.getItem('uploadedFile');
//     setImage(image);
//   }, [image]);

//   const handleRatingChange = (rating) => {
//     setRating(rating);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!title || !artist || !rating || !location || !time) {
//       setFormError('Please fill in all the fields correctly');
//       return;
//     }
//   };

//   const dataToStore = {
//     title,
//     artist,
//     rating,
//     location,
//     time,
//     description,
//     image,
//     user_uuid,
//   };

//   useEffect(() => {
//     localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(dataToStore));
//   }, [dataToStore]);

//   return (
//     <>
//     {/* form details here */}
//     </>
//   );
// };

// export const LOCAL_STORAGE_KEY = 'data';
// export default AddDetails;
