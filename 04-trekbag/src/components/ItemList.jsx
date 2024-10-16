import { useContext, useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";
import { listContext } from "../contexts/ListContextProvider";
import { useListStore } from "../stores/listStore";
const sortingOptions = [
  {
    label: "Sort by default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];
export default function ItemList() {
    // const {textList, handleDelete, handleTaggle }=useContext(listContext)
    const [textList, handleDelete, handleTaggle ]=useListStore(state=>[state.textList,state.handleDelete,state.handleTaggle])
  const [sortBy, setSortBy] = useState("default");
  const sortedItems = useMemo(()=>
    [...textList].sort((a, b) => {
        if (sortBy == "packed") {
          return b.packed - a.packed;
        }
    
        if (sortBy == "unpacked") {
          return a.packed - b.packed;
        }
    
        // 默认返回0，以保持原有顺序
        return;
      }),[textList,sortBy])
  return (
    <ul className="item-list">
      {/* {textList.length===0?<EmptyView/>:null} */}
      {textList.length === 0 && <EmptyView />}
      {textList.length > 0 && (
        <section className="sorting">
          <Select
            options={sortingOptions}
            defaultValue={sortingOptions[0]}
            onChange={(option) => setSortBy(option.value)}
          />
        </section>
      )}
      {sortedItems.map((item) => {
        return (
          <Item
            item={item}
            key={item.id}
            onDelete={handleDelete}
            onTaggle={handleTaggle}
          />
        );
      })}
    </ul>
  );
}
function Item({ item, onDelete, onTaggle }) {
  return (
    <li className="item">
      <label>
        <input
          checked={item.packed}
          type="checkbox"
          onChange={() => {
            onTaggle(item.id);
          }}
        />
        {item.name}
      </label>
      <button
        onClick={() => {
          onDelete(item.id);
        }}
      >
        ❌
      </button>
    </li>
  );
}
