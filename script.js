const factor = {
    'months0-4' : 2.5,
    'months4-12' : 2,
    'neutered' : 1.2,
    'intact' : 1.4,
    'inactive/obese' : 1.0,
    'weight-loss' : 0.8,
    'weight-gain' : 1.3,
}

const calculator = document.getElementById('form');
let weight = document.getElementById('weight');
let criteria = document.getElementById('criteria');
let foodCalories = document.getElementById('food-calories');

let rer = 70*(Math.pow(weight.value, 0.67));
let der = rer * (factor[criteria.value]);
let food = (100*der)/foodCalories.value;


if (calculator !== null) {

    calculator.addEventListener('keydown', event => {
        if (event.target.id === 'weight') { 
            rer = 70*(Math.pow(weight.value, 0.67));
            document.getElementById('rer').innerHTML=(Number(rer).toFixed(2) + ' [kcal per day]');
            der = rer * (factor[criteria.value]);
            document.getElementById('der').innerHTML=(Number(der).toFixed(2) + ' [kcal per day]');
            food = (100*der)/foodCalories.value;
            document.getElementById('food-g').innerHTML=(Number(food).toFixed(2) + ' [g]');
        }

        else if (event.target.id === 'food-calories')  { 
            sleep(20);
            console.log(der);
            console.log(foodCalories.value);

            food = (100*der)/foodCalories.value;
            document.getElementById('food-g').innerHTML=(Number(food).toFixed(2) + ' [g]');
        }  
    })

    calculator.addEventListener('change', event => {
        if (event.target.id === 'criteria')  { 
            der = rer * (factor[criteria.value]);
            document.getElementById('der').innerHTML=(Number(der).toFixed(2) + ' [kcal per day]');
            food = (100*der)/foodCalories.value;
            document.getElementById('food-g').innerHTML=(Number(food).toFixed(2) + ' [g]');
        }        
    })
}

