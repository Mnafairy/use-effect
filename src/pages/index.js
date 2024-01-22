import { useEffect, useState } from "react";
const Home = () => {
  const [user, getUser] = useState("");
  useEffect(() => {
    async function getData() {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      console.log(data);
      console.log(data.results[0].name.first);
      getUser(data.results[0].name.first);
    }
    getData();
  }, []);
  return (
    <div>
      {/* <button onClick={() => getData()}>Fetch</button> */}
      <div>{user}</div>
    </div>
  );
};
export default Home;
