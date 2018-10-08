import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedInLinks";
import { connect } from "react-redux";

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to="/" className="brand-logo">
            MarioPlan
          </Link>
          <SignedInLinks />
          <SignedOutLinks />
        </div>
      </nav>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    // projects: state.firestore.ordered.projects
  };
};

export default connect(mapStateToProps)(Navbar);
