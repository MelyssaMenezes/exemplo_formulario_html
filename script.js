console.log("Pagina carregada!");

// Lista de clientes (array de objeto)
let customerList = [];

// Obtem o elemento html com ID fieldName
const edtName = document.querySelector('#fieldName');

// Obtem o elemento html com ID fieldAddress
const edtAddress = document.querySelector('#fieldAddress');

// Obtem o elemento html com ID fieldAge
const edtAge = document.querySelector('#fieldAge');


// Funcão disparada quando ocorrer o evento submit
document.addEventListener('submit', async function(event){
    //evita a pagina ser recarregada ao submeter ao formulario
    event.preventDefault();

    console.log("Formulario submetido!!");
    saveCustomer();
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
