console.log("Pagina carregada!");

document.addEventListener('submit', async function(event){
    //evita a pagina ser recarregada ao submeter ao formulario
    event.preventDefault();

    console.log("Formulario submetido!!");

    // obtem o elemento html com ID fieldName
    const edtName = document.getElementById('fieldName');
    // obtem o valor (texto digitado) do edit
    const nameValue = edtName.value;
    console.log('Nome:', nameValue);


    const edtAddress = document.getElementById('fieldAddress');
    const addressValue = edtAddress.value;
    console.log('Endereco:', addressValue);


    const edtAge = document.getElementById('fieldAge');
    const ageValue = edtAge.value;
    console.log('Idade:', ageValue);
});