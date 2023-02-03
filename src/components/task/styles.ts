import styled from "styled-components"

interface ICheck {
    check: boolean
}

interface IDifficulty {
    difficulty: 'easy' | 'medium' | 'hard'
}

export const Container = styled.div<IDifficulty>`
    background-color: ${props => props.theme.colors.container};
    border-radius: 8px;
    height: 128px;
    transition: box-shadow 0.5s;
    margin-bottom: 24px;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    padding: 0 24px;

    :hover {
        box-shadow: rgba(54, 71, 158, 0.25) 0px 25px 20px -16px;
    }

    main {
        margin-left: 16px;
        display: flex;
        flex: 1;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 2rem;

        div {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;

            strong {
                color: ${props => props.theme.colors.primary};
            }

            p {
                color: ${props => props.theme.colors.secondary};
            }
        }

        strong {
            color: ${props => 
                props.difficulty === 'easy' ? props.theme.colors.green :
                props.difficulty === 'medium' ? props.theme.colors.orange :
                props.theme.colors.red
            };
        }
    }
`

export const Icon = styled.button<ICheck>`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${props => props.check ? props.theme.colors.brand : 'transparent'};
    border: 1px solid ${props => props.theme.colors.primary};
    height: 36px;
    width: 36px;
    border-radius: 26px;
    transition: 0.5s;

    svg {
        height: 24px;
        width: 24px;
        color: ${props => props.theme.colors.primary};
    }
`