import React from 'react';
import './App.css';
import Layout from '../components/Layout/Layout';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';

function App() {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </div>
  );
}

export default App;
