import { useList } from "../context/ListContext";

export default function TodoForm() {
  const [lists, setLists, addedList, setAddedList] = useList();

  function submit(e) {
    e.preventDefault();

    const newList = [...lists];
    newList.push(addedList);
    setLists(newList);
    setAddedList("");
  }

  function handleChange(e) {
    setAddedList(e.target.value);
  }

  return (
    <form onSubmit={submit} className="w-11/12 lg:w-1/2 mx-auto ">
      <div className="w-10/12  mx-auto flex justify-between">
        <input
          type="text"
          value={addedList}
          onChange={handleChange}
          className="w-3/4 mr-3 py-3 px-4 rounded  focus:outline-none focus:border focus:border-purple-300 text-purple-300"
          placeholder="Add more shopping list"
          style={{ boxShadow: "5px 7px 22px rgba(223, 223, 223, 0.25)" }}
        />
        <button className="w-1/4 py-3 px-4 rounded-lg bg-purple-300 text-pink-300 font-bold focus:outline-none focus:bg-purple-400">
          Add
        </button>
      </div>
    </form>
  );
}
