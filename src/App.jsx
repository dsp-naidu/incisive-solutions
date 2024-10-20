import React from 'react';
import './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Layout from './components/layout/Layout';
import Services from './components/services/Services';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import About from './components/about/About';
import Products from './components/products/Products';
import Team from './components/team/Team';
import DataEntry from './components/services/data-entry/DataEntry';
import DataProcessing from './components/services/data-processing/DataProcessing';
import DataConversion from './components/services/data-conversion/DataConversion';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="services/data-entry" element={<DataEntry />} />
        <Route path="services/data-processing" element={<DataProcessing />} />
        <Route path="services/data-conversion" element={<DataConversion />} />
        <Route path="team" element={<Team />} />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
