import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Link to='/cryptotracker'>
      <h1 className="header text-center text-primary mt-3 mb-4">Coin Stats</h1>
    </Link>
  );
};

export default Header;