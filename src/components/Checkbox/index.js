import React from 'react';
import PropTypes from 'prop-types';
import ExtraPropTypes from 'react-extra-prop-types';
import styled from 'styled-components';
import { MdCheck } from 'react-icons/lib/md';

import { alpha, getContrastYIQ } from '../../utils/colors';
import COLORS, { THEMES, isTheme } from '../../style/colors';

class Checkbox extends React.Component {
  static propTypes = {
    className: PropTypes.string,
    defaultChecked: PropTypes.bool,
    color: PropTypes.oneOfType([
      ExtraPropTypes.color /* eslint-disable-line react/no-typos, react/no-unused-prop-types */,
      PropTypes.oneOf(Object.keys(THEMES)),
    ]),
    onChange: PropTypes.func,
    title: PropTypes.string.isRequired,
  };

  static defaultProps = {
    color: 'default',
    className: undefined,
    defaultChecked: undefined,
    onChange: () => true,
  };

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.input = React.createRef();
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  state = {
    checked: this.props.defaultChecked,
    focused: false,
  };

  componentDidMount() {
    this.focusWatcher = this.input.current.addEventListener('focus', this.onFocus);
    this.blurWatcher = this.input.current.addEventListener('blur', this.onBlur);
  }

  componentWillUnmount() {
    this.focusWatcher = this.input.current.removeEventListener('focus', this.onFocus);
    this.blurWatcher = this.input.current.removeEventListener('blur', this.onBlur);
  }

  onFocus() {
    console.log('focus');
    this.setState({
      focused: true,
    });
  }

  onBlur() {
    console.log('blur');
    this.setState({
      focused: false,
    });
  }

  onChange(event) {
    const checked = !this.state.checked;

    return this.setState(
      {
        checked,
      },
      () => this.props.onChange(event, checked)
    );
  }

  get themeVars() {
    const { color } = this.props;
    const { checked, focused } = this.state;
    const themeColor = isTheme(color) ? THEMES[color] : color;

    return {
      '--size': '1rem',
      '--border-color': themeColor,
      '--color': checked ? getContrastYIQ(themeColor) : COLORS.transparent,
      '--bg-color': checked ? themeColor : COLORS.transparent,
      '--box-shadow': focused ? `0 0 0 4px ${alpha(themeColor, 0.4)}` : 'none',
    };
  }

  render() {
    const { className, title } = this.props;

    return (
      <Wrapper className={className} style={this.themeVars}>
        <Icon />
        <Input {...this.props} onChange={this.onChange} type="checkbox" innerRef={this.input} aria-label={title} />
      </Wrapper>
    );
  }
}

export default Checkbox;

const Wrapper = styled.label`
  font-size: var(--size);
  height: 2.25rem;
  width: 2.25rem;
  border: 3px solid var(--border-color);
  display: inline-flex;
  border-radius: 3px;
  background-color: var(--bg-color);
  color: var(--color);
  padding: 0;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: var(--box-shadow);
  position: relative;
`;

const Input = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  pointer-events: none;
`;

const Icon = styled(MdCheck)`
  font-size: 1.4em;
`;
