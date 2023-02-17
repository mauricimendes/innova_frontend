import { useCallback, useRef, useState } from 'react'
import { FormHandles } from '@unform/core'
import * as Yup from 'yup';
import { redirect, useNavigate } from 'react-router-dom'

import Navbar from '../../components/navbar'
import { Container, Form, Submit } from './styles'
import Input from '../../components/input'
import getValidationErrors from '../../utils/getValidationErrors';
import Difficulty from '../../components/difficulty';
import api from '../../services/api';

interface IFormData {
    title: string
    description: string
    date: string
    difficulty: string
} 

const CreateTask = () => {
    const navigate = useNavigate()
    const [difficulty, setDifficult] = useState('')
    const formRef = useRef<FormHandles>(null)

    const handleSubmit = useCallback( async (data: IFormData) => {
        try {
            formRef.current?.setErrors({})
            const schema = Yup.object().shape({
                title: Yup.string().required(),
                description: Yup.string().required(),
                date: Yup.string().required()
            })

            
            await schema.validate(data, {
                abortEarly: false
            })
            
            data.difficulty = difficulty
            data.date = new Date(data.date).toISOString()

            console.log(data)

            api.post('tasks/', data)
                .then(_ => {
                    navigate('/')
                    alert('Tarefa cadastrada com sucesso.')
                }).catch(err => {
                    alert(err)
                })
        } catch ( err ) {
            if (err instanceof Yup.ValidationError) {
                const errors = getValidationErrors(err)
                formRef.current?.setErrors(errors)
                return
            }
        }
    }, [difficulty])

    return (
        <Container>
            <Navbar />
            <main>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Input 
                        name='title'
                        placeholder='Título'
                    />
                    <Input 
                        name='description'
                        placeholder='Descrição'
                        textarea={true}
                    />

                    <Input 
                        name='date'
                        placeholder='Data'
                        type='date'
                    />
                    <section>
                        <Difficulty 
                            handleSelectedDifficulty={(difficulty) => {
                                console.log(difficulty)
                                setDifficult(difficulty)
                            }}
                            defaultValue='easy'
                        />
                    </section>
                    <Submit type='submit'>Cadastrar</Submit>
                </Form>
            </main>
        </Container>
    )
}

export default CreateTask