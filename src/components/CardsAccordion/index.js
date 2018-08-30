import React from 'react';
import PropTypes from 'prop-types';

import CardsAccordionItem from './card';

export { CardsAccordionItem };

export default class CardsAccordion extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    openItem: -1,
  };

  get children() {
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        isOpen: this.isItemOpened(index),
        toggle: () => this.toggleItem(index),
      })
    );
  }

  isItemOpened = item => this.state.openItem === item;

  toggleItem = item =>
    this.setState({
      openItem: this.isItemOpened(item) ? -1 : item,
    });

  render = () => <div>{this.children}</div>;
}
