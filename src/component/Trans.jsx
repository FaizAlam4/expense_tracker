/* eslint-disable react/prop-types */

import { useState } from "react";

function Trans({ obj, updateData, editData }) {
  const [opt, setOpt] = useState(false);
  const [newdesc, setNewdesc] = useState("");
  const [newexp, setNewexp] = useState(0);
  const [newcat, setNewcat] = useState('');


  const handleEdit = () => {
 
    editData({desc:newdesc, exp:newexp,cat:newcat},obj.id)
    setOpt(false)
  };

  return (
    <div style={{ margin: "30px", lineHeight: "2" }}>
      <div>Desc:{obj.desc}</div>
      <div>Expense: {obj.expense}</div>
      <div>Category: {obj.category}</div>
      <button
        onClick={() => {
          updateData(obj.id);
        }}
      >
        Delete
      </button>
      <button
        onClick={() => {
          setOpt((prev)=>!prev);
        }}
      >
        Edit
      </button>

      {opt && (
        <div>
          new Desc:{" "}
          <input
            value={newdesc}
            onChange={(e) => {
              setNewdesc(e.target.value);
            }}
            type="text"
          />
          <br />
          new Expense:{" "}
          <input
            value={newexp}
            type="text"
            onChange={(e) => {
              setNewexp(e.target.value);
            }}
          />
          <br />
         new Category: <select value={newcat} onChange={(e)=>{setNewcat(e.target.value)}} name="" id="">
            <option value="all" selected>Pick</option>
            <option value="A" >A</option>
            <option value="B">B</option>
          </select>
          <br />
          <button
            onClick={() => {
              handleEdit();
            }}
          >
            Update
          </button>
        </div>
      )}
    </div>
  );
}

export default Trans;
