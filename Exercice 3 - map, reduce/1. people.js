// 1 compter le nombre de personnes par âge, trier par âge décroissant

db.people.mapReduce(
    function () { emit(this.age, 1) }, //make key value pairs of (age, 1)
    function (key, values) { return Array.sum(values) },  //for every key, count the 1s, 
    { out: "temp" }
).find().sort({ _id: -1 })