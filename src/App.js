import React, { useState, useEffect, useMemo, useCallback } from 'react'

function App() {

  const [tarefas, setTarefas] = useState([
    'Pagar a conta de luz', 
    'Estudar React Hooks'])

  const [input, setInput] = useState('');

  const [contador,setContador] = useState(0)

  const  handleAdd = useCallback(()=> {
    setTarefas([...tarefas, input])
    setInput('');
  }, [tarefas, input]);

  //**************UseEffect******************/

  //componentDidMount 
  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas')

    if(tarefasStorage){
      setTarefas(JSON.parse(tarefasStorage))
    }

  //componentWillAmount

  //  return () => {};

  }, []);

  //componentDidUpdate
  useEffect(()=> {
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }, [tarefas])

  //*******************UseMemo *****************/
  //para nao precisar atualizar toda bloco de codigoa abaixo assim q for atualizado

  const totalTarefas = useMemo(()=> tarefas.length, [tarefas]);

  //------USECALLBACK-------------------------//
  //DIFERENTE DO MEMO ELE NAO RETORNA UM VALOR UNICO, ELE RETORNA UMA FUNCAO


  return (
    <div>
     <h1>Hooks</h1>
     <ul>
       {tarefas.map(tarefa => (
         <li key={tarefa}>{tarefa}</li>
       ))}
     </ul>
        <strong>Voce tem {totalTarefas} tarefas !</strong><br/>
     <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
     <button type="button" onClick={handleAdd}>Adicionar</button>
     <p>You clicked {contador} times</p>
     <button onClick={() => setContador(contador + 1)}>Aumentar</button>
    </div>
  );
}

export default App;
