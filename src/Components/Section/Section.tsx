import React from 'react'
import { Col, Container } from 'react-bootstrap'
import AppText from '../AppText/AppText'
import { secondaryColor } from '../../Constants/Colors';
import { SubSections } from '../../Types/Types';
import SubsectionsList from '../SubSection/Subsection';



interface SectionProps {
    sectionName: string;
    subsections: SubSections
}

const Section = ({sectionName, subsections}: SectionProps) => {
  return (
    <Container>
        <Col style={{alignContent: "center", textAlign:"center"}}>
            <AppText fontFamily='playfairDisplayBold' color={secondaryColor} fontSize='30px'>PEDRO'S</AppText>
            <AppText fontFamily='brittany' color={secondaryColor}>{sectionName}</AppText>
            <SubsectionsList subsections={subsections}   />
        </Col>
    </Container>
  )
}

export default Section