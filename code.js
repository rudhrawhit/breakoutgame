var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["29a7c9c1-84bf-4822-8dde-f271ad963b8f","155276c2-7b72-4aeb-906a-7e03077d614b","3525ea99-86f8-4f50-9130-d1658ecb220c","16e477f3-a676-45ff-a204-9b2cefc7e3b8","6cb92cd3-6d48-4003-8029-13ef26733da8","42167912-68b0-45bf-bbd9-f151b6194f84","344a4eaf-302b-4cbb-a019-da6ddb4e9e1c","8ca94b8c-16c0-4902-a48c-fb864527fe2a","573901bc-4a58-4755-8416-278f0f7603a8","898552c1-ed2a-4d17-87b3-a7eeef4cc7ac","d4652193-5260-4756-8dab-28ce2a33978f","5f9b303f-4410-471c-a379-866e79b20931"],"propsByKey":{"29a7c9c1-84bf-4822-8dde-f271ad963b8f":{"name":"g","sourceUrl":null,"frameSize":{"x":70,"y":17},"frameCount":1,"looping":true,"frameDelay":12,"version":"7DPonlN1uyDUyft7ZL62V39fO4lnai87","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":17},"rootRelativePath":"assets/29a7c9c1-84bf-4822-8dde-f271ad963b8f.png"},"155276c2-7b72-4aeb-906a-7e03077d614b":{"name":"ground_stone_small_1","sourceUrl":"assets/api/v1/animation-library/gamelab/weXjtt4swzsNYqcAiwNklQdakU_thK3b/category_video_games/ground_stone_small.png","frameSize":{"x":200,"y":100},"frameCount":1,"looping":true,"frameDelay":2,"version":"weXjtt4swzsNYqcAiwNklQdakU_thK3b","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":100},"rootRelativePath":"assets/api/v1/animation-library/gamelab/weXjtt4swzsNYqcAiwNklQdakU_thK3b/category_video_games/ground_stone_small.png"},"3525ea99-86f8-4f50-9130-d1658ecb220c":{"name":"st","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"w0c6nf7Lzsy4rzEx.BBZJ3qnfzdXvxs.","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/3525ea99-86f8-4f50-9130-d1658ecb220c.png"},"16e477f3-a676-45ff-a204-9b2cefc7e3b8":{"name":"rockGrass_1","sourceUrl":null,"frameSize":{"x":108,"y":239},"frameCount":1,"looping":true,"frameDelay":12,"version":"QX3eEv9D2urSLhcJNtpnqWpsEqf8Sbir","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":108,"y":239},"rootRelativePath":"assets/16e477f3-a676-45ff-a204-9b2cefc7e3b8.png"},"6cb92cd3-6d48-4003-8029-13ef26733da8":{"name":"r","sourceUrl":null,"frameSize":{"x":30,"y":67},"frameCount":1,"looping":true,"frameDelay":12,"version":"JQVYQlyWcjNaWIQZlFyZA8VF4aCtPcRI","categories":["video_games"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":67},"rootRelativePath":"assets/6cb92cd3-6d48-4003-8029-13ef26733da8.png"},"42167912-68b0-45bf-bbd9-f151b6194f84":{"name":"farm","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"GJNlB2Qg35wPRm20jZGpbiY8.I25in2R","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/42167912-68b0-45bf-bbd9-f151b6194f84.png"},"344a4eaf-302b-4cbb-a019-da6ddb4e9e1c":{"name":"coin","sourceUrl":null,"frameSize":{"x":21,"y":21},"frameCount":12,"looping":true,"frameDelay":12,"version":".2X47o7DyIHjVxCpJtozWnrHV9gedbrU","categories":["board_games_and_cards"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":84},"rootRelativePath":"assets/344a4eaf-302b-4cbb-a019-da6ddb4e9e1c.png"},"8ca94b8c-16c0-4902-a48c-fb864527fe2a":{"name":"pop","sourceUrl":null,"frameSize":{"x":34,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"jvJSetK7OYo2yF_3B22PFOf5g6VZwIe5","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":47},"rootRelativePath":"assets/8ca94b8c-16c0-4902-a48c-fb864527fe2a.png"},"573901bc-4a58-4755-8416-278f0f7603a8":{"name":"pop1","sourceUrl":null,"frameSize":{"x":34,"y":47},"frameCount":1,"looping":true,"frameDelay":12,"version":"pJ5h8kFHEbQ0QJ0GFmFXVaBtTx3QgVug","loadedFromSource":true,"saved":true,"sourceSize":{"x":34,"y":47},"rootRelativePath":"assets/573901bc-4a58-4755-8416-278f0f7603a8.png"},"898552c1-ed2a-4d17-87b3-a7eeef4cc7ac":{"name":"in","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"ShD.qrs.jjPqOHMcjEudGTDrAtlQI6vs","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":50},"rootRelativePath":"assets/898552c1-ed2a-4d17-87b3-a7eeef4cc7ac.png"},"d4652193-5260-4756-8dab-28ce2a33978f":{"name":"1","sourceUrl":null,"frameSize":{"x":50,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"fJjdd.ZlTSvJ6S7k2EUF9oBJzGBNdu0Y","loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":100},"rootRelativePath":"assets/d4652193-5260-4756-8dab-28ce2a33978f.png"},"5f9b303f-4410-471c-a379-866e79b20931":{"name":"popo","sourceUrl":null,"frameSize":{"x":35,"y":44},"frameCount":1,"looping":true,"frameDelay":12,"version":"JQRk30KftrCp1AxA2v2dJIIZEBPt9hsB","loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":44},"rootRelativePath":"assets/5f9b303f-4410-471c-a379-866e79b20931.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var lives=0
textSize(20)
fill("red")
var player=createSprite(10,250,10,10)
player.setAnimation("pop")
var ground=createSprite(50,350,100,100)
ground.setAnimation("st")
var platform1=createSprite(150,275,70,15)
platform1.setAnimation("g")
var platform2=createSprite(230,225,70,15)
platform2.setAnimation("g")
var platform3=createSprite(320,175,70,15)
platform3.setAnimation("g")
var spike1=createSprite(125,370,50,80)
spike1.setAnimation("r")
var spike2=createSprite(150,370,50,80)
spike2.setAnimation("r")
var spike3=createSprite(175,370,50,80)
spike3.setAnimation("r")
var spike4=createSprite(200,370,50,80)
spike4.setAnimation("r")
var spike5=createSprite(225,370,50,80)
spike5.setAnimation("r")
var spike6=createSprite(250,370,50,80)
spike6.setAnimation("r")
var spike7=createSprite(275,370,50,80)
spike7.setAnimation("r")
var spike8=createSprite(300,370,50,80)
spike8.setAnimation("r")
var spike9=createSprite(325,370,50,80)
spike9.setAnimation("r")
var spike10=createSprite(350,370,50,80)
spike10.setAnimation("r")
var spike11=createSprite(375,370,50,80)
spike11.setAnimation("r")
var point=createSprite(150,250,20,20)
point.setAnimation("coin")
var point1=createSprite(225,200,20,20)
point1.setAnimation("coin")
var point2=createSprite(325,150,20,20)
point2.setAnimation("coin")
var p=createSprite(150,100,0.1,0.1)

var r=createSprite(150,325,0.1,0.1)

var p1=createSprite(225,50,0.1,0.1)

var r1=createSprite(225,325,0.01,0.01)

var p2=createSprite(300,50,0.01,0.01)

var r2=createSprite(300,325,0.01,0.01)

var gameState="serve"

var button=createSprite(375,25,50,50)
button.setAnimation("in")
point1.velocityY=-2
point2.velocityY=-2

player.velocityY=3



function draw() {
  background("blue");
if (gameState=="serve") {

  textSize(20);
  stroke("red");
  text("welcome! press enter to start",13,25);
  if (player.isTouching(ground)) {
    player.velocityY=0
  }
 if(keyDown("enter")){
  gameState="play"}
}
  
   ;point.y=platform1.y-20
   ;point1.y=platform2.y-20
   ;point2.y=platform3.y-20
  
 if (gameState=="play") {
    
  
   
  if (keyWentDown("space ")) {
    player.y=player.y-40
  }
 if (keyWentDown("p")) {
   player.setAnimation("popo")
 }
  if (keyWentUp("p")) {
   player.setAnimation("pop")
 }
 
  if (keyWentDown("space")) {
   player.y = player.y-30;
   player.velocityY = 2;
 }
 
if (keyDown("enter")) {
    platform1.velocityY=-5

  }
  if (keyDown("enter")) {
    platform2.velocityY=+5
 
  }
  if (keyDown("enter")) {
    platform3.velocityY=-5
    
  }
    
  background("white")
 if (keyWentDown("space")) {
   player.velocityY=3
 }
 
  if (keyDown("right")) {
    player.setAnimation("pop")
    player.x=player.x+2
  }
  if (keyDown("left")) {
    player.setAnimation("pop1")
    player.x=player.x-2
  }
  if (player.isTouching(ground)) {
    player.velocityY=0
  }
   if (player.isTouching(platform1)) {
    player.y=platform1.y-30
  }
   if (player.isTouching(platform2)) {
    player.y=platform2.y-30
  }
   if (player.isTouching(platform3)) {
    player.y=platform3.y-30
  }
  
  if (platform1.isTouching(p)) {
    platform1.velocityY=+5
  }
   if (platform1.isTouching(r)) {
    platform1.velocityY=-5
  }
    if (platform2.isTouching(p1)) {
    platform2.velocityY=+5
  }
   if (platform2.isTouching(r1)) {
    platform2.velocityY=-5
  }
   if (platform3.isTouching(p2)) {
    platform3.velocityY=+5
  }
   if (platform3.isTouching(r2)) {
    platform3.velocityY=-5
  }
  
  if (player.isTouching(point)) {
   playSound("assets/category_collect/collect_item_bling_1.mp3", false);
   point.destroy()
  }
  if (player.isTouching(point1)) {
   playSound("assets/category_collect/collect_item_bling_1.mp3", false);
   point1.destroy()
  }
  if (player.isTouching(point2)) {
   playSound("assets/category_collect/collect_item_bling_1.mp3", false);
   point2.destroy()
  }
   
 }
  if (player.isTouching(spike1)||
      player.isTouching(spike2)||
      player.isTouching(spike3)||
      player.isTouching(spike4)||
      player.isTouching(spike5)||
      player.isTouching(spike6)||
      player.isTouching(spike7)||
      player.isTouching(spike8)||
      player.isTouching(spike9))
 {player.velocityY=0
 player.velocityX=0
       platform1.x=150
 platform2.x=230
 platform3.x=320
 gameState="end"
   textSize(20)
   fill("red")
   text("gameover!",200,50)
   
 }
  if (player.isTouching(button)) {
    button.setAnimation("1")
    player.velocityY=0
    player.velocityX=0
    platform1.velocityY=0
    platform2.velocityY=0
    platform3.velocityY=0
    textSize(20)
    text("congratulation",50,240)
  }
  
  
  
  
  
  
  
  drawSprites()
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
