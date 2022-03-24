import React from 'react';
import { createServer, Model } from 'miragejs';
import ReactDOM from 'react-dom';
import {App} from './App';

createServer({
  models: {
    transaction: Model,
  },
  seeds(server){
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'FreeLancer de website',
          type: 'deposit',
          category: 'Dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'Casa',
          amount: 1100,
          createdAt: new Date('2021-02-14 11:00:00'),
        },
      ]
    })
  }
  ,
  routes(){    
    this.namespace = 'api'; /* Todas as chamadas serão feitas apartir do link que contem /api...*/

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction',data) /*Jogando para o banco de dados do schema*/
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

