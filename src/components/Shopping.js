import React from 'react';
import { Step, Icon, List, Table, Segment, Divider, Grid } from 'semantic-ui-react'

class Shopping extends React.Component {
    render() {
        return (
            <Segment>
                <Grid columns={2} relaxed='very'>
                <Grid.Column>
                    <Table >
                        <h1 style={{ margin: 25 }}>Total Taken</h1>
                        <List style={{ margin: 50 }}>
                            <List.Item >
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header>Tomato</List.Header>
                                    <List.Description>
                                        .  x kg Tomato
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <br />
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header>Apple</List.Header>
                                    <List.Description>
                                        . x kg Apple
                                    </List.Description>
                                </List.Content>
                            </List.Item>
                            <br />
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header>Kakao</List.Header>
                                    <List.Description>
                                        . x kg Kakao
                            </List.Description>
                                </List.Content>
                            </List.Item>
                            <List.Item>
                                <br />
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header>Banana</List.Header>
                                    <List.Description>
                                        . x kg Banana
                            </List.Description>
                                </List.Content>
                            </List.Item>
                            <br />
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header>Plum</List.Header>
                                    <List.Description>
                                        . x kg Plum
                            </List.Description>
                                </List.Content>
                            </List.Item>
                            <br />
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header>Ananas</List.Header>
                                    <List.Description>
                                        . x kg Ananas
                            </List.Description>
                                </List.Content>
                            </List.Item>
                            <br />
                            <List.Item>
                                <List.Icon name='marker' />
                                <List.Content>
                                    <List.Header>Strawberry</List.Header>
                                    <List.Description>. x kg Strawberry</List.Description>
                                </List.Content>
                            </List.Item>
                        </List>
                    </Table>
                    </Grid.Column>
                    <Grid.Column>
                        <Step.Group size='mini' style={{ marginBottom: 50 }}>
                            <Step >
                                <Icon name='truck' />
                                <Step.Content>
                                    <Step.Title>Shipping</Step.Title>
                                    <Step.Description>Choose your shipping options</Step.Description>
                                </Step.Content>
                            </Step>
                            <Step active>
                                <Icon name='payment' />
                                <Step.Content>
                                    <Step.Title>Billing</Step.Title>
                                    <Step.Description>Enter billing information</Step.Description>
                                </Step.Content>
                            </Step>
                        </Step.Group>
                    </Grid.Column>
                </Grid>
                <Divider vertical></Divider>
            </Segment>
        )
    }
}


export default Shopping;