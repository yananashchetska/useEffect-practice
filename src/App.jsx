import { useEffect, useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

const App = () => {
  const [resource, setResource] = useState("");
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resource}`)
      .then(response => response.json())
      .then(json => setItems(json))
    // return () => {
    //   console.log('hello from return');
    // }
  }, [resource]);

  return (
    <>
      <button onClick={() => setResource("posts")}>Posts</button>
      <button onClick={() => setResource("users")}>Users</button>
      <button onClick={() => setResource("comments")}>Comments</button>
      <br />
      <br />
      <button onClick={() => setResource("")}> reset</button>
      <br />
      <h2>{resource}</h2>
      {
        items.map((item) => {
          return <pre
            key={item.id}
          >
            {JSON.stringify(item)}
          </pre>
        })
      }
    </>
  );
};

export default App;
