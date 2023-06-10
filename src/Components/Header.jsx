/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: "2rem",
        background: "#1d252e",
        padding: "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
      }}
    >
      <a href="#home">Home 🏡</a>
      <a href="#about">About ℹ️</a>
      <a href="#portfolio">Portfolio 📜</a>
      <a href="#footer">Contact 📱</a>
    </div>
  );
};

export default Header;
