let factor = {
    'months0-4' : 2.5,
    'months4-12' : 2,
    'neutered' : 1.2,
    'intact' : 1.4,
    'inactive/obese' : 1.0,
    'weight-loss' : 0.8,
    'weight-gain' : 1.3,
}

function getInputsValues() {

    let weight = document.getElementById('weight');
    let rer = 70*(Math.pow(weight.value, 0.67));
    rer = Number(rer).toFixed(2);
    document.getElementById('rer').innerHTML=(rer + ' [kcal per day]');


    let criteria = document.getElementById('criteria');
    let der = rer * (factor[criteria.value]);
    der = Number(der).toFixed(2);
    document.getElementById('der').innerHTML=(der + ' [kcal per day]');

    let foodCalories = document.getElementById('food-calories');
    let food = (100*der)/foodCalories.value;
    food = Number(food).toFixed(2);
    document.getElementById('food-g').innerHTML=(food + ' [g]');

}