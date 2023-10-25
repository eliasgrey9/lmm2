import React from "react";
import style from "./navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ userSignedIn, setUserSignedIn, userId, onUserFilesPage }) => {
  const navigate = useNavigate();

  const signOut = () => {
    // Clear the user token from local storage
    localStorage.removeItem("authToken");
    setUserSignedIn(false);
    // Navigate to the guest page
    navigate("/lasermaps/guest");
  };

  return (
    <div className={style.body}>
      <Link to={`/lasermaps/${userId}`} style={{ textDecoration: "none" }}>
        <div className={style.logo}>Laser Map Maker</div>
      </Link>

      <div className={style.rightSideOfNav}>
        {!userSignedIn ? (
          <>
            <Link className={style.suggestions} to={`/signIn/`}>
              <div>Sign In</div>
            </Link>
          </>
        ) : null}
        {userSignedIn ? (
          <>
            {!onUserFilesPage ? (
              <>
                <Link className={style.suggestions} to={`/userfiles/${userId}`}>
                  <div>My Exports</div>
                </Link>
                <Link
                  className={style.suggestions}
                  to={`https://forms.gle/4kNAhn4GkYPxb2c89`}
                  target="_blank"
                >
                  <div>Feedback</div>
                </Link>
                <Link className={style.suggestions} to={`/about/${userId}`}>
                  <div>About</div>
                </Link>
                <Link
                  className={style.suggestions}
                  to={`/lasermaps/pricing/${userId}`}
                >
                  <div>Pricing</div>
                </Link>
              </>
            ) : (
              <Link className={style.suggestions} to={`/lasermaps/${userId}`}>
                <div>Home</div>
              </Link>
            )}
            <Link className={style.suggestions} to={"/lasermaps/guest"}>
              <div onClick={signOut}>Sign Out</div>
            </Link>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
