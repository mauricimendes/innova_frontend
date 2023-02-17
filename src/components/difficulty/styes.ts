import styled from "styled-components"

interface IStatusButton {
    selected: boolean
    difficulty: string
}

export const StatusContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`

export const StatusButton = styled.button<IStatusButton>`
    transition: 0.5s;
    background-color: ${props => 
        props.selected && props.difficulty === 'easy' ? props.theme.colors.green :
        props.selected && props.difficulty === 'medium' ? props.theme.colors.orange : 
        props.selected && props.difficulty === 'hard' ? props.theme.colors.red : 
        props.theme.colors.background};
    padding: 8px 16px;

    strong {
        font-size: 0.875rem;
        color: ${props => props.selected ? props.theme.colors.primary : props.theme.colors.secondary};
    }

    border: 0;
    border-radius: 8px;
    cursor: pointer;
`