flowers = [
  {
    type:"chinese Latern",
    colors: ["Orange"],
    price:1,
    usdaZones: [3,4,5,6,7,8,9]
  }
]
const inexpensiveFlowers = () =>{
  const filteredFlowers = []
  for (const flower of flowers) {
    if (flowers.price < 2) {
      flowers.push(flower)
    }
    
  }
  console.log(filteredFlowers);
  return filteredFlowers
}

inexpensiveFlowers()
