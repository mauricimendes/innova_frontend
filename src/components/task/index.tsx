import React, { useCallback, useState } from "react"
import { Check, Trash, WarningCircle } from 'phosphor-react'

import { Container, Icon, Actions } from "./styles"

interface ITask {
    id: string
    checked: boolean
    difficulty: 'easy' | 'medium' | 'hard'
    handleChecked(): void
    title: string
    description: string
}

const Task: React.FC<ITask> = ({ id, title, description, checked, difficulty, handleChecked }) => {
    
    const handleDeleteTask = useCallback((id: string) => {
      
            if (confirm('Tem certeza que deseja deletar essa task?')) {
                console.log('deletou', id)
            }
            return
      
    }, [])


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
                <Actions difficulty={difficulty} >
                    <strong>
                        {   
                            difficulty === 'easy' ? 'Fácil' : 
                            difficulty === 'medium' ? 'Médio' : 
                            'Difícil'
                        }
                    </strong>
                    <button onClick={() => {
                        handleDeleteTask(id)
                    }}>
                        <Trash/>
                    </button>
                </Actions>
            </main>
        </Container>
    )
}

export default Task