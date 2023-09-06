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

    //console.log(edtNameValue, edtAddressValue, edtAgeValue);

    //cria um objeto com os dados do clientes
    const customer = {
        name: edtNameValue,
        address: edtAddressValue,
        age: edtAgeValue
    }

    if(validateCustomer(customer)) {
        customerList.push(customer);
        console.log(customerList);
    }
}

function clearForm() {
    mainForm.reset();
    edtName.focus();
}

function validateCustomer(customer) {
    let result = true;

    //verificar se o campo nome foi prenchido
    //se nao result = false    
    if(customer.name == '') {
        result = false;

        //Adicionar a classe css error na diz form-control
        //pegar o pai do componente imput q é a div pai
        const formtControl = edtName.parentElement;

        //adicionar a classe error na div pai
        formtControl.className = 'form-control error';

        console.log('O campo nome é obrigatorio.')
    }

     //verificar se o campo endereco foi prenchido
     //se nao result = false
     if(customer.address == '') {
        result = false;

        //Adicionar a classe css error na diz form-control
        //pegar o pai do componente imput q é a div pai
        const formtControl = edtAddress.parentElement;

        //adicionar a classe error na div pai
        formtControl.className = 'form-control error';

        console.log('O campo endereço é obrigatorio.')
    }

     //verificar se o campo idade foi prenchido
     //se nao result = false
     if(customer.age == '') {
        result = false;

        //Adicionar a classe css error na diz form-control
        //pegar o pai do componente imput q é a div pai
        const formtControl = edtAge.parentElement;

        //adicionar a classe error na div pai
        formtControl.className = 'form-control error';

        console.log('O campo idade é obrigatorio.')
    }

    return result;
}

