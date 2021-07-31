
import React from 'react';

import { Meta } from '@storybook/react';

import Menu from './menu'
import MenuItem from './menuItem'
import Submenu from './subMenu'

export default {
    title: 'Menu Component',
    component: Menu
} as Meta

export const Default = () => <div style={{ height: 300 }}>
    <Menu>
        <MenuItem>Menu A</MenuItem>
        <Submenu title='Menu B'>
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
            <MenuItem>dropdown 3</MenuItem>
        </Submenu>
        <MenuItem>Menu C</MenuItem>
    </Menu>
</div>

