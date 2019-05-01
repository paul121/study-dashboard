var hens = require('./hens.json');
var hen_weights = require('./hen_weights.json');

module.exports = {
  "treatments": [
    {"id":1, "treatment-type":"Ferment", "treatment-description":"Fermented feed"},
    {"id":2, "treatment-type":"Dry", "treatment-description":"Dry feed"},
    {"id":3, "treatment-type":"Hydrated", "treatment-description":"Hydrated feed"},
  ],
  "coops": [
    {"id":1, "name":"Coop 1", "treatmentID":1, "location":"field"},
    {"id":2, "name":"Coop 2", "treatmentID":2, "location":"field"},
    {"id":3, "name":"Coop 3", "treatmentID":3, "location":"field"},
    {"id":4, "name":"Coop 4", "treatmentID":3, "location":"field"},
    {"id":5, "name":"Coop 5", "treatmentID":1, "location":"field"},
    {"id":6, "name":"Coop 6", "treatmentID":2, "location":"field"},
    {"id":7, "name":"Coop 7", "treatmentID":2, "location":"field"},
    {"id":8, "name":"Coop 8", "treatmentID":3, "location":"field"},
    {"id":9, "name":"Coop 9", "treatmentID":1, "location":"field"},
  ],
  "hens": hens,
  "hen_weights": hen_weights,
}
