import React from 'react';
import './ShopButton.scss';
import { Button } from '@mui/material';

const ShopButton = ({ label }) => {
  return (
    <Button className="root--shop--btn" variant="contained">
      {label}
    </Button>
  );
};

export default ShopButton;
