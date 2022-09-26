import { Container } from '@mui/system'
import React from 'react'

export default function ContainerTwo({ children }) {
    return (
        <Container disableGutters={true} sx={{ maxWidth: '1240px !important' }}>
            {children}
        </Container>
    )
}
