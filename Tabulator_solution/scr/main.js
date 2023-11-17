let tableDiv = document.getElementById('table');
let processButton = document.getElementById('process');

document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault();
	console.log('Hello World')
	let file = document.getElementById('csv').files[0];
	if(file){
		console.log("In file process")
		
		 Papa.parse(file,{
			complete: function(results){

				let tableData = new Tabulator(tableDiv, {
					data: arr2json(results.data),
					index: 'email',
					layout: 'fitColumns',
					columns:[
						{title: 'nome', field: 'nome', width: 100, editor: 'input'},
						{title:'Email', field: 'email', width: 250, editor: 'input'},
						{title:'Cargo Atual', field: 'cargo_atual', width: 250},
						{title:'Cargo Novo', field: 'cargo_novo', width: 250},
						{title:'Setor', field: 'setor', width: 100,editor:'list', editorParams: {values: ['Comercial', 'Financeiro', 'TI', 'RH', 'Administrativo']}},
					]
				})
				processButton.addEventListener('click', (e) => {
					//spreedSheet.download();
					console.log(tableData.download('csv'))

				})
			},
			erros: function(err, file, inputElem, reason){
				console.log(err)
			}})
	}
	else{
		console.log('No file')
	}
});


function arr2json(data){
	return data.map(row => {
		const obj = {};
  	row.forEach((value, index) => {
		obj[data[0][index]] = value;
  });
  return obj;
})
}

