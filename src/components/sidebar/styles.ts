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

    section {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 8px;

        img {
            height: 52px;
            width: 52px;
            border-radius: 8px;
        }

        strong {
            color: ${props => props.theme.colors.primary};
        }
    }
`

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 24px;
`

export const StatusButton = styled.button<IStatusButton>`
    transition: 0.5s;
    background-color: ${props => 
        props.selected && props.difficulty === 'easy' ? props.theme.colors.green :
        props.selected && props.difficulty === 'medium' ? props.theme.colors.orange : 
        props.selected && props.difficulty === 'hard' ? props.theme.colors.red : 
        props.theme.colors.background};
    padding: 4px 16px;

    strong {
        font-size: 0.875rem;
        color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.secondary};
    }

    border: 0;
    border-radius: 8px;
    cursor: pointer;
`

export const CalenderActions = styled.div`
    margin: 24px 0;
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