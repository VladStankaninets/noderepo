var myFunc = function myFunc (nm, slr) {

    var name = nm;
    var salary = slr;
    console.log(`Hi ${name} Your salary ${salary}`);

    var salaryIncrease = function salaryIncrease () {
        salary += 10000;
        return `Hi ${name} Your salary ${salary}`;
    };

    return salaryIncrease;
};

var salInc = myFunc('Vlad', 50000);
console.log(salInc());
console.log(salInc());
console.log(salInc());
