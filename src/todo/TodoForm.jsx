import React from "react";
import { connect } from "react-redux";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";
import { bindActionCreators } from "redux";
import { changeDescription } from "./todoActions";

const TodoForm = (props) => {
  const keyHandler = (e) => {
    if (e.key === "Enter") {
      e.shiftKey ? props.handleSearch() : props.handleAdd();
    } else if (e.key === "Escape") {
      props.handleClear();
    }
  };

  return (
    <div role="form" className="todoForm row">
      <Grid cols="12 8 9">
        <input
          id="description"
          className="form-control"
          placeholder="Adicione uma tarefa"
          value={props.description}
          onChange={props.changeDescription}
          onKeyUp={keyHandler}
        />
      </Grid>
      <Grid cols="12 4 3">
        <IconButton
          // eslint-disable-next-line
          style="primary"
          icon="plus"
          onClick={props.handleAdd}
        />
        <IconButton
          // eslint-disable-next-line
          style="info"
          icon="search"
          onClick={props.handleSearch}
        />
        <IconButton
          // eslint-disable-next-line
          style="light"
          icon="close"
          onClick={props.handleClear}
        />
      </Grid>
    </div>
  );
};

function mapStateToProps(state) {
  return {description: state.todo.description}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({changeDescription},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)