# Button

```tsx
import React from 'react';
import GlobalTheme from '../GlobalTheme';
import Button from './index';

export default () => {
  return (
    <>
      <Button text="Hello" />
      <GlobalTheme isDarkMode={true}>
        <Button text="World" />
      </GlobalTheme>
    </>
  );
};
```
