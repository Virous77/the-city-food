import React from "react";
import { MdLogout, MdAdd } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../../styles/Profile.css";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Profile = ({ logoutUser, setShow, user }) => {
  const { displayName: name, email, photoURL: image, phoneNumber } = user;

  console.log(user);

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className="dropProfile"
    >
      <motion.div
        className="profileHead"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -30 }}
        transition={{ delay: 0.4 }}
      >
        <FaLongArrowAltLeft
          className="exitIcon"
          onClick={() => setShow(false)}
        />

        <h2>Profile</h2>
      </motion.div>

      <div className="userProfileInfo">
        <img src={image} alt={name} />

        <div className="activeUserData">
          <h1>{name}</h1>

          <div className="UserNameData">
            <p className="userEmail">
              <h3>Email :</h3>
              <span>{email}</span>
            </p>

            {phoneNumber && (
              <p className="userEmail">
                <h3>Mobile No. :</h3>
                <span>{phoneNumber}</span>
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="profileFixed">
        {user && user.email === "sanikumar7701@gmail.com" && (
          <div className="newItem">
            <Link to="create" onClick={() => setShow(false)}>
              <span>New Item</span>
              <MdAdd />
            </Link>
          </div>
        )}

        <div className="logout" onClick={logoutUser}>
          <span>Logout</span>
          <MdLogout />
        </div>
      </div>
    </motion.div>
  );
};

export default Profile;
