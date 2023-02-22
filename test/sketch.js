const initWidth = 1000
const initHeight = 1000
const showScl = 0.8

function setup() {
  createCanvas(initWidth * showScl, initHeight * showScl)

  const randSeed = 0
  // const randSeed=floor(random(1000))
  print('rand seed:', randSeed)
  randomSeed(randSeed)
  noiseSeed(randSeed)
}

function draw() {
  clear()

  noLoop()
}


