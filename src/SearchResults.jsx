function SearchResults({results}) {



    return (
<>
        {results.map(result => {
            console.log(result);
            return (<div >
                
                <p>{result.title}</p>
                <a href={`https://en.wikipedia.org/wiki/${result.title}`} target='_blank' rel="noopener noreferrer">link</a>
                </div>
            )
            
        })}
</>
    )
}

export default SearchResults;