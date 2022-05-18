import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/userSlice';
import { selectUser } from '../../redux/userSlice';
import { auth } from '../../firebase-config';
import './Navigation.scss';
import { NavigationData, SidebarData } from './NavigationData';
import { NavLink, Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { SiAdidas } from 'react-icons/si';
import { AiOutlineClose } from 'react-icons/ai';
import { FaShoppingCart, FaBars } from 'react-icons/fa';
import { CgAdidas } from 'react-icons/cg';
import { BsPersonCircle } from 'react-icons/bs';

const Navigation = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfAccount = () => {
    dispatch(logout());
    auth.signOut();
  };

  const { cartTotalQuantity } = useSelector((state) => state.cart);
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <section className="nav">
      <div className="nav--inner">
        <Link to="/" className="adidas--nav--link">
          <SiAdidas className="adidas--nav" />
        </Link>

        <div className="nav--links">
          {SidebarData.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.path}
                className={item.cName}
                activeClassName="nav--link--active"
                exact
              >
                {item.title}
              </NavLink>
            );
          })}
        </div>
        <div className="nav--right">
          {user ? (
            <>
              <Button
                as={Link}
                to="login"
                className="button--login right"
                variant="contained"
                onClick={logoutOfAccount}
              >
                Logout
              </Button>
              <BsPersonCircle className="nav--user" />
            </>
          ) : (
            <Button
              as={Link}
              to="login"
              className="button--login right"
              variant="contained"
            >
              Sign In
            </Button>
          )}
          <div className="nav--icon--wrap cart--cart">
            <Link to="/cart" className="nav--icon ">
              <FaShoppingCart className="button--cart right nav--icon" />
            </Link>
            {cartTotalQuantity > 0 && (
              <div className="cart--count">
                <span className="cart--span">{cartTotalQuantity}</span>
              </div>
            )}
          </div>
          <div className="nav--icon--wrap">
            <FaBars
              id="button--bars"
              className="button--bars right nav--icon"
              onClick={showSidebar}
            />
          </div>
        </div>
      </div>
      <div
        className={sidebar ? 'sidebar active' : 'sidebar'}
        onClick={showSidebar}
      >
        <div className="sidebar--inner">
          <div className="sidebar--header--wrap">
            <div className="sidebar--header">
              <Link to="/">
                <CgAdidas className="sidebar--logo" />
              </Link>
              <AiOutlineClose
                className="sidebar--close"
                onClick={showSidebar}
              />
            </div>
          </div>
          <div className="sidebar--link--wrap">
            {SidebarData.map((item, index) => {
              return (
                <Link key={index} to={item.path} className="sidebar--links">
                  {item.title}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
