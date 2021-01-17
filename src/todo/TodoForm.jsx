import React, {Component} from "react";
import { connect } from "react-redux";
import Grid from "../template/Grid";
import IconButton from "../template/IconButton";
import { bindActionCreators } from "redux";
import { changeDescription, search } from "./todoActions";

class TodoForm extends Component {
  constructor(props) {
    super(props)
    this.keyHandler = this.keyHandler.bind(this)
  }

  componentDidMount() {
    this.props.search();
  }

  keyHandler(e) {
    if (e.key === "Enter") {
      e.shiftKey ? this.props.handleSearch() : this.props.handleAdd();
    } else if (e.key === "Escape") {
      this.props.handleClear();
    }
  };

  render(){
    return (
      <div role="form" className="todoForm row">
        <Grid cols="12 8 9">
          <input
            id="description"
            className="form-control"
            placeholder="Adicione uma tarefa"
            value={this.props.description}
            onChange={this.props.changeDescription}
            onKeyUp={this.keyHandler}
          />
        </Grid>
        <Grid cols="12 4 3">
          <IconButton
            // eslint-disable-next-line
            style="primary"
            icon="plus"
            onClick={this.props.handleAdd}
          />
          <IconButton
            // eslint-disable-next-line
            style="info"
            icon="search"
            onClick={this.props.handleSearch}
          />
          <IconButton
            // eslint-disable-next-line
            style="light"
            icon="close"
            onClick={this.props.handleClear}
          />
        </Grid>
      </div>
    );  
  }
}

function mapStateToProps(state) {
  return {description: state.todo.description}
}

const mapDispatchToProps = (dispatch) => bindActionCreators({changeDescription, search},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TodoForm)