import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Proptypes from 'prop-types';

import Button from '~/Combonents/Button';
import Image from '~/Combonents/Image';
import styles from './AccountPreview.module.scss';

const cx = classNames.bind(styles);

function AccountPreview({ data }) {
    return (
        <div className={cx('Wrapper')}>
            <header className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src={data.avatar}
                    alt={data.nick_name}
                />
                <Button primary className={cx('button')}>
                    Follow
                </Button>
            </header>
            <p className={cx('name')}>
                <strong>{`${data.first_name} ${data.last_name}`}</strong>
                <FontAwesomeIcon icon={faCheckCircle} className={cx('check')} />
            </p>
            <p className={cx('nick_name')}>{data.nickname}</p>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>{data.followers_count}</strong>
                <span className={cx('lable')}>Followers</span>
                <strong className={cx('value')}>{data.likes_count}</strong>
                <span className={cx('lable')}>Likes</span>
            </p>
        </div>
    );
}

AccountPreview.propTypes = {
    data: Proptypes.object.isRequired,
};

export default AccountPreview;
