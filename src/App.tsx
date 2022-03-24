import { Header } from "./components/Header";
import Modal from "react-modal";
import { GlobalStyle } from "./styles/global";
import {Dashboard} from "./components/Dashboard";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/UseTransactions";

Modal.setAppElement('#root'); /*acessibilidade*/

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransactionModal(){
    setIsNewTransactionModal(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModal(false);
  }
  
  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}></Header>
      <Dashboard></Dashboard> 
      <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}></NewTransactionModal>
      <GlobalStyle></GlobalStyle>
    </TransactionsProvider>
  );
}
