import React, { useEffect, useState } from "react";
import { getUsers } from "./api/getUsers";
import List from "./components/List";
import SearchableList from "./components/SearchableList";
import { debounce } from "./utils/debounce";
import { filterObjectArray } from "./utils/filter";

export interface User {
  id: number;
  name: string;
  clicks: number;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

  useEffect(() => {
    setUsers(getUsers());
    setFilteredUsers(getUsers());
  }, []);

  const onSearch = (event: any) => {
    const { value } = event.target;

    setFilteredUsers(filterObjectArray(users, value));
  };

  const onElementClick = (id: any) => {
    let filteredUsersCopy = [...filteredUsers];

    filteredUsersCopy.map((user) => {
      if (user.id !== id) {
        user.clicks += 1;
      }
    });
    setFilteredUsers(filteredUsersCopy);
  };

  const onRemoveClick = (id: number) => {
    setFilteredUsers(filteredUsers.filter((user) => user.id !== id));
  };

  return (
    <div>
      <SearchableList
        onSearch={onSearch}
        onElementClick={onElementClick}
        data={filteredUsers}
        onRemoveClick={onRemoveClick}
      />
    </div>
  );
}

export default App;
