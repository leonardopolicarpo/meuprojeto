function DatabaseService(origin) {

  const get = () => {
    let lista = localStorage.getItem(origin)
    if(typeof(lista) === 'object') {
      lista = [];
      lista = JSON.stringify(lista);
    }
    let dados = JSON.parse(lista)
    return dados;
  }

  const save = (item) => {
    let lista = get();
    lista.push(item);
    saveAll(lista)
  }

  const saveAll = (listaDados) => {
    let dados = JSON.stringify(listaDados);
    localStorage.setItem(origin, dados);
  }

  const deleteItem = (item) => {
    let lista = get();
    let novaLista = lista.filter((valor) => {
      if (item.id != valor.id) {
        return valor;
      }
    })

    saveAll(novaLista)
  }

  const updateItem = (item) => {
    let lista = get();
    lista.forEach((valor, index) => {
      if (item.id == valor.id) {
        lista[index].nome = item.nome;
      }
    });

    saveAll(lista)
  }

  return { get, save, saveAll, deleteItem, updateItem }
}