
import React from 'react';

import { Meta } from '@storybook/react';

import Button from './button'

export default {
    title: 'Button Component',
    component: Button
} as Meta

export const Primary = () => <Button btnType='primary'>hello</Button>
export const Large = () => <Button btnType='danger' size='lg'>hello</Button>
export const Small = () => <Button btnType='primary' size='sm'>hello</Button>
export const Link = () => <Button btnType='link'>hello</Button>