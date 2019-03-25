import React, { HTMLAttributes } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

import { errorsWallet } from '../../util/error_messages';
import { themeModalStyle } from '../../util/theme';
import { ModalDisplay } from '../../util/types';

import { Button } from './button';
import { CloseModalButton } from './icons/close_modal_button';

interface Props extends HTMLAttributes<HTMLDivElement> {
    isOpen: boolean;
    closeModal: any;
    noMetamaskType: ModalDisplay;
    connectWallet: () => any;
}

const ModalContent = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    width: 310px;
`;

const ModalTitle = styled.h1`
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 1.2;
    margin: 0 0 25px;
    text-align: center;
`;

const ModalText = styled.p`
    color: #666;
    font-size: 16px;
    font-weight: normal;
    line-height: 1.5;
    margin: 0 0 25px;
    padding: 0;
    text-align: center;

    &:last-child {
        margin-bottom: 0;
    }
`;

const ModalTextLink = styled.a`
    color: #999;
    cursor: pointer;
    font-size: 13px;
    text-decoration: underline;
`;

const IconContainer = styled.div`
    align-items: center;
    display: flex;
    height: 62px;
    justify-content: center;
    margin-bottom: 30px;

    svg {
        height: 52px;
        width: 52px;
    }
`;

const ButtonStyled = styled(Button)`
    width: 100%;
`;

const LinkButton = styled.a`
    color: #fff;
    text-decoration: none;
