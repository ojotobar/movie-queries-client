import React from 'react';
import './App.css';
import Layout from './Layout';
import { Route, Routes } from 'react-router-dom';
import NavigationBar from './features/components/NavigationBar';
import Footer from './features/components/Footer';
import Home from './features/components/Home';
import MovieDetails from './features/components/MovieDetails';

function App() {
  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:id' element={<MovieDetails />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
