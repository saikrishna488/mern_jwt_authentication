"use client";
import React, { useEffect } from 'react';
import axios from 'axios';
import { GlobalStates } from "../context/GlobalContext";
import { useCookies } from 'react-cookie';

const GetData = () => {
  const [cookie] = useCookies();
  const token = cookie.jwt;
  const { newData } = GlobalStates();

  useEffect(() => {
    const getData = async (token) => {
      try {
        let res = await axios.get('http://localhost:8000/api/users/profile/' + token);
        let oriData = {
          _id: res.data._id,
          name: res.data.name,
          email: res.data.email
        }
        newData(oriData);
      } catch (err) {
        console.log(err.response.data.message);
      }
    };

    if (token && token.length > 0) {
      getData(token);
    console.log('ji')
    }
  }, [token, newData]);

  return <></>;
}

export default GetData;