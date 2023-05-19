import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AppText from '../AppText/AppText'

import {SubSections, Item} from '../../Types/Types'
import { secondaryColor } from '../../Constants/Colors';

interface SubsectionListProps {
    subsections: SubSections;
}

const ItemsList = ({elements}: {elements: Item[]}) => {
    return <Col  xs={6} md={6} lg={6} style={{ border: `1px solid ${secondaryColor}`, padding: "15px", margin:"auto"}}>
            {
                elements.map((item: Item) => {
                    return <Row style={{display: "flex", flexDirection: "row", justifyContent: "space-between", alignContent: "center"}}>
                        <Col style={{textAlign: "left"}}>
                        <AppText fontFamily='hkGrotesk' color={secondaryColor}>{item.name}</AppText>
                        <AppText fontFamily='hkGrotesk' fontSize='8px' color={secondaryColor}>{item.description}</AppText>
                        </Col>
                        <AppText fontFamily='hkGrotesk' color={secondaryColor}>{item?.price}</AppText>
                    </Row>
                })
            }
            </Col>
}

const SubsectionsList = ({subsections}: SubsectionListProps) => {
    const subsectionsNames = Object.keys(subsections)

    return <>
    {
        Object.values(subsections).map((el, index) => {
        return <Container style={{marginTop: "20px"}}>
                    <AppText color={secondaryColor} fontFamily='hkGroteskBold' fontSize='15px'>{subsectionsNames[index]}</AppText>
                    <ItemsList elements={Object.values(el)} />
            </Container>
    })
    }</>
  
}

export default SubsectionsList