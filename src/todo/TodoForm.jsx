import React from "react";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";

export default (props) => {
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
          onChange={props.handleChange}
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
