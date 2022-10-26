import React from "react";
import Button from "../../common/Button";
import "./topFold.css";

const TopFold = () => {
  return (
    <div className="topfold flex">
      <div className="tf-left">
        <div className="tf-heading">
          Discover, collect & sell{" "}
          <span className="heading-gradient">Extraordinary </span>
          NFTs
        </div>
        <div className="tf-description">
          The leading NFT Marketplace on EthereumHome to the next generation of
          digital creators. Discover the best NFT collections.
        </div>
        <div className="tf-left-btns">
          <Button btnType="PRIMARY" btnText="Explore" />
          <Button
            btnType="SECONDARY"
            btnText="Create"
            customClass="tf-left-second-btn"
          />
        </div>
        <div className="tf-left-infoStats">
          <div className="tf-is-infoItem">
            <div className="tf-infoItem-count">200K+</div>
            <div className="tf-infoItem-label">Collections</div>
          </div>
          <div className="tf-is-infoItem">
            <div className="tf-infoItem-count">10K+</div>
            <div className="tf-infoItem-label">Artists</div>
          </div>
          <div className="tf-is-infoItem">
            <div className="tf-infoItem-count">423K+</div>
            <div className="tf-infoItem-label">Community</div>
          </div>
        </div>
      </div>
      <div className="tf-right">
        <div className="tf-right-diamond">
          <div className="tf-r-diamond-item">
            <img
              src="https://openseauserdata.com/files/22284fa002c7612a875381ab66b22abf.gif"
              className="tf-r-diamond-img"
              alt="diamond banner"
            />
          </div>
          <div className="tf-r-diamond-item">
            <img
              src="https://openseauserdata.com/files/c3a312c53514642e8041c65e10b40a52.gif"
              className="tf-r-diamond-img"
              alt="diamond banner"
            />
          </div>
          <div className="tf-r-bg-blob"></div>
          <div className="tf-r-diamond-item">
            <img
              src="https://openseauserdata.com/files/0895e82346f5c31462d41ab75d9b90b1.gif"
              className="tf-r-diamond-img"
              alt="diamond banner"
            />
          </div>
          <div className="tf-r-diamond-item">
            <img
              src="https://openseauserdata.com/files/24ed399dc3e5430b39a1db656f68c67c.gif"
              className="tf-r-diamond-img"
              alt="diamond banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFold;
