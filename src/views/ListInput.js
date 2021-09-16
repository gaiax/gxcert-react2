import React from "react";

class ListInput extends React.Component {

  getValues() {
    const elements = Array.from(document.getElementsByClassName("list-input-element"));
    const values = elements.map(element => {
      return element.value;
    });
    return values;
  }
  onChange() {
    console.log(this.props);
    this.props.onChange(this.getValues());
  }
  render() {
    const elements = [];
    const that = this;
    for (let i = 0; i < this.props.count; i++) {
      elements.push(
        <div className="list-input-cell">
          <input type="text" className="list-input-element" onChange={this.onChange.bind(this)}/>
          <button className="list-input-remove" onClick={(evt) => {
            evt.target.parentNode.remove();
            that.props.onChange(that.getValues());
          }}>削除</button>
        </div>
      );
    }

    return (
      <div className="list-input">
        {elements}
        <button className="list-input-add" onClick={this.props.addTo}>追加</button>
      </div>
    );
  }
}

export default ListInput;
