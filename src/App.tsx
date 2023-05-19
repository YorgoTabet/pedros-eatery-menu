import { Container } from 'react-bootstrap'
import './App.css'
import { primaryColor } from './Constants/Colors'
import Navbar from './Components/Navbar/Navbar'
import Section from './Components/Section/Section'
import { SubSections } from './Types/Types'

function App() {
  const subsections: SubSections = {
    "SANDWICHES": {
      "Hamburger": {
        name: "Hamburger",
        price: "$4.5",
        description: "120 grs beef, tomato ,  onions ,coleslaw , pickles , sauce"
      },
      "Crispy Chicken Burger": {
        name: "Crispy Chicken Burger",
        price: "$5",
        description: "150 grs chicken breast, lettuce, tomato , pickles, honey mustard sauce"
      },
      "Tawook": {
        name: "Tawook",
        price: "$4.5",
        description: "Coleslaw, french fries, special garlic, dip, pickles"
      }
    }
  }

  return (
    <Container style={{background: primaryColor, height: "50ch"}}>
      <Navbar />
      <Section sectionName='Sandwiches Menu' subsections={subsections} />
    </Container>
  )
}

export default App
