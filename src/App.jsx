// // src/App.jsx
// App: The root component that orchestrates the entire application.
// StarshipSearch: Allows users to submit a search form for the name of a starship.
// StarshipList: Displays a list of starships held in state.
// StarshipCard: A component used within StarshipList that displays information on a single starship.
import { useState, useEffect } from "react";
import StarshipSearch from "./components/StartshipSearch/StarshipSearch";
import StarshipList from "./components/StartshipList/StarshipList";
//rename index as getstarthsip easier to understand
import { index as getStarships } from "./services/starshipService";

const App = () => {
  //hold starship data after fetching from API, full master copy per se original data
  const [starshipsData, setStarshipsData] = useState([]);

  //what users will see on the page
  const [displayedStarships, setDisplayedStarships] = useState([]);

  const [lastSearch, setLastSearch] = useState("");

  //fetch the starship data when the app loads
  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getStarships(); //service function fetching the API
        setStarshipsData(data); //data is the JSON that API gives eg. name, starshipclass etc. {"name": xxx}
        setDisplayedStarships(data); //update the states
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    }
    fetchData(); //call the async functio and put the data into updated states
  }, []); //empty array run only once when component 1st loads

  const handleSearch = (searchTerm) => {
    const filtered = starshipsData.filter((ship) =>
      ship.name.toLowerCase().includes(searchTerm.toLowerCase())
    ); //creates an array containing the startship that match condition inside callback, ship from API and search term are same

    setDisplayedStarships(filtered); // determine what user sees on page
    setLastSearch(searchTerm); //updates lastsearch with the search term user just typed
  };

  const handleReset = () => {
    setDisplayedStarships(starshipsData); //all of the starships shoudl appear again
    setLastSearch(""); //reset the search bar
  };

  return (
    <>
      <StarshipSearch
        onSearch={handleSearch} //pass down the functions to component
        onReset={handleReset}
        lastSearch={lastSearch}
        resultsCount={displayedStarships.length}
      />
      <StarshipList starships={displayedStarships} />
    </>
  );
};

export default App;
