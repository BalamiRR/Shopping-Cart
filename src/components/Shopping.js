import React from 'react';
import { Step, Icon, List, Table, Segment, Divider, Grid } from 'semantic-ui-react'

class Shopping extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <Segment>
                <Grid columns={2} relaxed='very'>
                    <Grid.Column>
                        <Table >
                            <h1 style={{ margin: 25,textDecorationLine:'underline'}}> Shop </h1>
                            <List style={{ margin: 20 }}>
                                <List.Item >
                                    <List.Icon name='angle right' />
                                    <List.Content>
                                        <List.Header>
                                            Tomato
                                    </List.Header>
                                        <List.Description>
                                            .  x kg Tomato
                                    </List.Description>
                                    </List.Content>
                                </List.Item>
                                <br />
                                <List.Item>
                                    <List.Icon name='angle right' />
                                    <List.Content>
                                        <List.Header>Apple</List.Header>
                                        <List.Description>
                                            . x kg Apple
                                    </List.Description>
                                    </List.Content>
                                </List.Item>
                                <br />
                                <List.Item>
                                    <List.Icon name='angle right' />
                                    <List.Content>
                                        <List.Header>Kakao</List.Header>
                                        <List.Description>
                                            . x kg Kakao
                            </List.Description>
                                    </List.Content>
                                </List.Item>
                                <List.Item>
                                    <br />
                                    <List.Icon name='angle right' />
                                    <List.Content>
                                        <List.Header>Banana</List.Header>
                                        <List.Description>
                                            . x kg Banana
                            </List.Description>
                                    </List.Content>
                                </List.Item>
                                <br />
                                <List.Item>
                                    <List.Icon name='angle right' />
                                    <List.Content>
                                        <List.Header>Plum</List.Header>
                                        <List.Description>
                                            . x kg Plum
                            </List.Description>
                                    </List.Content>
                                </List.Item>
                                <br />
                                <List.Item>
                                    <List.Icon name='angle right' />
                                    <List.Content>
                                        <List.Header>Ananas</List.Header>
                                        <List.Description>
                                            . x kg Ananas
                            </List.Description>
                                    </List.Content>
                                </List.Item>
                                <br />
                                <List.Item>
                                    <List.Icon name='angle right' />
                                    <List.Content>
                                        <List.Header>Strawberry</List.Header>
                                        <List.Description>. x kg Strawberry</List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                        </Table>
                    </Grid.Column>
                    <Grid.Column>
                        <Table>
                            <h1 style={{ margin: 25,textDecorationLine:'underline' }}>Total Taken</h1>
                            <List style={{ margin: 10 }}>
                                <List.Item >
                                    <List.Icon name='angle double right' />
                                    <List.Content>
                                        <List.Header>
                                            zl
                                    </List.Header>
                                        <List.Description>
                                            zl
                                    </List.Description>
                                    </List.Content>
                                </List.Item>
                            </List>
                            <Step.Group size='mini'>
                                <Step active>
                                    <Icon name='payment' />
                                    <Step.Content>
                                        <Step.Title>Billing</Step.Title>
                                        <Step.Description>Enter billing information</Step.Description>
                                    </Step.Content>
                                </Step>
                            </Step.Group>
                        </Table>
                    </Grid.Column>
                </Grid>
                <Divider vertical></Divider>
            </Segment>
        )
    }
}


export default Shopping;