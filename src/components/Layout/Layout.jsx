import AppBar from 'components/AppBar/AppBar'
import React, { Suspense } from 'react'
import { Box, Container, Flex, Spinner } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { getLoadingUserStatus } from 'redux/auth/auth-selectors'

export default function Layout() {
    const isUserLoading = useSelector(getLoadingUserStatus)

    return (
        <Box bg='gray.100' minH='100vh'>
            {
                isUserLoading ? <Flex justify='center' align='center' h='100vh'><Spinner w='100px' h='100px' /></Flex> : (
                    <>
                        <AppBar />
                        <Container maxW='container.xl'>
                            <Suspense>
                                <Outlet />
                            </Suspense>
                        </Container>
                    </>
                )
            }
        </Box>
    )
}
