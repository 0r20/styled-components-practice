import React from 'react';

import { Layout } from '../components/Layout';
import { Container } from '../styles/Container';

import { Main } from '../components/organisms/Main';
import { Brand } from '../components/organisms/Brand';
import { Plan } from '../components/organisms/Plan';

export const IndexPage = () => {
    return (
        <Layout>
            <Container fluid>
                <Main />
            </Container>
            <Container>
                <Brand />
            </Container>
            <Container fluid>
                <Plan />
            </Container>
        </Layout>
    );
}
