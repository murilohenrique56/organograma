import CampoTexto from "../campoTexto";
import ListaSuspensa from "../listaSuspensa";
import "./Formulario.css";

const Formulario = () => {
  const times = [
    'Loud',
    'Sentinels',
    'Leviatan',
    'Gen.G',
    'PPX',
    'TH'

  ]
  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto label="Nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa label="Time" itens={times}></ListaSuspensa>
      </form>
    </section>
  );
};

export default Formulario;
