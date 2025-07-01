const App = () => {
  const array = [1, 2, 3, 4, 5];
  const arrayDeFrutas = [
    { fruta: 'laranja', cor: 'laranja' },
    { fruta: 'uva', cor: 'roxa' },
    { fruta: 'maça', cor: 'vermelha' },
  ];
  return (
    <div>
      <h1>Configurando React</h1>
      {array.map((item) => {
        return (
          <>
            <li>
              {item} * 5 = {item * 5}
            </li>
          </>
        );
      })}
      <br></br>
      <table>
        <tr>
          <th>Fruta</th>
          <th>Cor</th>
        </tr>
        {arrayDeFrutas.map((item) => {
          return (
            <>
              <tr>
                <td>{item.fruta}</td>
                <td>{item.cor}</td>
              </tr>
            </>
          );
        })}
      </table>
    </div>
  );
};

export default App;
