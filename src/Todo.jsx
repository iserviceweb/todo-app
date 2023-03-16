import React from "react";
import { BsTrash } from "react-icons/bs";

const style = {
  li: `flex justify-between bg-gray-200 p-4 my-2`,
  listRow: `flex`,
  text: `ml-2 cursor-pointer`,
};

const Todo = ({ name }) => {
  return (
    <li className={style.li}>
      <div className={style.listRow}>
        <input type="checkbox" />
        <p className={style.text}>{name}</p>
      </div>
      <button>
        <BsTrash />
      </button>
    </li>
  );
};

export default Todo;
