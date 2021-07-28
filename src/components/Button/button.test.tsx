import React from "react";
import { render, fireEvent } from '@testing-library/react';
import Button, { ButtonProps, ButtonSize, ButtonType} from "./button";

const defaultProps = {
    onClick: jest.fn()
}

const testProps: ButtonProps = {
    btnType: ButtonType.Primary,
    size: ButtonSize.Large,
    className: 'klass'
}

const disabledProps: ButtonProps = {
    disabled: true,
    onClick: jest.fn()
}

describe('test Button component', () => {
    it('should render the correct default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        const ele = wrapper.getByText('Nice') as HTMLButtonElement
        expect(ele).toBeTruthy()
        expect(ele).toBeInTheDocument()
        expect(ele.tagName).toEqual('BUTTON')
        expect(ele).toHaveClass('btn btn-default')
        expect(ele.disabled).toBeFalsy()
        fireEvent.click(ele)
        expect(defaultProps.onClick).toHaveBeenCalled()
    })
    it('should render the correct component diff props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)
        const ele = wrapper.getByText('Nice')
        expect(ele).toBeInTheDocument()
        expect(ele).toHaveClass('btn-primary klass btn-lg')
    })
    it('render a link and href', () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href="https://www.ps.com">Link</Button>)
        const ele = wrapper.getByText('Link')
        expect(ele).toBeInTheDocument()
        expect(ele.tagName).toEqual('A')
        expect(ele).toHaveClass('btn btn-link')
    })
    it('render a disabled button', () => {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>)
        const ele = wrapper.getByText('Nice') as HTMLButtonElement
        expect(ele).toBeInTheDocument()
        expect(ele.disabled).toBeTruthy()
        fireEvent.click(ele)
        expect(disabledProps.onClick).not.toHaveBeenCalled()
    })
})