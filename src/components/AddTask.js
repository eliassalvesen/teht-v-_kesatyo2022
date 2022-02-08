import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Lisää uusi tehtävä");
      return;
    }

    onAdd({ text });

    setText("");
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="from-control">
        <input
          type="text"
          placeholder="Lisää uusi tehtävä..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <input type="submit" value="+" className="btn-block" />
    </form>
  );
};

export default AddTask;
