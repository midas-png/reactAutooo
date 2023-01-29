import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin, deleteCoin }) => {
  return (
      <Link
          to={`/cryptotracker/coins/${coin.id}`}
          className="text-decoration-none my-1 coin"
      >
          <li className="coinlist-item list-group-item list-group-item-action d-flex justify-content-between align-items-center text-dark">
              <img className="coinlist-image" src={coin.image} alt="" />
              <span className="text-decoration-none">
                  {coin.current_price} ₽
              </span>

              <span
                  className={
                      coin.price_change_percentage_24h < 0
                          ? "text-danger mr-2"
                          : "text-success mr-2"
                  }
              >
                  {" "}
                  {coin.price_change_percentage_24h < 0 ? (
                      <div className="fas fa-sort-down align-middle mr-1"></div>
                  ) : (
                      <div className="fas fa-sort-up align-middle mr-1"></div>
                  )}
                  {coin.price_change_percentage_24h}
              </span>
              <div
                  onClick={(e) => {
                      e.preventDefault();
                      deleteCoin(coin.id);
                  }}
                  className="delete-icon far fa-times-circle text-danger"
              ></div>
          </li>
      </Link>
  );
};

export default Coin;
