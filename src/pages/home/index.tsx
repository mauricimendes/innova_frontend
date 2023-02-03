import React, { useCallback, useEffect, useMemo, useState } from "react"
import { addDays, format, isToday } from 'date-fns'

import { Container, NotTasks, Wrapper } from "./styles"
import Navbar from '../../components/navbar'
import Sidebar from '../../components/sidebar'
import Task from '../../components/task'
import api from "../../services/api"

interface ITasks {
    id: string
    title: string
    description: string
    checked: boolean
    difficulty: 'easy' | 'medium' | 'hard'
}

const Home: React.FC = () => {
    const [tasks, setTasks] = useState<ITasks[]>([])
    const [difficulty, setDifficulty] = useState('')
    const [date, setDate] = useState(new Date())
    const [handleChecked, setHandleChecked] = useState(false)

    useEffect(() => {
        api.get<ITasks[]>('/tasks/mauricimendes.11@gmail.com', {
            params: {
                difficulty: difficulty ? difficulty : null,
                date
            }
        })
        .then(res => {
            return setTasks(res.data)
        })
        .catch(err => {
            alert(err)
            })
    }, [difficulty, date, handleChecked])


    const handleChangeDate = useCallback((nextOrPrevious: string) => {
        console.log('tes')
        const newDate = addDays(date, nextOrPrevious === 'next' ? 1 : -1)
        setDate(new Date(newDate))
    }, [date])

    const checked = useCallback( async (id: string) => {
        api.patch(`/tasks/${id}`)
            .then(_ => setHandleChecked(state => !state))
            .catch(err => {
                alert(err)
            })
    }, [difficulty])

    const handleSelectedDifficulty = useCallback((difficulty: string) => {
        setDifficulty(difficulty)
    }, [])

    const day = useMemo(() => {
        const newDate = format(date, 'dd/MM/yyyy')
        if ( isToday(new Date(date)) ) return 'Hoje'
        return newDate
    }, [date])

    return (
        <Container>
            <Navbar />
            <Wrapper>
                <Sidebar
                    handleSelectedDifficulty={(difficulty) => handleSelectedDifficulty(difficulty)}
                    handleChangeDate={(nextOrPrevious) => handleChangeDate(nextOrPrevious)}
                    day={day}
                />
                <main>
                    {tasks.length != 0 ? tasks.map(task => (
                        <Task 
                            key={task.id} 
                            title={task.title}
                            description={task.description}
                            checked={task.checked} 
                            difficulty={task.difficulty} 
                            handleChecked={() => checked(task.id)} 
                        />
                    )) : 
                        <NotTasks>
                           <strong>
                            Não há tasks cadastradas para hoje com essa dificuldade.
                            </strong> 
                        </NotTasks>
                    }
                </main>
            </Wrapper>
        </Container>
    )
}

export default Home