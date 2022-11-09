import http from "../../services/http";
import { useState, useEffect } from "react";
const Home = () => {
  const token = window.localStorage.getItem("token");

  const [user, setUser] = useState();
  useEffect(() => {
    http
      .get("/users/2", {
        token: token,
      })
      .then((res) => {
        setUser(res.data);
      })
      .catch((err) => {});
  }, [token]);

  return user ? (
    <>
      <h1>First name: </h1>
      <h2>{user.data?.first_name}</h2>
      <h1>Last name: </h1> <h2>{user.data?.last_name}</h2>
      <h1>Email: </h1>
      <h2>{user.data?.email}</h2>
    </>
  ) : (
    <h1>There is not user</h1>
  );
};

export default Home;
