import React from 'react';
import { Container, TextMessage } from './styles';

export function AlertMessage({ message, type, isOpen }) {
    return (
        <>
            {
                isOpen &&
                <Container type={type}>
                    <TextMessage>
                        {message}
                    </TextMessage>
                </Container>
            }
        </>
    );
}