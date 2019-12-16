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

  // d3.csv("/data_csv", function(data) {
  //   console.log(data['name']);
  // });

}

function loadMap(){
  console.log("loading map");

  // Creating our initial map object
  // We set the longitude, latitude, and the starting zoom level
  // This gets inserted into the div with an id of 'map'
  var myMap = L.map("map", {
    center: [45.52, -122.67],
    zoom: 13
  });

  // Adding a tile layer (the background map image) to our map
  // We use the addTo method to add objects to our map
  // L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  //   attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  //   maxZoom: 18,
  //   id: "mapbox.streets",
  //   accessToken: "pk.eyJ1IjoicGd1aWxsZXJnYW4iLCJhIjoiY2szcDF2dG5zMjdjajNua29zdzBzNDV3NCJ9.en3jyfbLQe5qMhWKW-NZmA"
  // }).addTo(myMap);
  var basemap = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
  });

  basemap.addTo(myMap);
};


loadJsonData();
loadCsvData();
loadMap()