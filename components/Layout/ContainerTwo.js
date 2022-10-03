import { Container } from '@mui/system'
import React from 'react'
import { useTheme } from '@mui/system'

export default function ContainerTwo({ children }) {
  const theme = useTheme()
  return (
    <div>
      <Container
        disableGutters={true}
        sx={{
          maxWidth: '1240px !important',
          paddingX: { xs: '24px', sm: 0, md: 0 },
        }}
      >
        {children}
      </Container>
    </div>
  )
}
