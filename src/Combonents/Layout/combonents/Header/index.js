import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import {
    faCircleXmark,
    faEarth,
    faEllipsisVertical,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faQuestionCircle,
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { Wrapper as PopperWrapper } from '~/Combonents/Popper';
import AccountItem from '~/Combonents/AccountItem';
import Button from '~/Combonents/Button';
import Menu from '~/Combonents/Popper/Menu';

const cx = classNames.bind(styles);
function Header() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 3000);
    }, []);

    const MENU_ITEM = [
        {
            title: 'English',
            icon: <FontAwesomeIcon icon={faEarth} />,
        },
        {
            title: 'Feedback and help',
            icon: <FontAwesomeIcon icon={faQuestionCircle} />,
            to: '/Feedback',
        },
        {
            title: 'Keyboard shortcuts',
            icon: <FontAwesomeIcon icon={faKeyboard} />,
        },
    ];
    return (
        <div className={cx('wraper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-result')}
                            tabindex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Account</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck="false"
                        />
                        <button className={cx('close')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('active')}>
                    <Button
                        rectangle
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        Upload
                    </Button>
                    <Button primary>Login</Button>
                    <Menu items={MENU_ITEM}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
