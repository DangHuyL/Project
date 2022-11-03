import classNames from 'classnames/bind';
import { useState, useEffect } from 'react';

import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    FollowingActiveIcon,
    FollowingIcon,
    HomeActiveIcon,
    HomeIcon,
    LiveActiveIcon,
    LiveIcon,
} from '~/Combonents/Icon';
import SuggestedAccount from '~/Combonents/SuggestedAccounts';
import * as useService from '~/services/userService';

const cx = classNames.bind(styles);

function Sidebar() {
    const [suggested, setSuggested] = useState([]);
    useEffect(() => {
        const fetchApi = async () => {
            const data = await useService.getSuggested({
                page: 1,
                per_page: 5,
            });
            setSuggested(data);
        };
        fetchApi();
    }, []);
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<FollowingIcon />}
                    activeIcon={<FollowingActiveIcon />}
                />
                <MenuItem
                    title="Live"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>
            <SuggestedAccount title="Suggested accounts" data={suggested} />
            {/* <SuggestedAccount title="Following accounts " /> */}
        </aside>
    );
}

export default Sidebar;
