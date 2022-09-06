import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import {
    faCircleXmark,
    faCoins,
    faEarth,
    faEllipsisVertical,
    faGear,
    faInbox,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faPerson,
    faPlus,
    faQuestionCircle,
    faSignOut,
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
            children: {
                title: 'Language',
                data: [
                    {
                        code: 'En',
                        title: 'English',
                    },
                    {
                        code: 'Vie',
                        title: 'VietNam',
                    },
                ],
            },
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
    const currentUser = true;
    const userMenu = [
        {
            title: 'View profile',
            icon: <FontAwesomeIcon icon={faPerson} />,
            to: '/Profile',
        },
        {
            title: 'Get Coins',
            icon: <FontAwesomeIcon icon={faCoins} />,
            to: '/coins',
        },
        {
            title: 'Settings',
            icon: <FontAwesomeIcon icon={faGear} />,
            to: '/setting',
        },
        ...MENU_ITEM,
        {
            title: 'Log Out',
            icon: <FontAwesomeIcon icon={faSignOut} />,
            to: '/logOut',
            separare: true,
        },
    ];
    const handleOnchange = (menuItem) => {
        console.log(menuItem);
    };

    return (
        <div className={cx('wraper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <HeadlessTippy
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
                </HeadlessTippy>
                <div className={cx('active')}>
                    {currentUser ? (
                        <>
                            <Tippy content="Messager">
                                <button className={cx('action-btn')}>
                                    <FontAwesomeIcon icon={faInbox} />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button
                                rectangle
                                leftIcon={<FontAwesomeIcon icon={faPlus} />}
                            >
                                Upload
                            </Button>
                            <Button primary>Login</Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEM}
                        onChange={handleOnchange}
                    >
                        {currentUser ? (
                            <img
                                className={cx('avatar')}
                                alt="Nguyen Van A"
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8faf9aa1a1b6cfa8f70f8c1a5b733d4a~c5_100x100.jpeg?x-expires=1662602400&x-signature=BCqVYHhla%2FhiM3ccnVSRBSCW3f4%3D"
                            />
                        ) : (
                            <>
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon
                                        icon={faEllipsisVertical}
                                    />
                                </button>
                            </>
                        )}
                    </Menu>
                </div>
            </div>
        </div>
    );
}

export default Header;
