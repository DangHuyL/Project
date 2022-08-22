import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('wraper')}>
            <div className={cx('inner')}>
                <h2>Header</h2>
            </div>
        </div>
    );
}

export default Header;
