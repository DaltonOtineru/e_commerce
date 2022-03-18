import React from 'react';
import './ShopButton.scss';
import { Link as RouterLink } from 'react-router-dom';
import { Button } from '@mui/material';

const ShopButton = ({ label }) => {
  return (
    <Button
      className="root--shop--btn"
      variant="contained"
      component={RouterLink}
      to="/"
    >
      {label}
    </Button>
  );
};

export default ShopButton;
