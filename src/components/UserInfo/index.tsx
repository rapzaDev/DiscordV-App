import React from 'react';

import ProfilePhoto from '../../assets/profile.png';

import { 
    Container,
    Profile,
    Avatar,
    UserData,
    Icons,
    MicIcon,
    HeadphoneIcon,
    SettingsIcon
 } from './styles';

const UserInfo: React.FC = () => {
    return (
        <Container>
            <Profile>
                <Avatar >
                { <img src={ProfilePhoto} alt="User's"/> }
                </Avatar>
                <UserData>
                    <strong>Rapza</strong>
                    <span>#6641</span>
                </UserData>
            </Profile>

            <Icons>
                <MicIcon />
                <HeadphoneIcon />
                <SettingsIcon />
            </Icons>
        </Container>
    );
}

export default UserInfo;