console.log("Pagina carregada!");

// Lista de clientes (array de objeto)
let customerList = [];

// Obter os elementos html form
const mainForm = document.querySelector('#mainForm')


// Obtem o elemento html com ID fieldName
const edtName = document.querySelector('#fieldName');

// Obtem o elemento html com ID fieldAddress
const edtAddress = document.querySelector('#fieldAddress');

// Obtem o elemento html com ID fieldAge
const edtAge = document.querySelector('#fieldAge');



// Obtem o elemento button(cancelar)
const cancelButton = document.querySelector('#cancelButton');



// Limpa o formulario e da o foco no campo Nome
clearForm();


// Funcão disparada quando ocorrer o evento submit
document.addEventListener('submit', async function(event){
    //evita a pagina ser recarregada ao submeter ao formulario
    event.preventDefault();

    console.log("Formulario submetido!!");

    // Salva o cadastro do cliente
    saveCustomer();

    // Limpa o formulario e da foco no campo Nome
    clearForm();
});

// Função disparada quando ocorrer o click no botão cancelar
cancelButton.addEventListener('click', async function(){
    const confirmation = confirm('Tem certeza que deseja cancelar?');
    if(confirmation) {
    // Limpa o formulario e da foco no campo Nome
    clearForm();
    console.log('Cancelando edicao!');
    }

});


function saveCustomer(){
    console.log('Função saveCustomer executado!');

    // Obtem os valores (texto digitado) dos edits
    const edtNameValue = edtName.value;
    const edtAddressValue = edtAddress.value;
    const edtAgeValue = edtAge.value;

    console.log(edtNameValue, edtAddressValue, edtAgeValue);

    const customer = {
        name: edtNameValue,
        address: edtAddressValue,
        age: edtAgeValue
    }

    // Adiciona objeto (cliente(customer)) na lista de clientes(array)
    customerList.push(customer);
    console.log(customerList);
}

function clearForm() {
    mainForm.reset();
    edtName.focus();
}
