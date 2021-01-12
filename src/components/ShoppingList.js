import { useList } from "../context/ListContext";
import "./ShoppingList.css";
import { ReactComponent as TrashIcon } from "./trash.svg";

export default function TodoList() {
  const [lists, setLists] = useList();

  function removeList(id) {
    const copyLists = [...lists];
    let filteredLists = copyLists.filter((list, index) => {
      return index !== id;
    });
    setLists(filteredLists);
  }

  return (
    <div
      className={[
        "shopping-list__wrapper",
        lists.length > 4 && " overflow-y-scroll",
      ].join(" ")}
    >
      {lists.length > 0 ? (
        lists.map((list, index) => {
          return (
            <div key={index} className="shopping-list__item">
              <span>{list}</span>
              <button
                id={`shopping-btn-remove-${index.toString()}`}
                onClick={() => removeList(index)}
              >
                <TrashIcon />
              </button>
            </div>
          );
        })
      ) : (
        <div className="shopping-list__item">
          <span>No Item Added</span>
        </div>
      )}
    </div>
  );
}
