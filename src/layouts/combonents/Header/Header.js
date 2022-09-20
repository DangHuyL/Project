import images from '~/assets/images';
import styles from './Header.module.scss';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoins,
    faEarth,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faPerson,
    faPlus,
    faQuestionCircle,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Button from '~/Combonents/Button';
import Menu from '~/Combonents/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/Combonents/Icon';
import Image from '~/Combonents/Image';
import Search from '~/layouts/combonents/Search';
import { Link } from 'react-router-dom';
import routes from '~/config/routes';

const cx = classNames.bind(styles);
function Header() {
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
    const currentUser = false;
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
                <Link to={routes.home} className={cx('logo-link')}>
                    <img src={images.logo} alt="tiktok" />
                </Link>
                <Search />
                <div className={cx('active')}>
                    <Button
                        rectangle
                        leftIcon={<FontAwesomeIcon icon={faPlus} />}
                    >
                        Upload
                    </Button>
                    {currentUser ? (
                        <>
                            <Tippy content="Inbox">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Messager">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button to primary>
                                Login
                            </Button>
                        </>
                    )}

                    <Menu
                        items={currentUser ? userMenu : MENU_ITEM}
                        onChange={handleOnchange}
                    >
                        {currentUser ? (
                            <Image
                                className={cx('avatar')}
                                alt="Nguyen Van A"
                                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/8faf9aa1a1b6cfa8f70f8c1a5b733d4a~c5_100x100.jpeg?x-expires=1662602400&x-signature=BCqVYHhla%2FhiM3ccnVSRBSCW3f4%3D"
                                fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
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
