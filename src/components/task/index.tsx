import React, { useCallback } from "react"
import { Check, Trash } from 'phosphor-react'

import { Container, Icon, Actions } from "./styles"
import api from "../../services/api"

interface ITask {
    id: string
    checked: boolean
    difficulty: 'easy' | 'medium' | 'hard'
    handleChecked(): void
    title: string
    description: string
    handleDelete(id: string): void
}

const Task: React.FC<ITask> = ({ id, title, description, checked, difficulty, handleChecked, handleDelete }) => {
    
    const handleDeleteTask = useCallback((id: string) => {      
        if (confirm('Tem certeza que deseja deletar essa task?')) {
            api.delete(`/tasks/${id}`)
                .then(_ => {
                    alert('Tarefa deletada com sucesso.')
                    handleDelete(id)
                })
                .catch( err => alert(err))
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