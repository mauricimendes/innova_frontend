import { useEffect, useRef, useState, useCallback } from 'react'
import { useField } from '@unform/core'
import { Container } from './styles'

interface Props {
    name: string
    textarea?: boolean
}

type InputProps = JSX.IntrinsicElements['input'] & Props

export default function Input({ name, textarea = false, ...rest }: InputProps) {

    const inputRef = useRef<HTMLInputElement>(null)

    const [isFocused, setIsFocused] = useState(false)
    const [isFilled, setIsFilled] = useState(false)

    const { fieldName, defaultValue, registerField, error } = useField(name)

    const handleInputFocus = useCallback(() => {
        setIsFocused(true)
    }, [])

    const handleInputBlur = useCallback(() => {
        setIsFocused(false)
        setIsFilled(!!inputRef.current?.value)
    }, [])

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef,
            getValue: ref => {
                return ref.current.value
            },
            setValue: (ref, value) => {
                ref.current.value = value
            },
            clearValue: ref => {
                ref.current.value = ''
            },
        })
    }, [fieldName, registerField])

    return (
        <Container textarea={textarea} isErrored={!!error} isFocused={isFocused} isFilled={isFilled} >
            <input
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                onChange={(e) => e}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
                {...rest}
            />
        </Container>
    )
}
