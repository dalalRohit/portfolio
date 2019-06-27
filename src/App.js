import React from 'react';
import classes from './App.css';
import Auxi from './hoc/Auxi/Auxi';
import Layout from './components/Layout/Layout';
import Main from './containers/Main/Main';

function App() {
  return (
    <Auxi>
      <Layout>
        <div className={classes.App}>
          <Main />
        </div>
      </Layout>
    </Auxi>
  );
}

export default App;
