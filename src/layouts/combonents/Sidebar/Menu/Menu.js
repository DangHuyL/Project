import classNames from 'classnames/bind';
import Proptypes from 'prop-types';

import styles from './Menu.module.scss';

const cx = classNames.bind(styles);

function Menu({ children }) {
    return <nav className={cx('Wrapper')}>{children}</nav>;
}

Menu.propTypes = {
    children: Proptypes.node,
};

export default Menu;
