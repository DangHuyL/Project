import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';
import Proptypes from 'prop-types';

import styles from './SuggestedAccount.module.scss';
import Image from '~/Combonents/Image';
import config from '~/config';
import { Wrapper as PopperWrapper } from '~/Combonents/Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);
function AccountItem({ data }) {
    const renderPreview = (props) => {
        return (
            <div className={cx('Preview')} tabIndex={-1} {...props}>
                <PopperWrapper>
                    <AccountPreview data={data} />
                </PopperWrapper>
            </div>
        );
    };
    return (
        <div>
            <Tippy
                interactive
                offset={[-20, 0]}
                delay={[800, 0]}
                placement={'bottom'}
                render={renderPreview}
            >
                <Link className={cx('account-item')} to={config.routes.profile}>
                    <Image
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.nickname}
                    />
                    <div className={cx('infor')}>
                        <p className={cx('name')}>
                            <strong>{`${data.first_name} ${data.last_name}`}</strong>
                            {data.tick && (
                                <FontAwesomeIcon
                                    icon={faCheckCircle}
                                    className={cx('check')}
                                />
                            )}
                        </p>

                        <p className={cx('nickName')}>{data.nickname}</p>
                    </div>
                </Link>
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {
    data: Proptypes.object.isRequired,
};

export default AccountItem;
