import Proptypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './SuggestedAccount.module.scss';
import AccountItem from '~/Combonents/SuggestedAccounts/AccountItem';

const cx = classNames.bind(styles);

function SuggestedAccount({ title, data }) {
    return (
        <div className={cx('Wrapper')}>
            <p className={cx('title')}>{title}</p>
            {data.map((account) => (
                <AccountItem key={account.id} data={account} />
            ))}

            <p className={cx('moreBtn')}>See all</p>
        </div>
    );
}

SuggestedAccount.propTypes = {
    title: Proptypes.string.isRequired,
    data: Proptypes.array,
};

export default SuggestedAccount;
