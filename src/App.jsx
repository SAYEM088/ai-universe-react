import React from 'react';
import Header from './Component/Header/Header';
import Button from './Component/Button/Button';
import Card from './Component/Card/Card';

const App = () => {
  return (
    <>
      <Header />
      <Button>Sort By Date</Button>
      <Card></Card>
      <Button>See More</Button>

    </>
  );
};

export default App;