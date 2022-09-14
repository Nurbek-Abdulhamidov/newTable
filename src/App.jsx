import { useState } from "react";
import "./App.css";

function App() {
  const memory = localStorage.getItem("data");

  const [data, setData] = useState(
    memory
      ? JSON.parse(memory)
      : [
          { id: 1, status: "mentor", name: "Nurbek" },
          { id: 2, status: "reader", name: "Sanjar" },
          { id: 3, status: "teacher", name: "Temur" },
          { id: 4, status: "mentor", name: "Ali" },
        ]
  );

  localStorage.setItem("data", JSON.stringify(data));

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [select, setSelect] = useState(null);
  const [key, setKey] = useState("name");

  const getDelete = (id) => {
    const newArr = data.filter((val) => val.id !== id);
    setData(newArr);
  };

  const getSave = () => {
    const newData = [...data, { id: data.length + 1, name: name }];
    setData(newData);
  };

  // Edit
  const getEdit = (value) => {
    setSelect(value.id);
    setTitle(value.name);
  };
  //  Save
  const getEditSave = () => {
    const newArraying = data.map((value) =>
      select === value.id ? { ...value, name: title } : value
    );
    setData(newArraying);
    setSelect(null);
  };

  const getClear = () => {
    localStorage.clear();
  };

  const getSearch = (e) => {
    const newInfo = data.filter((val) =>
      val[key].toLowerCase().includes(e.target.value.toLowerCase())
    );
    setData(newInfo);

    if (e.target.value === "") {
      setData([
        { id: 1, status: "mentor", name: "Nurbek" },
        { id: 2, status: "reader", name: "Sanjar" },
        { id: 3, status: "teacher", name: "Temur" },
        { id: 4, status: "mentor", name: "Ali" },
      ]);
    }
  };
  console.log(key);

  return (
    <div className="App">
      <input type="text" onChange={getSearch} />
      <select onChange={(e) => setKey(e.target.value)}>
        <option value="name">name</option>
        <option value="status">status</option>
      </select>
      <input
        type="text"
        placeholder="Add "
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={getSave}>save</button>
      <table border={1} width="50%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((value, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {select === value.id ? (
                    <input
                      type="text"
                      onChange={(e) => setTitle(e.target.value)}
                      value={title}
                    />
                  ) : (
                    value.name
                  )}
                </td>
                <td>{value.status}</td>
                <td>
                  <button onClick={() => getDelete(value.id)}>delete</button>
                  {select === value.id ? (
                    <button onClick={() => getEditSave()}>save</button>
                  ) : (
                    <button onClick={() => getEdit(value)}>edit</button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={getClear}>clear</button>
      
    </div>
  );
}

export default App;
