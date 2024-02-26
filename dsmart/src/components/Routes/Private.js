import { useState, useEffect } from "react";
import { useAuth } from "../../context/Auth.js";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Spinner from "../Spinner";

export default function PrivateRoute() {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    const authCheck = async () => {
      try {
        const res = await axios.get("http://localhost:8080/api/v1/auth/user-auth");
        console.log("Response:", res.data); // Log the response data
        if (res.data.ok) {
          setOk(true);
        } else {
          setOk(false);
        }
      } catch (error) {
        console.error("Error fetching user auth:", error.response); // Log the response error
        setOk(true); // Set ok to false in case of error
      }
    };
    if (auth?.token) {
      console.log("Auth token found:", auth.token); // Log the auth token
      authCheck();
    } else {
      console.log("No auth token found");
    }
  }, [auth?.token]);
  
  return ok ? <Outlet /> : <Spinner />;
}