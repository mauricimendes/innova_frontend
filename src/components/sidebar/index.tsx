import React from "react"
import { CaretLeft, CaretRight } from "phosphor-react"
import { Container, CalenderActions } from "./styles"
import Difficulty from "../difficulty"

interface ISidebar {
    handleSelectedDifficulty(difficulty: string): void
    handleChangeDate(nextOrPrevious: string): void
    day: string
}

const Sidebar: React.FC<ISidebar> = ({ handleSelectedDifficulty, handleChangeDate, day }) => {
    return (
        <Container>
            <CalenderActions>
                <button onClick={() => handleChangeDate('previous')}>
                    <CaretLeft />
                </button>
                <time>{day}</time>
                <button onClick={() => handleChangeDate('next')}>
                    <CaretRight />
                </button>
            </CalenderActions>
            <Difficulty 
                handleSelectedDifficulty={(difficulty) => handleSelectedDifficulty(difficulty)}
            />
        </Container>
    )
}

export default Sidebar