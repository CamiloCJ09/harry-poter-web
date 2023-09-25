import React, { useEffect } from "react";

import { useUserContext } from "../context/UserProvider";
import { useGetSessionActiveContext } from "../context/UserProvider";

const Home = () => {
  const getUserContext = useGetSessionActiveContext();
  let user = useUserContext();

  useEffect(() => {
    const fetchUser = async () => {
      if (user === null) {
        console.log("Test2");
        user = await getUserContext();
        console.log(user);
        if (user !== null) {
          console.log(user.firstName);
        }
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      <div>Hola</div>
      <p>{user?.firstName}</p>
    </>
  );
};

export default Home;
