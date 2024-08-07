// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell, usePottery } from "./PotteryCatalog.js"


// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 15, 15)
let plate = makePottery("plate", 4, 1)
let bowl = makePottery("bowl",5, 10)
let vase = makePottery("vase", 20, 25)
let ball = makePottery("ball", 35, 30)

console.log(mug)
console.log(plate)
console.log(bowl)
console.log(vase)
console.log(ball)
// Fire each piece of pottery in the kiln
let FMug = firePottery(mug, 2000)
let FPlate = firePottery(plate, 3000)
let FBowl = firePottery(bowl, 1850)
let FVase = firePottery(vase, 2500)
let FBall = firePottery(ball, 1760)

console.log(FMug)
console.log(FPlate)
console.log(FBowl)
console.log(FVase)
console.log(FBall)

// Determine which ones should be sold, and their price
toSellOrNotToSell(FMug)
toSellOrNotToSell(FPlate)
toSellOrNotToSell(FBowl)
toSellOrNotToSell(FVase)
toSellOrNotToSell(FBall)

const potteryForSale = usePottery()

console.log(potteryForSale)
// Invoke the component function that renders the HTML list

