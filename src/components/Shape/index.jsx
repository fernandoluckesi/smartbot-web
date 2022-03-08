import React from 'react';
import { ShapeContainer } from './styles';

export function Shape({ children, marginBottom }) {
    return (
        <ShapeContainer marginBottom={marginBottom}>
            {children}
        </ShapeContainer>
    )
};
