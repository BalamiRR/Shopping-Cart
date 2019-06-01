import React from 'react';
import { Table, Header, Button, Icon, Reveal, Image } from 'semantic-ui-react'

class List extends React.Component {
    state = {
        turkey: [
            {
                name: 'Turkey', countryCode: 'tr',
            }
        ],
        kongo: [
            {
                name: 'Kongo', countryCode: '',
            }
        ],
        france: [
            {
                name: 'France', countryCode: 'fr',
            }
        ],
    }

    render() {
        return (
            <div>
                <br />
                <Header as='h1' image style={{ textAlign: 'center' }}> Exporting to Asia </Header>
                <Table basic='very' celled collapsing >
                    <Table.Header >
                        <Table.Row>
                            <Table.HeaderCell> Product Imports </Table.HeaderCell>
                            <Table.HeaderCell> Kg / gram </Table.HeaderCell>
                            <Table.HeaderCell> From : </Table.HeaderCell>
                            <Table.HeaderCell> To : </Table.HeaderCell>
                            <Table.HeaderCell> KM </Table.HeaderCell>
                            <Table.HeaderCell> Handling Date </Table.HeaderCell>
                            <Table.HeaderCell> Delivery Date </Table.HeaderCell>
                            <Table.HeaderCell> Total Time  </Table.HeaderCell>
                            <Table.HeaderCell> Amount </Table.HeaderCell>
                            <Table.HeaderCell> Add </Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body >
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image style={{ textAlign: 'center' }}>
                                    <Header.Content>
                                        Tomato
                                    </Header.Content>
                                    <Header.Subheader>
                                        $12
                                    </Header.Subheader>
                                    <Reveal animated='small fade'>
                                        <Reveal.Content visible>
                                            <Image 
                                                style={{ height: 50, width: 50 }} 
                                                src='https://migros-dali-storage-prod.global.ssl.fastly.net/sanalmarket/product/28080000/domates-kg-c7462d.jpg' size='small' />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image
                                                style={{  height: 50, width: 50  }}
                                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnvJnWeG7Zp4FzPrbFmD64j9RKg118zxCN4P66NkU0SXqRGhAbw' size='small' />
                                        </Reveal.Content>
                                    </Reveal>
                                    <Header.Subheader>Made in Turkey</Header.Subheader>
                                </Header>
                            </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>  </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>
                                Turkey
                            </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 2200 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 13/02/2019 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 17/02/2019 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 86:45:00 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> $</Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>
                                <Button animated='vertical'>
                                    <Button.Content hidden>Shop</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='plus' />
                                    </Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image style={{ textAlign: 'center' }}>
                                    <Header.Content>
                                        Apple
                                    </Header.Content>
                                    <Header.Subheader>
                                        $7
                                    </Header.Subheader>
                                    <Reveal animated='small fade'>
                                        <Reveal.Content visible>
                                            <Image 
                                                style={{ height: 50, width: 50 }} 
                                                src='data:image/jpeg;base64,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' size='small' />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image
                                                style={{ height:50, width: 50 }}
                                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnvJnWeG7Zp4FzPrbFmD64j9RKg118zxCN4P66NkU0SXqRGhAbw' size='small' />
                                        </Reveal.Content>
                                    </Reveal>
                                    <Header.Subheader>Made in France</Header.Subheader>
                                </Header>
                            </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>  </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> France </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 3420 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 13/02/2019 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 19/02/2019 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 126:45:00 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> $ </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>
                                <Button animated='vertical'>
                                    <Button.Content hidden>Shop</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='plus' />
                                    </Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell>
                                <Header as='h4' image style={{ textAlign: 'center' }}>
                                    <Header.Content>
                                        Kakao
                                    </Header.Content>
                                    <Header.Subheader>
                                        $10
                                    </Header.Subheader>
                                    <Reveal animated='small fade'>
                                        <Reveal.Content visible>
                                            <Image
                                                style={{ height: 50, width: 50  }}
                                                src='http://sifalibitkiler.net/wp-content/uploads/2017/10/kakao-3.jpg'
                                                size='small'
                                            />
                                        </Reveal.Content>
                                        <Reveal.Content hidden>
                                            <Image
                                                style={{ height: 50, width: 50  }}
                                                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLnvJnWeG7Zp4FzPrbFmD64j9RKg118zxCN4P66NkU0SXqRGhAbw' size='small'
                                            />
                                        </Reveal.Content>
                                    </Reveal>
                                    <Header.Subheader> Made in Kongo</Header.Subheader>
                                </Header>
                            </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>  </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> Kongo </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 600 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 13/02/2019 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 14/02/2019 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> 16:45:00 </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}> $ </Table.Cell>
                            <Table.Cell style={{ textAlign: 'center' }}>
                                <Button animated='vertical'>
                                    <Button.Content hidden>Shop</Button.Content>
                                    <Button.Content visible>
                                        <Icon name='plus' />
                                    </Button.Content>
                                </Button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>
                </Table>
                <br />
                <Button animated>
                    <Button.Content visible>Next</Button.Content>
                    <Button.Content hidden>
                        <Icon name='arrow right' />
                    </Button.Content>
                </Button>
                <Button animated='fade'>
                    <Button.Content visible>Sign-up for a Pro account</Button.Content>
                    <Button.Content hidden>$12.99 a month</Button.Content>
                </Button>

            </div>
        )
    }
}

export default List;