import React from 'react';

import ServerButton from '../ServerButton';

import { Container , Separator } from './styles';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome />

            <Separator />

            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={9} />
            <ServerButton mentions={1} hasNotifications/>
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton mentions={17} />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />

        </Container>
    );
};

export default ServerList;