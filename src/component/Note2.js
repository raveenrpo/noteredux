import React, { useState } from "react";
import { add } from "./Noteslice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const Note2 = () => {
  const [formdata, setdata] = useState({
    title: "",
    description: "",
    color: "",
    status: "",
  });

  const dispatch = useDispatch();
  const nav = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setdata((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
    dispatch(add(formdata));
    setdata({ title: "", description: "", color: "", status: "" });
    nav("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formdata.title}
          onChange={handleChange}
          placeholder="title"
        />
        <br />
        <input
          type="text"
          name="description"
          value={formdata.description}
          onChange={handleChange}
          placeholder="description"
        />
        <br />
        <input
          type="text"
          name="color"
          value={formdata.color}
          onChange={handleChange}
          placeholder="color"
        />
        <br />
        <input
          type="text"
          name="status"
          value={formdata.status}
          onChange={handleChange}
          placeholder="status"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Note2;
