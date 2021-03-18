import { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState({
    loading: true,
    error: null,
    info: [],
  })

  useEffect(() => {

    (async () => {
      const dataFetched = await fetch("http://172.16.1.86:2001/upload");
      console.log(dataFetched);
      const json = await dataFetched.json()
      
      setData({ loading: false, info: json, })
    })()
  }, []);


  return (
    <>
      <ul>
        {
          data.info.map((item, i) => {
            return (
              <li key={i}>{item.firstName}</li>
            )
          })
        }
      </ul>
    </>
  );
}

export default App;
