import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Button from 'components/Button/button'
import Menu from 'components/Menu/menu'
import MenuItem from 'components/Menu/menuItem'
import SubMenu from 'components/Menu/subMenu';
import Icon from 'components/Icon/icon'
library.add(fas)

function App() {
  return (
    <div className="App">
      <Icon icon='arrow-down' theme='success' size='5x' />
      <Menu
        defaultIndex='0'
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

      <Button autoFocus btnType='primary' size='lg'>Hello</Button>
      
      <Button btnType='link' href="http://www.baidu.com" target="_blank">Hello</Button>
    </div>
  );
}

export default App;
