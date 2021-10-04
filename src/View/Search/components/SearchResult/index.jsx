export default function SearchResults({results,isSearching}){
    return (
        <div>
         {!results.length && isSearching  && <div>No results found</div>}
            {
                results?.map(result => {
                    return (
                        <div key={result.id}>
                            <h3>{result.name}</h3>
                            <p>{result.email}</p>
                            <hr/>
                        </div>
                    )
                })
            }
        </div>
    )
}
