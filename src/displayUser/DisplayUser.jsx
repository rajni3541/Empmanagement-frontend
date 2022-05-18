import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from 'axios'

const DisplayUser = ({ getUsers}) => {
  useEffect(() => {
    const url = "https://admin-backend/app/user/getall"
    const config = {
      headers: {
        "auth-token": getUsers,
      },
    };
    axios
      .get(url, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  console.log(getUsers)

  return (
    <>
      
    </>
  );
};

const mapStateToProps = (state) => ({
  getUsers: state.signIn.users,
});

export default connect(mapStateToProps, null)(DisplayUser);