import SearchBox from "./components/SearchBox"
import {useState} from 'react'
import data from '../../data/users.json'
import './styles.css' 
import SearchResults from "./components/SearchResult";
export default function Search() {

    const [isAtTop, setisAtTop] = useState(false);
    const [userData, setUserData] = useState(data);
    const [results, setResults] = useState([]);

    console.log(userData)



    const handleSearchText = (searchText) => {
        setisAtTop(true);
        const textConverted = searchText.toLowerCase();
       if(userData?.length){
         const filtersData= userData.filter( (value)=>{
                return(
                value.name.toLowerCase().includes(textConverted)     ||
                value.email.toLowerCase().includes(textConverted)    ||
                value.username.toLowerCase().includes(textConverted)   
                )
           });
              setResults(filtersData);
       }
    }

    console.log(results)
    const handleCloseClick = () => {
        setisAtTop(false);
        setResults([]);
    }
    return(
        <div className={`search ${isAtTop ? "search--top": "search--center"}`}>
            <SearchBox onSearch={handleSearchText} onClose={handleCloseClick} isSearching={isAtTop} />
            <SearchResults results={results} isSearching={isAtTop} />
        </div>
    )
}