import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/Combonents/Popper';
import MenuItem from './MenuItem';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
function Menu({
    children,
    items = [],
    onChange,
    hideOnclick = false,
    ...passProps
}) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory((prev) => [...prev, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    const handleBackMenu = () => {
        setHistory((prev) => prev.slice(0, prev.length - 1));
    };
    const handleRenderMenu = (attrs) => (
        <div className={cx('Menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header title="Language" onBack={handleBackMenu} />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    );
    const handleResetToFirstPage = () => setHistory((prev) => prev.slice(0, 1));
    return (
        <Tippy
            {...passProps}
            delay={[0, 700]}
            placement="bottom-end"
            interactive
            render={handleRenderMenu}
            onHide={handleResetToFirstPage}
            hideOnClick={hideOnclick}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    onChange: PropTypes.func,
    hideOnclick: PropTypes.bool,
};

export default Menu;
