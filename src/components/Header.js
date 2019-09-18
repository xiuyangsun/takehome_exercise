import React from "react";
import injectSheet from "react-jss";
import { withRouter } from "react-router";

const Header = (props) => {
  const { classes: c, history } = props;
  const location = window.location.pathname;
  const isHome = location === "/";

  return (
    <div className={c.container}>
      <span
        className={isHome ? c.currentPage : ""}
        onClick={() => {
          if (!isHome) {
            history.push("/");
          }
        }}
      >
        Home
      </span>
      <span
        className={!isHome ? c.currentPage : ""}
        onClick={() => {
          if (isHome) {
            history.push("/about");
          }
        }}
      >
        About
      </span>
    </div>
  );
};

const styles = {
  container: {
    width: "100%",
    height: "36px",
    padding: "10px 0",
    textAlign: "center",
    backgroundColor: "#0089ff",
    color: "white",
    fontSize: "24px",
    fontWeight: "500",
    display: "flex",
    justifyContent: "space-around",
    "&> span": {
      userSelect:"none",
      cursor: "pointer"
    }
  },
  currentPage: {
    color: "#ff8600fa",
    fontWeight: "800",
  }
}

export default withRouter(injectSheet(styles)(Header));