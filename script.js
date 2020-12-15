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
    document.getElementById('rer').innerHTML=rer;

    let criteria = document.getElementById('criteria');
    document.getElementById('factor-value').innerHTML=factor[criteria.value];
    let der = rer * (factor[criteria.value]);
    document.getElementById('der').innerHTML=der;

    let foodCalories = document.getElementById('food-calories');
    let food = (100*der)/foodCalories.value;
    document.getElementById('food-g').innerHTML=food;

}