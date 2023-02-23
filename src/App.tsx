import React from 'react';
import { Routes, Route, } from "react-router-dom";
import Layout from './components/Layout/Layout';
import Home from './container/Home';

export default function App() {
      return (
            <React.Fragment>
                  <Layout>
                        <Routes>
                              <Route path='/' element={<Home />} />
                        </Routes>
                  </Layout>
            </React.Fragment>
      )
}