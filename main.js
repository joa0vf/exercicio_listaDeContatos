const form = document.getElementById('formContato');
const contato = []
const telefone = []

var linhas = ''

form.addEventListener('submit', function(e){
   e.preventDefault() //para não deixar que a página atualize sozinha.
   adicionaLinha()
   atulizaTabela()
});

function adicionaLinha(){
   const inputNomeContato = document.getElementById('nContato');
   const inputTelefone = document.getElementById('tel');

   if(contato.includes(inputNomeContato.value)){
      alert(`O nome ${inputNomeContato.value} já foi inserido!`)
   }
   else{
      contato.push(inputNomeContato.value)
      telefone.push(inputTelefone.value)

      var linha = '<tr>'
      linha += `<td>${inputNomeContato.value}</td>`
      linha += `<td>${inputTelefone.value}</td>`
      linha += `<tr>`

      linhas += linha
   }
   inputNomeContato.value = ''
   inputTelefone.value = ''
}

function atulizaTabela(){
   const corpoTabela = document.querySelector('tbody');
   corpoTabela.innerHTML = linhas
}