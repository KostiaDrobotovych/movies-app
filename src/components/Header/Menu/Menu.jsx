import React, { Component } from 'react';
import s from './Menu.module.css';

class Menu extends Component {
  state = {
    open: this.props.open ? this.props.open : false,
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.open !== this.state.open) {
      this.setState({ open: nextProps.open });
    }
  }

  render() {
    const { children, open } = this.props;
    return (
      <div>
        <div className={open ? s.container__open : s.container__close}>
          {this.state.open ? (
            <div className={s.menu__list}>{children}</div>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Menu;
