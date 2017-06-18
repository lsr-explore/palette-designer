import React, {Component, PropTypes} from 'react';

export default class Element extends Component {
  static propTypes = {
    color: PropTypes.string,
    opacity: PropTypes.number,
    name: PropTypes.string
  }

  render() {
    const {color, opacity, name} = this.props; // eslint-disable-line no-shadow
    const styles = require('./Element.css');
    const divStyle = {
      background: color
    }
    return (
      <div className='element'>
        <div className='colorchip' style={divStyle}></div>
        <span className='name'>{name}</span>
      </div>
    );
  }
}
