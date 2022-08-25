import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.mudule.scss';
const cx = classNames.bind(styles);

function AccountItem({ Account }) {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/330b0340b5b7c8e476c67d9b1462954a~c5_100x100.jpeg?x-expires=1661587200&x-signature=PybyrD16UZEcLZdInXlNf0i%2F5ho%3D"
                alt="Kim lien"
            />
            <div className={cx('infor')}>
                <p className={cx('name')}>
                    <span>Dao Thi Kim Lien</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </p>
                <span className={cx('useName')}>Dlien</span>
            </div>
        </div>
    );
}

export default AccountItem;
