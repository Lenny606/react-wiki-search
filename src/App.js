import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import SearchBar from './Searchbar';
import SearchResults from './SearchResults';

function App() {

  const [query, setQuery] = useState('');
  const [results, setResults] = useState([])

  const baseUrl = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch=';
  const searchUrl = baseUrl + query;

  const loadData= async() => {

    const response = await fetch(searchUrl);
    const data = await response.json();

    //read the data and access them accordingly if one object or array etc...
    // console.log(data.query.search);
    setResults(data.query.search);

}

// useEffect(() => {

//     loadData();
// //add dependancy variable to call function after re-render    
// },[]);


  return (
    <div className="App">
         <div>
            {/* passing the state and event from parents to child */}
          <SearchBar 
            onClick={() => {loadData(searchUrl); console.log(query)}} 
            setQuery={setQuery} 
          />
          <SearchResults results={results}/>
              
        </div>



    </div>
  );
}

export default App;
