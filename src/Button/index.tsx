import React from 'react';
import { globalContext } from '../GlobalTheme';
import './index.less';

interface Props {
  text?: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}

const Button: React.FC<Props> = ({ text, disabled, style }) => {
  const { isDarkMode } = React.useContext(globalContext);

  return (
    <button
      type="button"
      className={`${isDarkMode ? 'dark-button' : 'light-button'}`}
      disabled={disabled}
      style={style}
    >
      {text}
    </button>
  );
};

export default Button;
