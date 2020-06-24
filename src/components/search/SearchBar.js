import React, { useState } from "react";
import { withRouter } from 'react-router-dom'


      const SearchBar = (props) => {

        // const { isAuthenticated } = useSimpleAuth()
        const [search, setSearch] = useState({ searchBar: "" });

        const handleFieldChange = (evt) => {
            const stateToChange = { ...search };
            stateToChange[evt.target.id] = evt.target.value;
            setSearch(stateToChange);
          };
        
          const handleSearch = (e) => {
            e.preventDefault();
            e.target.querySelector("#searchBar").value = "";
            props.history.push({
              pathname: "/results",
              state: { search: search.searchBar },
            });
          };
    
    
        return (
            <>
          <div className="searchBarDiv">
            <form onSubmit={handleSearch}>
              <input
                onChange={handleFieldChange}
                type="text"
                id="searchBar"
                placeholder="Search for new cocktails"
              />
            </form>
          </div>
            </>
        )
    };
    
    export default withRouter(SearchBar); 