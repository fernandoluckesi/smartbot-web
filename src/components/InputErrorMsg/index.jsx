import React from 'react';
import { Container, TextError } from './styles';

export function InputErrorMsg({ showError, errorMsg }) {
    return (
        <>
            {
                showError
                &&
                <Container>
                    <TextError>
                        {errorMsg}
                    </TextError>
                </Container>
            }
        </>
    );
}
