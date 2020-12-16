const factor = {
    '0' : 0,
    'months0-4' : 2.5,
    'months4-12' : 2,
    'neutered' : 1.2,
    'intact' : 1.4,
    'inactive/obese' : 1.0,
    'weight-loss' : 0.8,
    'weight-gain' : 1.3,
}

function numberFormat(val){
    return Number(val).toFixed(2);
}

function calcValues() {

    // rer
    const weight = document.getElementById('weight');
    console.log('weight:', weight.value);
    const rer = 70*(Math.pow(weight.value, 0.67));
    document.getElementById('rer').innerHTML=(numberFormat(rer) + ' [kcal per day]');

    // der
    const criteria = document.getElementById('criteria');
    const der = rer * (factor[criteria.value]);
    document.getElementById('der').innerHTML=(numberFormat(der) + ' [kcal per day]');
    const foodCalories = document.getElementById('food-calories');

    // food weight
    const foodCaloriesVal = parseFloat(foodCalories.value);
    if (foodCaloriesVal > 0) {
        const food = (100*der)/foodCaloriesVal;
        document.getElementById('food-g').innerHTML=(numberFormat(food) + ' [g]');
    }
}

// init calc
calcValues();

const calculator = document.getElementById('form');

if (calculator !== null) {

    calculator.addEventListener('keyup', event => {

        if (event.target.id === 'weight') { 
            calcValues();
        } else if (event.target.id === 'food-calories')  { 
            calcValues();
        }

    })

    calculator.addEventListener('change', event => {
        if (event.target.id === 'criteria')  { 
            calcValues();
        }        
    })
}

