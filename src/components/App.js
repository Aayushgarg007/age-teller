import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      newDate: '',
      birthday: '1992-06-21',
      showStats: false
    }
  }
  
  changeBirthday = () => {
    console.log(this.state);
    this.setState({ birthday: this.state.newDate, showStats: true });
  }

  render() {
    return (
      <div className='App'>
        <h2>Input Your Birthday</h2>
        <Form>
          <FormControl 
            type='date'
            onChange={event => this.setState({ newDate: event.target.value })}
          >  
          </FormControl>
          {' '}
          <Button onClick={this.changeBirthday}> Button </Button>
        </Form>
        {this.state.showStats ? 
          <div className='fade age-stats'>
            <AgeStats date={this.state.birthday} />
            {
              setTimeout(() => {
                this.setState({ showStats: false })
              },2000)
            }
          </div>
        :
          null
        }
      </div>
    );
  }
}

export default App;