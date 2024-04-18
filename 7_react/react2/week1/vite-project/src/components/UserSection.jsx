import { useEffect, useState, createContext } from "react";
import { useDebounce } from 'use-debounce';
import UserSearchBar from "./UserSearchBar";
import UserSearchResult from "./UserSearchResult";
import "./BorderStyle.css";

const userContext = createContext(null);

const API_URL = "https://api.github.com/search/users?q=";

function UserSection() {
  const [query, setQuery] = useState("");
  const [debouncedQuery] = useDebounce(query, 1000);
  const [loading, setLoading] = useState(true);
  const [searchResult, setSearchResult] = useState([]);
  const [error, setError] =useState(null);

  async function fetchData() {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_URL}${debouncedQuery}`);
      if (!response.ok) {
        throw new Error("Network error");
      }
      const data = await response.json();
      console.log(data);
      setSearchResult(data.items);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setError(error.message);
    }
  }


  useEffect(() => {
    fetchData();
  }, [debouncedQuery]);

  return (
    <div className="border-style">
      <h3>User Section</h3>

      <userContext.Provider value={{ query, setQuery, loading, error, searchResult }}>
        <div
          className="border-style">
          <UserSearchBar />
        </div>

        <div className="border-style">
          {" "}
          <UserSearchResult />
        </div>
      </userContext.Provider>
    </div>
  );
}

export default UserSection;
export { userContext };
