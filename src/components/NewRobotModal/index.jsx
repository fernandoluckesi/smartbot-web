import React from 'react';
import Modal from 'react-modal';
import { Container, Header } from './styles';

export function NewRobotModal({ isOpen, onRequestClose }) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <Container>
                <Header>
                    <p>Adicionar novo Robô</p>
                    <h1>Vamos criar seu robô</h1>
                    <p>Preencha as informações abaixo:</p>
                </Header>
            </Container>
        </Modal>
    )
}