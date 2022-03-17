import React from 'react';
import TopHeader from './TopHeader';
import Navigation from '../Navigation/Navigation';
import BottomHeader from './BottomHeader';

function Header() {
  return (
    <>
      <TopHeader />
      <Navigation />
      <BottomHeader />
    </>
  );
}

export default Header;
