import { Container } from "./styles";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";
import { useTransactions } from "../../hooks/UseTransactions";

export function Summary() {
  const { transactions } = useTransactions();

  // const totalDeposits = transactions.reduce((acc, transaction) => {
  //   if(transaction.type === 'deposit'){
  //     return acc + transaction.amount;
  //   }
  //   return acc;
  // },0)

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += acc.deposits;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img alt="Entradas" src={incomeImg} />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img alt="Saídas" src={outcomeImg} />
        </header>
        <strong>
          -
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.withdraws)}
        </strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img alt="Total" src={totalImg} />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(sumary.total)}
        </strong>
      </div>
    </Container>
  );
}
