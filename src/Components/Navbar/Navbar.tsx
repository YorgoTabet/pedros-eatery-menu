import Navbar from "react-bootstrap/esm/Navbar"
import AppText from "../AppText/AppText"
import Container from "react-bootstrap/esm/Container"
import Col from "react-bootstrap/esm/Col"
import { secondaryColor } from "../../Constants/Colors"
import Row from "react-bootstrap/esm/Row"

import {Instagram, GeoAlt} from "react-bootstrap-icons"



const Navigation = () => {
  return  <Navbar style={{backgroundColor: secondaryColor}}>
        <Container>
        <Row style={{display: "flex", flexDirection: "row",justifyContent: "space-between"}}>
            <Col style={{padding: "5px"}}>
                <AppText content="YOUR EVENT," fontSize="12px" fontFamily="playfairDisplayBold" />
                <AppText content="OUR RESPONSIBILITY" fontSize="12px" fontFamily="playfairDisplayBold" />
                <AppText content="ITALIAN & ASIAN CUISINES AVAILABLE UPON RESERVATION." fontSize="10px" fontFamily="hkGroteskBold" styles={{marginTop: "5px"}} />
            </Col>
            <Col style={{height: "71px", display: "flex", flexDirection: "column", justifyContent: "center", marginRight: "10px"}}>
                <Row style={{display: "flex", flexDirection: "row", flexWrap: "nowrap"}} >
                    <GeoAlt style={{marginRight: "3px"}} height={"8px"} width={"8px"}/>
                    <AppText content="KOURA, LEBANON" fontSize="8px" fontFamily="hkGroteskBold" />
                </Row>
                <a href="https://www.instagram.com/pedros.eatery/" style={{all: "unset", cursor: "pointer"}}>
                    <Row style={{display: "flex", flexDirection: "row", flexWrap: "nowrap" , marginTop: "7px"}}>
                            <Instagram style={{marginRight: "3px"}} height={"8px"} width={"8px"} />
                            <AppText content="PEDROS.EATERY" fontSize="8px" fontFamily="hkGroteskBold" />
                    </Row>
                </a>
            </Col>
        </Row>
        </Container>
    </Navbar>
}

export default Navigation