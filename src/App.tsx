import React from 'react';
import Button, { ButtonType, ButtonSize } from 'components/Button/button'
import Menu from 'components/Menu/menu'
import MenuItem from 'components/Menu/menuItem'

function App() {
  return (
    <div className="App">
      <Menu defaultIndex={0} mode='vertical'>
        <MenuItem index={0}>
          active
        </MenuItem>
        <MenuItem index={1} disabled>
          disabled
        </MenuItem>
        <MenuItem index={2}>
          xyz
        </MenuItem>
      </Menu>

      <Button onClick={() => { console.log(123) }}>Hello</Button>

      <Button autoFocus btnType={ButtonType.Primary} size={ButtonSize.Large}>Hello</Button>
      
      <Button btnType={ ButtonType.Link} href="http://www.baidu.com" target="_blank">Hello</Button>
    </div>
  );
}

export default App;
