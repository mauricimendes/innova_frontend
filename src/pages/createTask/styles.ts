import styled, { css } from "styled-components"
import { Form as FormUnform } from '@unform/web'
import { shade } from 'polished'

export const Container = styled.div`
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.colors.background};

    main {
        height: calc(100% - 80px);
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
`

export const Form = styled(FormUnform)`
    width: 50%;
    background: ${props => props.theme.colors.container};
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    padding: 36px 16px;

    section {
        margin-top: 16px;
        width: 224px;
    }
`

export const Submit = styled.button`
    margin-top: 36px;
    width: 100%;
    height: 56px;
    border: 0;
    border-radius: 8px;
    background-color: ${props => props.theme.colors.brand};
    cursor: pointer;
    color: ${props => props.theme.colors.primary};
    font-size: 16px;
    font-weight: bold;
    transition: 0.5s background-color;

    &:hover {
        background-color: ${props => shade(0.2, props.theme.colors.brand)}
    }
`