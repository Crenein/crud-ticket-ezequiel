import './App.css';
import FormularioTicket from './components/FormularioTicket';
import TablaTicket from './components/TablaTicket';



function App() {
  return (
    <h1 className="text-3xl font-bold underline">
      <FormularioTicket />
      <TablaTicket />
    </h1>
  );
}

export default App;
