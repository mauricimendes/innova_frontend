import styled from "styled-components"

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors.background};
`

export const Wrapper = styled.div`
    max-width: 70rem;
    margin: 2rem auto;
    padding: 0 1rem;

    display: grid;
    grid-template-columns: 256px 1fr;

    gap: 2rem;
    align-items: flex-start;

    @media (max-width: 768px) {
        html {
            font-size: 87.5%;
        }

        grid-template-columns: 1fr;
    }
`

export const NotTasks = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    strong {
        color: ${props => props.theme.colors.primary};
    }
`

export const Add = styled.button`
    position: absolute;
    bottom: 2rem;
    right: 2rem;

    height: 56px;
    width: 56px;
    border-radius: 28px;
    border: 0;
    background-color: ${props => props.theme.colors.brand};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    
    svg {
        color: ${props => props.theme.colors.primary};
    }

    :hover {
        box-shadow: rgba(54, 71, 158, 0.25) 0px 25px 20px -16px;
    }
`