import React, { Component }from 'react';
import './App.css';
import staff from "./staff.json";
import Employee from "./components/Employee";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";

class App extends Component{
    state = {
        staff
    };

    render() {
        return (
            <Wrapper>
                <Title>Scranton Branch:</Title>
                {this.state.staff.map(staff => (
                    <Employee 
                        image={staff.image}
                        name={staff.name}
                        email={staff.email}
                        phone={staff.phone}
                        dept={staff.dept}
                        birthday={staff.birthday}
                    />
                ))}
            </Wrapper>
          );
    }
}  


export default App;
