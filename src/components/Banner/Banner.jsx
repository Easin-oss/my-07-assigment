import React from 'react';
import './Banner.css';
const Banner = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banners-cards">
        
          <div className="banner-card in-progress">
            <div className="banner-info">
              <span>In-Progress</span>
              <span className="banner-number">{inProgressCount}</span>
            </div>
          </div>
         
          <div className="banner-card resolved">
            <div className="banner-info">
              <span>Resolved</span>
              <span className="banner-number">{resolvedCount}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;