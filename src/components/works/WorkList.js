import React, { Component } from "react";

// Components
// Images & icons

class WorkList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listNumber: 0,
      listSelected: 0
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

  sendData = index => {
    this.setState({ listSelected: index });
    this.props.parentCallback(index);
  };

  render() {
    const { works } = this.props;
    return works.map(({ name }, index) => {
      const { listNumber, listSelected } = this.state;
      return (
        <li
          key={index}
          className=""
          onClick={() => this.sendData(index)}
          onMouseEnter={() => this.onMouseEnterLi(index)}
          onMouseLeave={() => this.onMouseLeaveLi()}
        >
          <h4 className="m-0 p-1">
            {listNumber === index || listSelected === index ? (
              <span>→&nbsp;</span>
            ) : (
              <span />
            )}
            ({index + 1})&nbsp;
            {name}
          </h4>
        </li>
      );
    });
  }
}

export default WorkList;
