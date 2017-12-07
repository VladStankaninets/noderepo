var myFunc = function myFunc (nm, slr) {
  
  var name = nm;
  var salary = slr;
  console.log(`Hi ${name} Your salary ${salary}`);
  
    function salaryIncrease () {
        salary += 10000 ;  
        return(`Hi ${name} Your salary ${salary}`);
    };
  
return salaryIncrease;

};

var SalInc = myFunc('Vlad', 50000);
console.log(SalInc());
console.log(SalInc());
console.log(SalInc());
