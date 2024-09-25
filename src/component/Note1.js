import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchnote } from "./Noteslice";
const Note1 = () => {
  const note = useSelector((state) => state.note);
  const dispatch = useDispatch();
  const [filterid, setfilter] = useState(null);
  const [pendingid, setpendingid] = useState(null);
  const [completed, setcompleted] = useState([]);
  const [pending, setpending] = useState([]);
  const [datas, setdata] = useState([note]);
  console.log(datas);
  console.log(note);
  const nav = useNavigate();
  const clk = () => {
    nav("/two");
    dispatch(fetchnote());
  };
  const flt = () => {
    setpendingid(false);

    setfilter(true);
    const arr = note.filter((v) => {
      return v.status === "completed";
    });
    console.log(arr);
    if (arr) setcompleted(arr);
  };
  const dbclk = () => {
    setfilter(null);
  };

  const pen = () => {
    setfilter(false);

    setpendingid(true);
    const ar = note.filter((v) => {
      return v.status === "pending";
    });
    if (ar) setpending(ar);
  };
  return (
    <div>
      <button onClick={clk} onDoubleClick={dbclk}>
        ADD
      </button>
      {/* <select>
        <option onSelect={flt}>
          <button onClick={flt} onDoubleClick={dbclk}>
            Completed
          </button>
        </option>
        <option onSelect={pen}>
          <button onClick={pen} onDoubleClick={dbclk}>
            pending
          </button>
        </option>
      </select> */}
      <button onClick={flt} onDoubleClick={dbclk}>
        Completed
      </button>
      <button onClick={pen} onDoubleClick={dbclk}>
        pending
      </button>
      {filterid ? (
        <ul>
          {completed.map((v) => {
            return (
              <li>
                <div style={{ background: v.color }}>
                  <h4>{v.title}</h4>
                  <h5>{v.description}</h5>
                  <h5>{v.color}</h5>
                </div>
              </li>
            );
          })}
        </ul>
      ) : pendingid ? (
        <ul>
          {pending.map((v) => {
            return (
              <li>
                <div style={{ background: v.color }}>
                  <h4>{v.title}</h4>
                  <h5>{v.description}</h5>
                  <h5>{v.color}</h5>
                </div>
              </li>
            );
          })}
        </ul>
      ) : (
        <ul>
          {note.map((v) => {
            return (
              <li>
                <div style={{ background: v.color }}>
                  <h4>{v.title}</h4>
                  <h5>{v.description}</h5>
                  <h5>{v.color}</h5>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Note1;
