import { Box, Heading, Highlight } from '@chakra-ui/react'
import React from 'react'

export default function Home() {
    return (
        <Box pt='30vh' textAlign='center'>
            <Heading as='h1' size='2xl' maxW='1000px' lineHeight='1.25' fontWeight='medium' m='auto'>
                <Highlight query={['Contacts Book', 'create an account', 'login']} styles={{ px: '2', py: '1', rounded: 'full', bg: 'gray.400', color: 'gray.100' }}>
                    Welcome to the Contacts Book! With it, you can create your own contact list with the ability to edit it, first of all, create an account or login and try our functionality
                </Highlight>
            </Heading>
        </Box>
    )
}
