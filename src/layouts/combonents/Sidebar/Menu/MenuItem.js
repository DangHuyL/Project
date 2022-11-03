import Proptypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './Menu.module.scss';
import Menu from './Menu';

const cx = classNames.bind(styles);

function MenuItem({ title, to, icon, activeIcon }) {
    return (
        <NavLink
            className={(nav) => cx('menu-item', { active: nav.isActive })}
            to={to}
        >
            <span className={cx('icon')}>{icon}</span>
            <span className={cx('active-icon')}>{activeIcon}</span>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

Menu.proptypes = {
    title: Proptypes.string.isRequired,
    to: Proptypes.string.isRequired,
    icon: Proptypes.node,
    activeIcon: Proptypes.activeIcon,
};

export default MenuItem;
