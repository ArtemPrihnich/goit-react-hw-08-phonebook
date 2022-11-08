import { Box, Container } from '@chakra-ui/react'
import AppBar from 'components/AppBar/AppBar'
import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <Box bg='gray.100' minH='100vh'>
            <AppBar />
            <Container maxW='container.xl'>
                <Suspense>
                    <Outlet />
                </Suspense>
            </Container>
        </Box>
    )
}
