/* data route */
var url = `/data_json`;

console.log("im in the JS file!")

function loadJsonData() {
  console.log("im in the loadData function!")

  d3.json(url).then((data) => {

    console.log("im in the json data to do area!")
    
  });
}

function loadCsvData(){

  d3.csv("/data_csv", function(data) {
    console.log(data['name']);
  });

}


loadJsonData();
loadCsvData();
