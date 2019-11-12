import React, { Component } from 'react';
import Touchable from 'rmc-feedback';

export interface PropsType {
  prefixCls: string;
  disabled?: boolean;
  role?: string;
  className?: string;
  unselectable?: string;
}

export default class InputHandler extends Component<PropsType, {}> {
  render() {
    const {
      prefixCls, disabled, ...otherProps
    } = this.props;
    return (
      <Touchable
        disabled={disabled}
        activeClassName={`${prefixCls}-handler-active`}
      >
        <span {...otherProps} />
      </Touchable>
    );
  }
}
