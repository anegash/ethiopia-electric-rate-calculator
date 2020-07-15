var rate = 
[
{ceiling: 50, price: 0.2730},
{ceiling: 100, price: 0.5617},
{ceiling: 200, price: 1.0622},
{ceiling: 300, price: 1.2750},
{ceiling: 400, price: 1.3833},
{ceiling: 500, price: 1.4965},{
ceiling: 100000000, price: 1.5877},
]

function calculateCost(usage){

  var sum=0;
  for (var i = 0; i < rate.length; i++) {
    console.log ('usage: ' + usage);
    console.log ('sum: ' + sum);
    console.log ('');

    if(usage > rate[i].ceiling){
      sum = sum + rate[i].price * rate[i].ceiling
      usage -= rate[i].ceiling
    }else{
      sum += (rate[i].price * usage);
      break;
    }
  }

  return sum;

}

var usage = 2000
console.log(calculateCost(usage));