`;

const mmIcon = () => {
    return (
        <svg width="61" height="56" viewBox="0 0 61 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M57.1273 0L34.1201 17.4053L38.202 7.18916L57.1273 0Z" fill="#E2761B" />
            <path d="M3.69141 0L26.6985 17.7837L22.6166 7.18916L3.69141 0Z" fill="#E4761B" />
            <path d="M48.9634 40.4866L42.655 50.3244L56.014 54.1081L59.7248 40.865L48.9634 40.4866Z" fill="#E4761B" />
            <path d="M1.09399 40.865L4.80482 54.1081L18.1638 50.3244L11.8554 40.4866L1.09399 40.865Z" fill="#E4761B" />
            <path
                d="M17.4215 24.2155L13.7107 29.8911L26.6986 30.6479L26.3275 16.2695L17.4215 24.2155Z"
                fill="#E4761B"
            />
            <path d="M43.3974 24.2155L34.1204 16.2695V30.6479L47.1083 29.8911L43.3974 24.2155Z" fill="#E4761B" />
            <path d="M18.1636 50.3247L25.9563 46.5409L19.2768 40.8652L18.1636 50.3247Z" fill="#E4761B" />
            <path d="M34.8625 46.5409L42.6553 50.3247L41.542 40.8652L34.8625 46.5409Z" fill="#E4761B" />
            <path d="M42.655 50.3241L34.8623 46.5403L35.2334 51.4592V53.7294L42.655 50.3241Z" fill="#D7C1B3" />
            <path d="M18.1638 50.3236L25.5855 53.729V51.4587L25.9566 46.5398L18.1638 50.3236Z" fill="#D7C1B3" />
            <path d="M25.5853 37.46L18.9058 35.5681L23.7298 33.2979L25.5853 37.46Z" fill="#233447" />
            <path d="M35.2334 37.46L37.0888 33.2979L41.9129 35.5681L35.2334 37.46Z" fill="#233447" />
            <path d="M18.1636 50.3243L19.2769 40.4866L11.8552 40.8649L18.1636 50.3243Z" fill="#CD6116" />
            <path d="M41.542 40.4866L42.6552 50.3243L48.9636 40.8649L41.542 40.4866Z" fill="#CD6116" />
            <path
                d="M47.108 29.8921L34.1201 30.6488L35.2334 37.4596L37.0888 33.2975L41.9129 35.5677L47.108 29.8921Z"
                fill="#CD6116"
            />
            <path
                d="M18.9056 35.5677L23.7297 33.2975L25.5851 37.4596L26.6983 30.6488L13.7104 29.8921L18.9056 35.5677Z"
                fill="#CD6116"
            />
            <path d="M13.7109 29.8926L19.2772 40.8655L18.9061 35.5682L13.7109 29.8926Z" fill="#E4751F" />
            <path d="M41.9131 35.5677L41.542 40.865L47.1082 29.8921L41.9131 35.5677Z" fill="#E4751F" />
            <path
                d="M26.6987 30.6494L25.5854 37.4602L27.0698 45.7845L27.4409 34.8116L26.6987 30.6494Z"
                fill="#E4751F"
            />
            <path
                d="M34.1203 30.6494L33.3782 34.8116L33.7493 45.7845L35.2336 37.4602L34.1203 30.6494Z"
                fill="#E4751F"
            />
            <path
                d="M35.2336 37.4593L33.7493 45.7836L34.8625 46.5403L41.542 40.8647L41.9131 35.5674L35.2336 37.4593Z"
                fill="#F6851B"
            />
            <path
                d="M18.9058 35.5674L19.2768 40.8647L25.9563 46.5403L27.0696 45.7836L25.5852 37.4593L18.9058 35.5674Z"
                fill="#F6851B"
            />
            <path
                d="M35.2336 53.7303V51.4601L34.8625 51.0817H25.9566L25.5855 51.4601V53.7303L18.1638 50.325L20.7614 52.5952L25.9566 56.0006H34.8625L40.0577 52.5952L42.6553 50.325L35.2336 53.7303Z"
                fill="#C0AD9E"
            />
            <path
                d="M34.8625 46.5397L33.7493 45.783H27.0698L25.9565 46.5397L25.5854 51.4586L25.9565 51.0802H34.8625L35.2336 51.4586L34.8625 46.5397Z"
                fill="#161616"
            />
            <path
                d="M58.241 18.5405L60.0964 9.08105L57.1278 0L34.8628 17.027L43.3977 24.2161L55.6434 27.9999L58.241 24.9729L57.1278 23.8377L58.9832 22.3242L57.4989 21.1891L59.3543 19.6756L58.241 18.5405Z"
                fill="#763D16"
            />
            <path
                d="M0.7229 9.08105L2.57831 18.5405L1.46507 19.6756L3.32048 21.1891L1.83615 22.3242L3.69156 23.8377L2.57831 24.9729L5.17589 27.9999L17.4216 24.2161L25.9565 17.027L3.69156 0L0.7229 9.08105Z"
                fill="#763D16"
            />
            <path
                d="M55.6431 27.9993L43.3974 24.2156L47.1082 29.8912L41.542 40.8642H48.9636H59.7251L55.6431 27.9993Z"
                fill="#F6851B"
            />
            <path
                d="M17.4216 24.2156L5.17591 27.9993L1.09399 40.8642H11.8554H19.2771L13.7108 29.8912L17.4216 24.2156Z"
                fill="#F6851B"
            />
            <path
                d="M34.1203 30.6481L34.8624 17.0265L38.2022 7.18872H22.6167L25.9564 17.0265L26.6986 30.6481L27.0697 34.8102V45.7831H33.7492V34.8102L34.1203 30.6481Z"
                fill="#F6851B"
            />
        </svg>
    );
};

class MetamaskErrorModal extends React.Component<Props> {
    public render = () => {
        const { isOpen, closeModal, noMetamaskType, connectWallet } = this.props;

        const metamaskNotInstalledContent = (
            <>
                <ModalTitle>Install Metamask</ModalTitle>
                <IconContainer>{mmIcon()}</IconContainer>
                <ModalText>Please install the MetaMask wallet extension from the Chrome Store.</ModalText>
                <ModalText>
                    <ModalTextLink href="https://metamask.io/" target="_blank">
                        What is MetaMask?
                    </ModalTextLink>
                </ModalText>
                <ButtonStyled theme="tertiary">
                    <LinkButton
                        target="_blank"
                        href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn"
                    >
                        Get Chrome Extension
                    </LinkButton>
                </ButtonStyled>
            </>
        );

        const metamaskNoPermissionsContent = (
            <>
                <ModalTitle>Connect Metamask</ModalTitle>
                <IconContainer>{mmIcon()}</IconContainer>
                <ModalText>Please accept the MetaMask wallet permissions in order to access your wallet.</ModalText>
                <ModalText>
                    <ModalTextLink href="https://metamask.io/" target="_blank">
                        What is MetaMask?
                    </ModalTextLink>
                </ModalText>
                <ButtonStyled theme="tertiary">
                    <LinkButton onClick={connectWallet}>{errorsWallet.mmConnect}</LinkButton>
                </ButtonStyled>
            </>
        );

        return (
            <Modal isOpen={isOpen} style={themeModalStyle}>
                <CloseModalButton onClick={closeModal} />
                <ModalContent>
                    {noMetamaskType === ModalDisplay.EnablePermissions
                        ? metamaskNoPermissionsContent
                        : metamaskNotInstalledContent}
                </ModalContent>
            </Modal>
        );
    };
}
export { MetamaskErrorModal };
