import React, { FunctionComponent } from "react";
import { User } from "../App";
import List from "./List";
interface SearchableListProps {
  onSearch: (event: any) => void;
  data: User[];
  onElementClick: (event: any) => void;
  onRemoveClick: (event: any) => void;
}
const SearchableList: FunctionComponent<SearchableListProps> = ({
  onSearch,
  data,
  onElementClick,
  onRemoveClick,
}) => {
  return (
    <>
      <input onChange={onSearch as any} />
      <List
        data={data}
        onElementClick={onElementClick}
        onRemoveClick={onRemoveClick}
      />
    </>
  );
};

export default SearchableList;
