import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";

class App extends React.Component {
  constructor(props) {
  super(props)
  this.state = {
    orders:[],
    items: [
      {
        id:1,
        title:'Стул серый',
        img:'chair-grey.jpg',
        desc:'Lorem ipsum dolor sit amet,consectetur adioisicing',
        category: 'chairs',
        price: '49.99'
      },
      {
        id:2,
        title:'Стол',
        img:'table.png',
        desc:'Lorem ipsum dolor sit amet,consectetur adioisicing',
        category: 'tables',
        price: '149.00'
      },
      {
        id:3,
        title:'Диван',
        img:'sofa.jpg',
        desc:'Lorem ipsum dolor sit amet,consectetur adioisicing',
        category: 'sofa',
        price: '549.99'
      },
      {
        id:4,
        title:'Лампа',
        img:'lamp.jpg',
        desc:'Lorem ipsum dolor sit amet,consectetur adioisicing',
        category: 'decor',
        price: '25.00'
      },
      {
        id:5,
        title:'Стул белый',
        img:'chair-white.jpg',
        desc:'Lorem ipsum dolor sit amet,consectetur adioisicing',
        category: 'chairs',
        price: '49.99'
      },
      {
        id:6,
        title:'Декоративные цветы',
        img:'vase.jpg',
        desc:'Lorem ipsum dolor sit amet,consectetur adioisicing',
        category: 'decor',
        price: '25.00'
      }
    ]
  }
  this.addToOrder = this.addToOrder.bind(this)
}
  render() {
   return (
    <div className="wrapper">
    <Header  orders={this.state.orders}/>
    <Items items ={this.state.items} onAdd={this.addToOrder}/>
    <Footer />
    </div>
  );
 }

 addToOrder(item) {
   let isInArray = false
this.state.orders.forEach(el => {
  if(el.id === item.id)
  isInArray = true
})
if(!isInArray)
  this.setState({orders: [...this.state.orders, item]})
 }
}

export default App;