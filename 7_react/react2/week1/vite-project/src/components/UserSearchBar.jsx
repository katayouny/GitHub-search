import { useContext } from "react";
import { userContext } from "./UserSection";

function UserSearchBar() {
  const { query, setQuery } = useContext(userContext);

  return (
    <div>
      <h4>User Search</h4>

      <div>
        <form>
          <label>
            Search for user name:
            <input
              type="text"
              placeholder="insert user"
              style={{
                border: "1px solid rgb(3, 0, 47)",
                marginLeft: "5px",
                paddingLeft: "3px",
              }}
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </label>
        </form>
      </div>
      <br />
    </div>
  );
}

export default UserSearchBar;
