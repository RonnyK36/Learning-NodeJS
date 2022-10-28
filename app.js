const salary = 12000
const taxable = 10000
const percentageTax = 16

if (salary > 10000) {
    console.log(`Earns ${salary} and Should be taxed`)
} else {
    console.log('Not PAYE');
}

console.log(`NB: For salaries above ${taxable} we charge ${percentageTax}%`);