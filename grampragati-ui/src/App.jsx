import { useEffect, useState } from 'react';

function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/data')
      .then(response => response.json())
      .then(data => setApiData(data))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-4 text-center">
      <h1 className="text-2xl font-bold">🌾 GramPragati Frontend</h1>
      <p className="mt-4">
        {apiData ? apiData.message : "Loading from backend..."}
      </p>
    </div>
  );
}

export default App;
