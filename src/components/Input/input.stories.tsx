
import { Meta } from '@storybook/react';

import Input from './input'

export default {
    title: 'Input Component',
    component: Input
} as Meta

export const Large = () => <Input size='lg' />

export const Small = () => <Input size='sm' />

export const Icon = () => <Input icon='arrow-down' />

export const prepend = () => <Input prepend='https://' />

export const append = () => <Input append='.com'/>