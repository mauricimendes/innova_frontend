import styled from "styled-components"

interface IStatusButton {
    selected: boolean
    difficulty: string
}

export const Container = styled.aside`
    border-radius: 8px;
    overflow: hidden;
    background-color: ${props => props.theme.colors.container};

    padding: 16px;
`

export const CalenderActions = styled.div`
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    button {
        height: 52px;
        width: 52px;
        border-radius: 8px;
        border: 1px solid ${props => props.theme.colors.brand};
        background-color: transparent;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        svg {
            height: 24px;
            width: 24px;
            color: ${props => props.theme.colors.brand};
        }

        cursor: pointer;
        transition: 0.5s;

        :hover {
            background-color: ${props => props.theme.colors.brand};
            border: 1px solid ${props => props.theme.colors.secondary};

            svg {
                color: ${props => props.theme.colors.secondary};
            }
        }
    }

    time {
        color: ${props => props.theme.colors.primary};
        font-size: 1rem;
        font-weight: bold;
    }
`