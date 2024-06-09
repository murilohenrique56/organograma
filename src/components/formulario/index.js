import Botao from "../botao";
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

  const aoSalvar = (event) => {
    event.preventDefault()
    console.log('Form foi submetido')
  }

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true}label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto label="Imagem" placeholder="Informe o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Time" itens={times}/>
        <Botao text="Criar card"/>
      </form>
    </section>
  );
};

export default Formulario;
