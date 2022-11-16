import React, {createContext, useState, useEffect} from "react";
import http from "../http";
export const UserInfo = createContext();
// const token = window.localStorage.getItem("token");
//     // const [error, setError] = useState();
//     const [user, setUser] = useState();
  

export const UserProvider = ({children}) =>{

    const [data, setData] = useState({data:{
        id: 1,
        first_name: "User",
        last_name: "",
        avatar: "https://png.pngitem.com/pimgs/s/421-4212266_transparent-default-avatar-png-default-avatar-images-png.png"
    }})
    useEffect(() => {
  http
    .get("/users/5", {
    })
    .then((res) => {
      setData(res.data);
    })
    .catch((err) => {
      // console.log(err);
     
    });
}, []);
    return (
        <UserInfo.Provider value={[data, setData]}>
            {children}
        </UserInfo.Provider>
    )
}