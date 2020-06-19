import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {

    const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>

    useEffect(() => {
        const div = messagesRef.current

        if(div !== null && div !== undefined){
            div.scrollTop = div.scrollHeight
        }

    }, [messagesRef])

    return ( 

        <Container>
            <Messages ref={ messagesRef } > 

                {Array.from(Array(15).keys()).map((n) => (

                    <ChannelMessage 
                        key={n}
                        author="Yuri Oliveira"
                        date="05/03/199"
                        content="Hoje é o meu aniversário!"
                    />

                ))}

                <ChannelMessage 
                    author="Diego Fernandes"
                    date="05/03/199"
                    content={
                        <>
                            <Mention>@Yuri Oliveira</Mention>, seja bem vindo!
                        </>
                    }
                    hasMention
                    isBot
                />

            </Messages>

            <InputWrapper>

                <Input type="text" placeholder="Conversar em #chat-livre" />
                <InputIcon />

            </InputWrapper>

        </Container>
    )
}

export default ChannelData;
