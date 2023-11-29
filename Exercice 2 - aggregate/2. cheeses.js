//1 Précisez le nombre de fromages par type de fromage. Mettez le type de fromage en majuscules.
db.cheeses.aggregate([
    { $project: { type: "$properties.cheesetype", _id: false } }, //project to only cheesetype
    { $group: { _id: "$type", count: { $sum: 1 } } }, //group by
    { $project: { cheesetype: { $toUpper: "$_id" }, numberOfCheeses: "$count", _id: false } } //format
])

//2 Donnez le nombre de fromages par fromagerie
db.cheeses.aggregate([
    { $project: { factory: true, variants: true, name: true, _id: false } },
    { $unwind: "$variants" },
    { $group: { _id: { factory: "$factory", cheese: "$name" }, numberOfVariantsPerFactoryPerCheese: { $sum: 1 } } },
    { $match: { numberOfVariantsPerFactoryPerCheese: { $gte: 2 } } },
    { $group: { _id: "$_id.factory", numberOfCheesesWithAtLeast2Variants: { $sum: 1 } } },
])