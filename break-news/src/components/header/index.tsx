import React from "react";
import bg from "../../assets/images/header_bg.png";

function Header(props) {
  return (
    <div
      className={"header-content"}
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className={"container"}>{props.children}</div>
    </div>
  );
}

export default Header;