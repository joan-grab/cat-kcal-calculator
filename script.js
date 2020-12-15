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
    console.log(weight.id, ':', weight.value);
    let rer = 70*(Math.pow(weight.value, 0.67));
    console.log(Math.pow(weight.value, 0.67));
    document.getElementById('rer').innerHTML=rer;

    let criteria = document.getElementById('criteria');
    console.log(criteria.id, ':', criteria.value, '=> criteria factor =', factor[criteria.value]);
    document.getElementById('factor-value').innerHTML=factor[criteria.value];
    let der = rer * (factor[criteria.value]);
    document.getElementById('der').innerHTML=der;

    let foodCalories = document.getElementById('food-calories');
    console.log(foodCalories.id, ':', foodCalories.value);
    let food = (100*der)/foodCalories.value;
    document.getElementById('food-g').innerHTML=food;

}