import React from "react";
import IconButton from "../template/IconButton";

export default (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((todo) => (
      <tr key={todo._id}>
        <td className={todo.done ? "markedAsDone" : ""}>{todo.description}</td>
        <td>
          <IconButton
            // eslint-disable-next-line
            style="success"
            hide={todo.done}
            icon="check"
            onClick={() => props.handleMarkAsDone(todo)}
          />
          <IconButton
            // eslint-disable-next-line
            style="warning"
            hide={!todo.done}
            icon="undo"
            onClick={() => props.handleMarkAsPending(todo)}
          />
          <IconButton
            // eslint-disable-next-line
            style="danger"
            hide={!todo.done}
            icon="trash-o"
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Descrição</th>
          <th className="tableActions">Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
