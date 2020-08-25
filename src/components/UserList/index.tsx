import React from 'react';

import { Container, Role, User, Avatar } from './styles';

interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível 1</Role>   
            <UserRow nickname="Rapza" />

            <Role>Offline - 18</Role>
            <UserRow nickname="Tobias" isBot />   
            <UserRow nickname="Drica" isBot />
            <UserRow nickname="Ana P" />  
            <UserRow nickname="Gustavo" />
            <UserRow nickname="Simba" />
            <UserRow nickname="Linda" />
            <UserRow nickname="Mia" />
            <UserRow nickname="Mary" />
            <UserRow nickname="Nino" />
            <UserRow nickname="Tommy" />
            <UserRow nickname="Bengy" />
            <UserRow nickname="Angelito" />
            <UserRow nickname="Luna" />
            <UserRow nickname="Fulano" />
            <UserRow nickname="Ciclano" />
            <UserRow nickname="Tomano" />
            <UserRow nickname="Marley" />
            <UserRow nickname="GP" />

        </Container>
    );
}

export default UserList;