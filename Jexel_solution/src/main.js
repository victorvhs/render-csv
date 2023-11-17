let tableDiv = document.getElementById('table');
let processButton = document.getElementById('process');

document.getElementById('submit').addEventListener('click', (e) => {
	e.preventDefault();
	console.log('Hello World')
	let file = document.getElementById('csv').files[0];
	if(file){
		console.log("In file process")
		let data 
		 Papa.parse(file,{
			complete: function(results){
				let spreedSheet = jspreadsheet(table,{
					csvHeaders: true,
					data: results.data,
					columns:[
						{title: 'Name', width: 100},
						{title:'Email', width: 250},
						{title:'Cargo Atual', width: 250},
						{title:'Cargo Novo', width: 250},
						{title:'Setor', width: 100},
					]
				})

				processButton.addEventListener('click', (e) => {
					//spreedSheet.download();
					console.log(spreedSheet.getData())

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