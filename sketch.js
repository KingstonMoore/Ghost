var gamestate = 0

function preload(){
  towerImg = loadImage("tower.png")
  ghostImg = loadImage("ghost-standing.png")
  doorImg = loadImage("door.png")
  climberImg = loadImage("climber.png")
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300, 300)
  tower.addImage(towerImg)
  tower.velocityY = 1
  ghost = createSprite(300, 300)
  ghost.addImage(ghostImg)
  ghost.scale = 0.3
  doorg = createGroup()
  climberg = createGroup()
  blockg = createGroup()
}

function draw() {
  if (gamestate === 0){
    
  
  if (tower.y > 600){
    tower.y = 0
  }
  if (keyDown(" ")){
    ghost.velocityY = -7
  }
  ghost.velocityY = ghost.velocityY + 0.3
  ghost.velocityX = 0
  if (keyDown("right")){
    ghost.velocityX = 5
  }
  if (keyDown("left")){
    ghost.velocityX = -5
  }
  doors()
  ghost.collide(climberg)

  if (ghost.isTouching(blockg)){
    gamestate = 1
  }
 }

 if (gamestate === 1){
   tower.destroy()
   ghost.destroy()
   doorg.destroyEach()
   climberg.destroyEach()
   blockg.destroyEach()
   background("black")
   textAlign("center")
   textSize(40)
   fill ("red")
   text("Game Over", 300, 300)
 }
 
  drawSprites()
}

function doors(){
  if (frameCount%200=== 0){
    door = createSprite(random(100,500), -50)
    door.velocityY = 1
    door.addImage(doorImg)
    doorg.add(door)
    ghost.depth = door.depth + 1
    climber = createSprite(door.x, 0)
    climber.velocityY = 1
    climber.addImage(climberImg)
    climberg.add(climber)
    block = createSprite(door.x, 10, 100, 10)
    block.velocityY = 1
    block.visible = false 
    blockg.add(block)
  }
}
