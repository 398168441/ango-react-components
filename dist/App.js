import React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Button from 'components/Button/button';
import Menu from 'components/Menu/menu';
import MenuItem from 'components/Menu/menuItem';
import SubMenu from 'components/Menu/subMenu';
import Icon from 'components/Icon/icon';
library.add(fas);
function App() {
    return (React.createElement("div", { className: "App" },
        React.createElement(Icon, { icon: 'arrow-down', theme: 'success', size: '5x' }),
        React.createElement(Menu, { defaultIndex: '0', defaultOpenSumMenus: ['2'], onSelect: function (index) { return alert(index); } },
            React.createElement(MenuItem, null, "active"),
            React.createElement(MenuItem, { disabled: true }, "disabled"),
            React.createElement(SubMenu, { title: 'dropdown' },
                React.createElement(MenuItem, null, "dropdown1"),
                React.createElement(MenuItem, null, "dropdown2"),
                React.createElement(MenuItem, null, "dropdown3")),
            React.createElement(MenuItem, null, "xyz")),
        React.createElement(Button, { onClick: function () { console.log(123); } }, "Hello"),
        React.createElement(Button, { autoFocus: true, btnType: 'primary', size: 'lg' }, "Hello"),
        React.createElement(Button, { btnType: 'link', href: "http://www.baidu.com", target: "_blank" }, "Hello")));
}
export default App;
