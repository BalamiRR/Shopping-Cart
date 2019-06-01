import React from 'react';
import { Table, Header, Button, Icon, Reveal, Image, Grid, Segment } from 'semantic-ui-react'

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
            <Segment>
                <h1> <Header as='h1' style={{ textAlign: 'center', marginTop: 50 }}> Exporting to Asia </Header></h1>
                <Grid columns={2} relaxed='very' style={{margin:20}}>
                    <Grid.Column>
                        <br />
                        <Table basic='very' celled collapsing>
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
                            <Table.Body>
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
                                                        style={{ height: 50, width: 50 }}
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
                                                        style={{ height: 50, width: 50 }}
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
                                                        style={{ height: 50, width: 50 }}
                                                        src='http://sifalibitkiler.net/wp-content/uploads/2017/10/kakao-3.jpg'
                                                        size='small'
                                                    />
                                                </Reveal.Content>
                                                <Reveal.Content hidden>
                                                    <Image
                                                        style={{ height: 50, width: 50 }}
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
                                <Table.Row>
                                    <Table.Cell>
                                        <Header as='h4' image style={{ textAlign: 'center' }}>
                                            <Header.Content>
                                                Banana
                                        </Header.Content>
                                            <Header.Subheader>
                                                $15
                                            </Header.Subheader>
                                            <Reveal animated='small fade'>
                                                <Reveal.Content visible>
                                                    <Image
                                                        style={{ height: 50, width: 50 }}
                                                        src='https://productimages.hepsiburada.net/s/20/432/9883559460914.jpg' size='small' />
                                                </Reveal.Content>
                                                <Reveal.Content hidden>
                                                    <Image
                                                        style={{ height: 50, width: 50 }}
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
                                                Plum
                                        </Header.Content>
                                            <Header.Subheader>
                                                $17
                                            </Header.Subheader>
                                            <Reveal animated='small fade'>
                                                <Reveal.Content visible>
                                                    <Image
                                                        style={{ height: 50, width: 50 }}
                                                        src='https://productimages.hepsiburada.net/s/19/432/9841503371314.jpg' size='small' />
                                                </Reveal.Content>
                                                <Reveal.Content hidden>
                                                    <Image
                                                        style={{ height: 50, width: 50 }}
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
                                                Ananas
                                        </Header.Content>
                                            <Header.Subheader>
                                                $7
                                            </Header.Subheader>
                                            <Reveal animated='small fade'>
                                                <Reveal.Content visible>
                                                    <Image
                                                        style={{ height: 50, width: 50 }}
                                                        src='https://reimg-carrefour.mncdn.com/mnresize/600/600/productimage/30009119/30009119_0_MC/8796375580722_1528879431625.jpg' size='small' />
                                                </Reveal.Content>
                                                <Reveal.Content hidden>
                                                    <Image
                                                        style={{ height: 50, width: 50 }}
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
                                                Strawberry
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
                                                        style={{ height: 50, width: 50 }}
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
                            </Table.Body>
                        </Table>
                        <br />
                    </Grid.Column>
                </Grid>
                <Grid.Column>
                    {/* <Button animated>
                        <Button.Content visible>Next</Button.Content>
                        <Button.Content hidden>
                            <Icon name='arrow right' />
                        </Button.Content>
                    </Button>
                    <Button animated='fade'>
                        <Button.Content visible>Sign-up for a Pro account</Button.Content>
                        <Button.Content hidden>$12.99 a month</Button.Content>
                    </Button> */}
                </Grid.Column>
            </Segment>
        )
    }
}

export default List;