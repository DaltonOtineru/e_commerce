import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import './CategoryGrid.scss';
import clothing from '../../assets/clothing.jpg';
import shoes from '../../assets/shoe.jpg';
import ShopButton from '../shared/ShopButton';
import { Button } from '@mui/material';

const CategoryGrid = ({ label }) => {
  return (
    <section className="category" id="category">
      <Container className="category--container">
        <h3 className="category--header">Shop The Essentials</h3>
        <Row className="category--row">
          <Col sm={12} md={6} className="grid--col left--col">
            <div className="grid--img--wrap">
              <img src={clothing} className="grid--photo clothing--photo" />
              <div className="grid--overlay">
                <h5 className="grid--overlay--header">Clothing</h5>
                <ShopButton label="Shop" id="category--btn" />
              </div>
            </div>
          </Col>
          <Col sm={12} md={6} className="grid--col right--col">
            <div className="grid--img--wrap">
              <img src={shoes} className="grid--photo shoe--photo" />
              <div className="grid--overlay">
                <h5 className="grid--overlay--header">Shoes</h5>

                <Button component={Link} to="shoes" id="category--btn">
                  Shop
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default CategoryGrid;
