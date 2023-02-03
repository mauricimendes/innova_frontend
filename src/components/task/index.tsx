import React, { useState } from "react"
import { Check } from 'phosphor-react'

import { Container, Icon } from "./styles"

interface ITask {
    checked: boolean
    difficulty: 'easy' | 'medium' | 'hard'
    handleChecked(): void
    title: string
    description: string
}

const Task: React.FC<ITask> = ({ title, description, checked, difficulty, handleChecked }) => {

    return (
        <Container difficulty={difficulty}>
            <Icon check={checked} onClick={handleChecked}>
                <Check />
            </Icon>
            <main>
                <div>
                    <strong>
                        {title}
                    </strong>
                    <p>
                        {description}
                    </p>
                </div>
                <strong>
                    {   
                        difficulty === 'easy' ? 'Fácil' : 
                        difficulty === 'medium' ? 'Médio' : 
                        'Difícil'
                    }
                </strong>
            </main>
        </Container>
    )
}

export default Task