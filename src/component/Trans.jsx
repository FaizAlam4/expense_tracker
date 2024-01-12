/* eslint-disable react/prop-types */

import { useState } from "react";

function Trans({ obj, updateData, editData }) {
  const [opt, setOpt] = useState(false);
  const [newData, setnewData] = useState({
    desc: obj.desc,
    expense: obj.expense,
    cat: obj.category,
  });

  const handleEdit = () => {
    editData(
      { desc: newData.desc, exp: newData.expense, cat: newData.cat },
      obj.id
    );
    setOpt(false);
  };

  return (
    <div style={{ margin: "30px", lineHeight: "2" }}>
      Desc:{" "}
      <div>
        {opt ? (
          <input
            value={newData.desc}
            type="text"
            onChange={(e) => setnewData({ ...newData, desc: e.target.value })}
          />
        ) : (
          obj.desc
        )}
      </div>
      Expense:{" "}
      <div>
        {" "}
        {opt ? (
          <input
            value={newData.expense}
            type="text"
            onChange={(e) =>
              setnewData({ ...newData, expense: e.target.value })
            }
          />
        ) : (
          obj.expense
        )}
      </div>
      Category:{" "}
      <div>
        {opt ? (
          <select
            value={newData.cat}
            onChange={(e) => setnewData({ ...newData, cat: e.target.value })}
          >
            <option value="all">Pick</option>
            <option value="A">A</option>
            <option value="B">B</option>
          </select>
        ) : (
          obj.category
        )}
      </div>
      <button
        onClick={() => {
          updateData(obj.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setOpt((prev) => !prev);
        }}
      >
        {opt ? "Cancel" : "Edit"}
      </button>
      {opt && <button onClick={handleEdit}>Update</button>}
    </div>
  );
}

export default Trans;
