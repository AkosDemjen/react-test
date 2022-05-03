import React, { FunctionComponent } from "react";

interface ListProps {
  data: any[];
  onElementClick: (event: any) => void;
  onRemoveClick: (event: any) => void;
}
const List: FunctionComponent<ListProps> = ({
  data,
  onElementClick,
  onRemoveClick,
}) => {
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>
          <div onClick={() => onElementClick(item.id)}>
            {item.name} | {item.clicks}
          </div>
          <button onClick={() => onRemoveClick(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default List;
