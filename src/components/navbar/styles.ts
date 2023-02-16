import styled from "styled-components"

export const NavbarContainer = styled.nav`
    height: 80px;
    background-color: ${props => props.theme.colors.container};

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 0px 24px;

    div {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        img {
            margin-right: 4px;
        }
        
        strong {
            color: ${props => props.theme.colors.brand};
        }
    }

    strong {
        color: ${props => props.theme.colors.primary};
    }

    button {
        margin-left: 16px;
        height: 52px;
        width: 53px;
        background-color: transparent;
        border: 1px solid ${props => props.theme.colors.secondary};
        border-radius: 8px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        transition: 0.5s;

        svg {
            color: ${props => props.theme.colors.brand};
            height: 1.5rem;
            width: 1.5rem;
            transition: 0.5s;
        }

        
        :hover {
            background-color: ${props => props.theme.colors.brand};
            svg {
                color: ${props => props.theme.colors.primary};
            }
        }
    }
`