function SearchBar({ onClick, setQuery }) {
    
    return(
      <div>
        <input 
          name="searchBar" 
          type="text" 
          onChange={(e) => setQuery(e.target.value)} 
        />
        <button onClick={onClick}>Search</button>
      </div>
    )
  }
  
  export default SearchBar;