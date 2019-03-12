import React from 'react';
import { connect } from 'react-redux';

import { getWeb3WrapperOrThrow } from '../../../services/web3_wrapper';
import { stepsModalAdvanceStep, unlockToken } from '../../../store/actions';
import { getStepsModalCurrentStep } from '../../../store/selectors';
import { StepUnlockToken, StoreState, Token } from '../../../util/types';
import { StepItem } from '../steps_modal/steps_progress';

import {
    DONE_STATUS_VISIBILITY_TIME,
    ModalContent,
    ModalStatusText,
    ModalStatusTextLight,
    ModalText,
    ModalTextClickable,
    StepStatus,
    StepStatusConfirmOnMetamask,
    StepStatusDone,
    StepStatusError,
    StepStatusLoading,
    StepsTimeline,
    Title,
} from './steps_common';

interface StateProps {
    step: StepUnlockToken;
}

interface DispatchProps {
    unlockToken: (token: Token) => Promise<any>;
    advanceStep: () => void;
}

type Props = StateProps & DispatchProps;

interface State {
    status: StepStatus;
}

class UnlockTokensStep extends React.Component<Props, State> {
    public state = {
        status: StepStatus.ConfirmOnMetamask,
    };

    public componentDidMount = async () => {
        await this._unlockToken();
    };

    public render = () => {
        const { token } = this.props.step;
        const tokenSymbol = token.symbol.toUpperCase();

        const { status } = this.state;
        const retry = () => this._retry();
        let content;

        const steps: StepItem[] = [
            {
                active: true,
                progress: '100',
                title: 'Step 1',
            },
            {
                active: true,
                progress: '100',
                title: 'Step 2',
            },
            {
                active: true,
                progress: '0',
                title: 'Finish',
            },
        ];

        switch (status) {
            case StepStatus.Loading:
                content = (
                    <StepStatusLoading>
                        <ModalText>Unlocking {tokenSymbol}. It will remain unlocked for future trades</ModalText>
                    </StepStatusLoading>
                );
                break;
            case StepStatus.Done:
                content = (
                    <StepStatusDone>
                        <ModalText>Unlocked {tokenSymbol}. It will remain unlocked for future trades</ModalText>
                    </StepStatusDone>
                );
                break;
            case StepStatus.Error:
                content = (
                    <StepStatusError>
                        <ModalText>
                            Unlocking {tokenSymbol} for future trades failed.{' '}
                            <ModalTextClickable onClick={retry}>Click here to try again</ModalTextClickable>
                        </ModalText>
                    </StepStatusError>
                );
                break;
            default:
                content = (
                    <StepStatusConfirmOnMetamask>
                        <ModalText>Confirm on Metamask to unlock {tokenSymbol} for trading on 0x.</ModalText>
                    </StepStatusConfirmOnMetamask>
                );
                break;
        }
        return (
            <>
                <ModalContent>
                    <Title>Order Setup</Title>
                    {content}
                    <StepsTimeline steps={steps} />
                    <ModalStatusText>
                        Current status, time <ModalStatusTextLight>00:34s...</ModalStatusTextLight>
                    </ModalStatusText>
                </ModalContent>
            </>
        );
    };

    private readonly _unlockToken = async () => {
        const { step, advanceStep } = this.props;
        const web3Wrapper = await getWeb3WrapperOrThrow();
        const unlockTxHash = await this.props.unlockToken(step.token);
        this.setState({ status: StepStatus.Loading });
        try {
            await web3Wrapper.awaitTransactionMinedAsync(await unlockTxHash);
            this.setState({ status: StepStatus.Done });
            setTimeout(advanceStep, DONE_STATUS_VISIBILITY_TIME);
        } catch (err) {
            this.setState({ status: StepStatus.Error });
        }
        return unlockTxHash;
    };

    private readonly _retry = async () => {
        this.setState({ status: StepStatus.Error });
        await this._unlockToken();
    };
}

const mapStateToProps = (state: StoreState): StateProps => {
    return {
        step: getStepsModalCurrentStep(state) as StepUnlockToken,
    };
};

const UnlockTokensStepContainer = connect(
    mapStateToProps,
    (dispatch: any) => {
        return {
            unlockToken: (token: Token) => dispatch(unlockToken(token)),
            advanceStep: () => dispatch(stepsModalAdvanceStep()),
        };
    },
)(UnlockTokensStep);

export { UnlockTokensStep, UnlockTokensStepContainer };
