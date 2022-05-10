import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
          categories:[
              {
                key: 'all',
                name: 'Все'
              },
              {
                key: 'chairs',
                name: 'Стулья'
              },
              {
                key: 'tables',
                name: 'Столы'
              },
              {
                key: 'sofa',
                name: 'Диваны'
              },
              {
                key: 'light',
                name: 'Лампы'
              }
          ]
        } 
    }
  render() {
    return (
      <div className='categories'>
          {this.state.categories.map(el => (
              <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
          ))}
      </div>
    )
  }
}

export default Categories