import './App.css';
// src/components/index.ts
import {Button, Card, DropDown, HeroImage, Image, Label, RadioButton, Table, Text} from './components';  // Direct import
 // Adjust path as needed
 /// Adjust based on actual file location



function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Button label='Hi'></Button>
          <Card cardTitle='CardTitle' cardText='This is the text within the card' cardFooter='This is the footer' bgColor='blue' hoverColor='darkblue'></Card>
          <DropDown dropDownName='Groceries' optionOneText='Oranges' optionTwoText='Apples' optionThreeText='Mango' bgColor='blue' hoverColor='red'></DropDown>
          <HeroImage label='Trees' backgroundImage='https://images.unsplash.com/photo-1739981062052-d47d99db0d34?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></HeroImage>
          <Label label='This is a label' bgColor='purple'></Label>
          <Image src='https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg' alt='Cat'></Image>
          <RadioButton radioButtonName='Are you a robot?' firstQuestion='Yes' secondQuestion='No' disabled={true}></RadioButton>
          <Table headerName='TableName' tableData='TableData' footerName='TableFooter'></Table>
          <Text label='This is a sentence' bgColor='red'></Text>
      </header>
    </div>
  );
}

export default App;
