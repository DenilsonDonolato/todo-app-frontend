import React from "react";
import { connect } from "react-redux";
import IconButton from "../template/IconButton";
import { bindActionCreators } from "redux";
import { markAsDone, markAsPending, remove } from "./todoActions";

const TodoList = (props) => {
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
            onClick={() => props.markAsDone(todo)}
          />
          <IconButton
            // eslint-disable-next-line
            style="warning"
            hide={!todo.done}
            icon="undo"
            onClick={() => props.markAsPending(todo)}
          />
          <IconButton
            // eslint-disable-next-line
            style="danger"
            hide={!todo.done}
            icon="trash-o"
            onClick={() => props.remove(todo)}
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

const mapStateToProps = state => ({list: state.todo.list})
const mapDispatchToProps = dispatch => bindActionCreators({markAsDone, markAsPending, remove}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);