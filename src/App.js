import React, { Component } from 'react';
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { IncomeExp } from './components/IncomeExp'
import { TransactionList } from './components/TransactionList'
import { AddTransaction } from './components/AddTransaction'

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Balance />
          <IncomeExp />
          <TransactionList />
          <AddTransaction/ >
        </div>
      </div>
    );
  }
}

export default App;
