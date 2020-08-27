import React from 'react';

import { Container, Role, User, Avatar } from './styles';

import ProfilePhoto from '../../assets/profile.png';

interface UserProps {
    nickname: string;
    isBot?: boolean;
    isPrincipal?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot , isPrincipal }) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />

            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserRowPrincipal: React.FC<UserProps> = ({ nickname, isPrincipal }) => {
    return (
        <User>
            <Avatar 
                className={isPrincipal ? 'principal' : ''}
            >
                {isPrincipal && <img src={ProfilePhoto} alt="User principal" />}
            </Avatar>

            <strong>{nickname}</strong>

        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponível 1</Role>   
            <UserRowPrincipal nickname="Rapza" isPrincipal/>

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