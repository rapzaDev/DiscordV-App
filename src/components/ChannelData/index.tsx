import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage,{ Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {
    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

    useEffect( () => {
        const div = messagesRef.current;

        if(div) {
            div.scrollTop = div.scrollHeight;
        }
    }, [messagesRef]);

    return (
        <Container>
            <Messages ref={messagesRef}>
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />
                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />

                <ChannelMessage 
                    author="Tobias"
                    date="13/11/2020"
                    content={
                        <>
                            <Mention>@Rapza</Mention>, hoje vamos brincar depois que você estudar?
                        </>
                    }
                />

                <ChannelMessage 
                    author="Rapza"
                    date="12/09/2020"
                    content="Hoje é meu aniversário!"
                />

            </Messages>  

            <InputWrapper>
                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />
            </InputWrapper>              
        </Container>
    );
}

export default ChannelData;