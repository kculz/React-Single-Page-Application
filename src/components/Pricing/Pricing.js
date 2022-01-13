import React from 'react'
import { Pricings,PricingHeader,Price,Month,DescriptionWrapper,Description,CenterItems,PricingCard,Icon,CardHeading,PricingWrapper, Break } from './PricingElements'
import { FaDesktop} from 'react-icons/fa'
import { Button, Container } from '../../globalStyles'
const Pricing = () => {
    return (
            <Pricings>
                <Container>
                    <PricingHeader>
                        Pricing
                    </PricingHeader>
                    <PricingWrapper>
                        <CenterItems>
                        <PricingCard>
                            <Icon>
                                <FaDesktop />
                            </Icon>
                            <CardHeading>
                                Starter Pack
                            </CardHeading>
                            <Price>
                                $99.99
                            </Price>
                            <Month>
                                Per Month
                            </Month>
                            <DescriptionWrapper>
                                <Description>
                                    Lorem, ipsum dolor.
                                </Description>
                                <Description>
                                    Lorem, ipsum dolor.
                                </Description>
                                <Description>
                                    Lorem, ipsum dolor.
                                </Description>
                            </DescriptionWrapper>
                            <Button fontBig primary mt>Choose Plan</Button>
                            <Break/>
                        </PricingCard>


                        <PricingCard>
                            <Icon>
                                <FaDesktop />
                            </Icon>
                            <CardHeading>
                                Starter Pack
                            </CardHeading>
                            <Price>
                                $99.99
                            </Price>
                            <Month>
                                Per Month
                            </Month>
                            <DescriptionWrapper>
                                <Description>
                                    Lorem, ipsum dolor.
                                </Description>
                                <Description>
                                    Lorem, ipsum dolor.
                                </Description>
                                <Description>
                                    Lorem, ipsum dolor.
                                </Description>
                            </DescriptionWrapper>
                            <Button fontBig primary mt>Choose Plan</Button>
                            <Break/>
                        </PricingCard>

                        <PricingCard>
                            <Icon>
                                <FaDesktop />
                            </Icon>
                            <CardHeading>
                                Starter Pack
                            </CardHeading>
                            <Price>
                                $99.99
                            </Price>
                            <Month>
                                Per Month
                            </Month>
                            <DescriptionWrapper>
                                <Description>
                                    Lorem, ipsum dolor.
                                </Description>
                                <Description>
                                    Lorem, ipsum dolor.
                                </Description>
                                <Description>
                                    Lorem, ipsum dolor.
                                </Description>
                            </DescriptionWrapper>
                            <Button fontBig primary mt>Choose Plan</Button>
                            <Break />
                        </PricingCard>
                        </CenterItems>
                    </PricingWrapper>
                </Container>
            </Pricings>        
    )
}

export default Pricing
