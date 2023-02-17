import styled, { css } from "styled-components"

interface ContainerProps {
    isFocused: boolean
    isFilled: boolean
    isErrored: boolean
    textarea: boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: ${props => props.theme.colors.background};
    width: 100%;
    height: ${props => props.textarea ? '100px' : '44px'};
    border-radius: 8px;
    border: 2px solid ${props => props.theme.colors.background};
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: ${props => props.textarea ? 'flex-start' : 'center'};
    padding: 8px;
    
    & + div {
        margin-top: 8px;
    }
    ${props => props.isErrored && css`
        border-color: #c53030;
    `}
    ${props => props.isFocused && css`
        color: ${props => props.theme.colors.brand};
        border-color: ${props => props.theme.colors.brand};
    `}
    
    ${props => props.isFilled && css`
        border-color: ${props => props.theme.colors.brand};
    `}
    
    input {
        background-color: transparent;
        border: 0;
        color: ${props => props.theme.colors.primary};
        width: 100%;

        &::placeholder {
            color: ${props => props.theme.colors.brand};
        }
        :focus {
            outline: none;
        }
    }
`