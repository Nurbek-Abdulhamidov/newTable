import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([
    { id: 1, name: "Nurbek" },
    { id: 2, name: "Sanjar" },
    { id: 3, name: "Temur" },
    { id: 4, name: "Ali" },
  ]);

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [select, setSelect] = useState(null);

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
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
