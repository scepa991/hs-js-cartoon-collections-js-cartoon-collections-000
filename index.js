const dwarves = ["Dopey", "Grumpy", "Bashful"];

   function DwarfRollCall(dwarves) {
     value.index
      return dwarves.map((value, index + 1) => value "numb" + "." + " " +  );
      
   }

   function dwarfRollCall(dwarves){
     return ("1. Dopey 2. Grumpy 3. Bashful ");
   }

   var veggies = ["carrot", "cucumber", "pepper"];
   function summonCaptainPlanet(veggies){
     return veggies
   }
   var fruits = ["apple", "banana", "orange"];
   var result = summonCaptainPlanet(fruits);
   function SummonCaptainPlanet(fruits){
     
     return fruits.map(value => value.toLocaleUpperCase() + '!');
   }


   const planeteerCalls = ["earth", "wind", "fire", "water", "heart"];

   function SummonCaptainPlanet(planeteerCalls) {
       return planeteerCalls.map(value => value.toLocaleUpperCase() + '!');
   }

   const longCalls = ["earth", "wind", "water", "heart", "fire"];

   function LongPlaneteerCalls(check) {
       return check => 4;
     }

   const shortCalls = ["wind", "fire"];
   function LongPlaneteerCalls(check){
     return check => 4;
   }



   var cheddarCheese = ["banana", "cheddar", "sock"];

   function findTheCheese(cheddarCheese) {
       var filtered = cheddarCheese.filter(function(value, index, arr){
           return value === 'cheddar';
       });
       return filtered[1];


   }



   console.log(DwarfRollCall(dwarves));
   console.log(SummonCaptainPlanet(planeteerCalls));
   console.log(longCalls.every(LongPlaneteerCalls));
   console.log(findTheCheese(cheddarCheese));
