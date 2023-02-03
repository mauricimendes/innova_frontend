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