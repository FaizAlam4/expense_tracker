import "./Expense.css";
import { useState } from "react";
import Trans from "./Trans";
import { v4 as uuidv4 } from "uuid";

function Expense() {
  const [desc, setDesc] = useState("");
  const [expense, setExpense] = useState(0);
  const [cat, setCat] = useState("");
  const [data, setData] = useState([]);
  //   const [val,setVal]=useState({desc:'',exp:0})

  const handleFunc = () => {
    setData([
      ...data,
      { desc: desc, expense: expense, category: cat, id: uuidv4() },
    ]);
    setExpense(0);
    setDesc("");
  };

  const updateData = (id) => {
    let newData = data.filter((ele) => ele.id != id);
    setData(newData);
  };

  const editData = (val, id) => {
    data.map((ele) => {
      if (ele.id == id) {
        ele.expense = val.exp;
        ele.desc = val.desc;
        ele.category=val.cat;
      }
    });
  };
  return (
    <div className="form">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFunc();
        }}
      >
        <label htmlFor="lb1">Description: </label>
        <input
          id="lb1"
          type="text"
          value={desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
          required
        />
        <br />
        <br />
        <label htmlFor="lb2">Expense: </label>
        <input
          id="lb2"
          type="text"
          value={expense}
          onChange={(e) => {
            setExpense(e.target.value);
          }}
          required
        />
        <br />
        <br />
        <label htmlFor="">Category:</label>
        <select
          onChange={(e) => {
            setCat(e.target.value);
          }}
          value={cat}
          required
        >
          <option value="all" selected>Pick</option>
          <option value="A">A</option>
          <option value="B">B</option>
        </select>

        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
  

      <div>
        <h2>Items Entered:</h2>
        <div>
          {data.map((obj, index) => {
            return (
              <Trans
                key={index}
                updateData={updateData}
                obj={obj}
                editData={editData}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Expense;
