import React from 'react';
import GlobalTheme from '../../GlobalTheme';
import Button from '../index';

export default () => {
  return (
    <>
      <Button text="Hello" disabled={true} />
      <GlobalTheme isDarkMode={true}>
        <Button text="World" />
      </GlobalTheme>
      <Button text="Hello" style={{ color: 'red' }} />
    </>
  );
};
