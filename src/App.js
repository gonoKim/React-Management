import React, { Component } from 'react';
import logo from './logo.svg';
import Customer from './components/Customer'

const custonmers =[
  {
    'id':1,
    'image':'https://placeimg.com/64/64/1',
    'name': '太郎',
    'birthday':'920913',
    'gender': '男',
    'job':'社員'
  },
  {
    'id':2,
    'image':'https://placeimg.com/64/64/2',
    'name': 'キム',
    'birthday':'910913',
    'gender': '男',
    'job':'学生'
  },
  {
    'id':3,
    'image':'https://placeimg.com/64/64/3',
    'name': '山下',
    'birthday':'900315',
    'gender': '女',
    'job':'栄養士'
  }
]

class App extends Component{
  render(){
    return (
      <div>
        {
          custonmers.map(c => {
            return(
              <Customer
              key =　{c.id}
              id={c.id}
              image={c.image}
              name = {c.name}
              birthday = {c.birthday}
              gender = {c.gender}
              job = {c.job}
            />
            )
          })
        }
      </div>
    );
  }
}

export default App;
