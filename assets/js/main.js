const databaseService = DatabaseService('clientes')

document.addEventListener('keydown', evt => {

  const input = document.querySelector('#new-item');

  if(evt.key === 'Enter' && input.value.trim() !== ""){

    // console.log(input.value);
    let item = {
      id: new Date().getTime(),
      nome: input.value
    }

    console.log(input.value);
    addItem(item);
    createLi(item)
    input.value = null;
  }
})

function addItem(item) {
  databaseService.save(item);
}

function createLi(item) {
  let ul = document.getElementById('tarefas');
  let li = document.createElement('li');
  li.className = 'collection-item';
  li.innerHTML = `
    ${item.nome}
    <div class="secondary-content">
      <i class="material-icons blue-grey-text">create</i>
      <i class="material-icons red-text">do_not_disturb_on</i>
    </div>
  `

  ul.appendChild(li)
}

function createElements() {
  let lista = databaseService.get()
  lista.forEach(valor => {
    createLi(valor)
  });
}

createElements()