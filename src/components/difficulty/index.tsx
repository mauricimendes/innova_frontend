import React, { useState } from 'react'
import { StatusContainer, StatusButton } from './styes'

const status = [
    { id: 1, title: 'Fácil', difficulty: 'easy'},
    { id: 2, title: 'Médio', difficulty: 'medium'},
    { id: 3, title: 'Difícil', difficulty: 'hard'},
]

interface ISidebar {
    defaultValue?: string
    handleSelectedDifficulty(difficulty: string): void
}

const Difficulty: React.FC<ISidebar> = ({ defaultValue = '', handleSelectedDifficulty }) => {
    const [selected, setSelected] = useState(defaultValue)
    const initialValue = defaultValue

    return (
        <StatusContainer>
            {status.map(s => (
                    <StatusButton 
                        type='button'
                        key={s.id} 
                        selected={selected === s.difficulty ? true : false} 
                        difficulty={s.difficulty} 
                        onClick={() => {
                            setSelected(state => state === s.difficulty ? defaultValue : s.difficulty)
                            handleSelectedDifficulty(selected === s.difficulty ? defaultValue : s.difficulty)
                        }}
                    >
                        <strong>{s.title}</strong>
                    </StatusButton>
                ))}
        </StatusContainer>
    )
}

export default Difficulty