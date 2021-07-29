import React from 'react';
import Button, { ButtonType, ButtonSize } from 'components/Button/button'
import Menu from 'components/Menu/menu'
import MenuItem from 'components/Menu/menuItem'
import SubMenu from 'components/Menu/subMenu';

function App() {
  return (
    <div className="App">
      <Menu
        defaultIndex='0'
        mode='vertical'
        defaultOpenSumMenus={['2']}
        onSelect={index => alert(index)}>
        <MenuItem>
          active
        </MenuItem>
        <MenuItem disabled>
          disabled
        </MenuItem>
        <SubMenu title='dropdown'>
          <MenuItem>dropdown1</MenuItem>
          <MenuItem>dropdown2</MenuItem>
          <MenuItem>dropdown3</MenuItem>
        </SubMenu>
        <MenuItem>
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
