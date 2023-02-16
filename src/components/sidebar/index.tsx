import React, { useState } from "react"
import { CaretLeft, CaretRight } from "phosphor-react"
import { Container, StatusContainer, StatusButton, CalenderActions } from "./styles"

const status = [
    { id: 1, title: 'Fácil', difficulty: 'easy'},
    { id: 2, title: 'Médio', difficulty: 'medium'},
    { id: 3, title: 'Difícil', difficulty: 'hard'},
]

interface ISidebar {
    handleSelectedDifficulty(difficulty: string): void
    handleChangeDate(nextOrPrevious: string): void
    day: string
}

const Sidebar: React.FC<ISidebar> = ({ handleSelectedDifficulty, handleChangeDate, day }) => {
    const [selected, setSelected] = useState('')

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

            <StatusContainer>
                {status.map(s => (
                    <StatusButton 
                        key={s.id} 
                        selected={selected === s.difficulty ? true : false} 
                        difficulty={s.difficulty} 
                        onClick={() => {
                            setSelected(state => state === s.difficulty ? '' : s.difficulty)
                            handleSelectedDifficulty(selected === s.difficulty ? '' : s.difficulty)
                        }}
                    >
                        <strong>{s.title}</strong>
                    </StatusButton>
                ))}
            </StatusContainer>
        </Container>
    )
}

export default Sidebar