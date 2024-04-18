import { useContext } from "react";
import { userContext } from "./UserSection";

function UserSearchResult() {
  const { query, loading, error, searchResult } = useContext(userContext);

  return (
    <div>
      <h4>User Search Result</h4>

      {loading && <div style={{ color: "darkblue" }}>Loading...</div>}
      {error && (
        <div style={{ color: "brown" }}>Error fetching data: {error}</div>
      )}
      {!loading && searchResult.length === 0 && (
        <div style={{ color: "brown" }}>No match found</div>
      )}
      {!loading && searchResult.length > 0 && (
        <ul>
          {searchResult.map((result) => (
            <li key={result.id}>{result.login}</li>
          ))}
        </ul>
      )}
      <br />
    </div>
  );
}

export default UserSearchResult;
