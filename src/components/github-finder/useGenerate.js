import React, { useEffect, useState } from "react";

const useGenerate = (user) => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, [user, data]);

  const getData = async () => {
    const res = await fetch(`https://api.github.com/users/${user}`);
    const data = await res.json();
    setData(data);
  };
  console.log(user);
  if (!data) return;
  console.log(data);

  const {followers, following, public_repos, created_at, login, avatar_url } = data;
  return { followers, following, public_repos, created_at, login, avatar_url };
};
export default useGenerate;
