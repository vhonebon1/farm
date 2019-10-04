import React from 'react';
import Chevron from '../icons/chevron.svg';

class Dropdown extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: this.props.options,
      selected: 0,
      showOptions: false
    }
  }

  handleSelect = (index) => {
    this.props.customOnClick(index);
    this.setState({ selected: index, showOptions: false });
  }

  toggleShowOptions = () => {
    this.setState({ showOptions: !this.state.showOptions });
  }

  render() {
    const { showOptions, options, selected } = this.state;
    return(
      <div className="dropdown__wrapper">
        <div className="dropdown" onClick={() => this.toggleShowOptions()}>
          {options[selected].label}
          <img src={Chevron} alt="" />
        </div>
        { showOptions &&
          <div className="dropdown__options">
            { options.map((option, index) =>
              <div className={`dropdown__option ${index === this.state.selected ? 'selected' : 'unselected'}`} onClick={() => this.handleSelect(index)}>{option.label}</div>
            )}
          </div>
        }
      </div>
    )
  }

}

export default Dropdown;
