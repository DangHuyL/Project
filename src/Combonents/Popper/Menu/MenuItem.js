import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '~/Combonents/Button';
import styles from './Menu.module.scss';
import Menu from '.';
const cx = classNames.bind(styles);

function MenuItem({ data, onClick }) {
    const classes = cx('menu-item', {
        separare: data.separare,
    });
    return (
        <Button
            className={classes}
            leftIcon={data.icon}
            to={data.to}
            onClick={onClick}
        >
            {data.title}
        </Button>
    );
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
};
export default MenuItem;
