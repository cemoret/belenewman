import React, { Component } from "react";

// Components
// Images & icons

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNumber: 0
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ numberSlide: this.props.listNumber });
  }

  onMouseEnterLi(id) {
    this.setState({ listNumber: id });
  }

  onMouseLeaveLi() {
    this.setState({ listNumber: null });
  }

  render() {
    const { works } = this.props;
    return works.map(({ name }, index) => {
      const { listNumber } = this.state;
      return (
        <li
          key={index}
          className=""
          onMouseEnter={() => this.onMouseEnterLi(index)}
          onMouseLeave={() => this.onMouseLeaveLi()}
        >
          <h4 className="m-0 p-1">
            {listNumber === index && <span>→&nbsp;</span>}({index + 1})&nbsp;
            {name}
          </h4>
        </li>
      );
    });
  }
}

export default WorkList;
