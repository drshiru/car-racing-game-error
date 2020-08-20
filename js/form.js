class Form{
    constructor(){
    this.input = createInput('Name');
    this.button = createButton('join');
    this.greeting = createElement('h3');
    }
    hide(){
     this.input.hide();
     this.button.hide();
     this.greeting.hide();
    }
    display(){
    var title = createElement('h2');
    title.html("Car Racing Game");
    title.position(displayWidth/2-50,0);
    this.input.position(displayWidth/2-40,displayHeight/2-20);
    this.button.position(displayWidth/2,displayHeight/2)
    this.button.mousePressed(()=>{
    
    
    player.name = this.input.value();
    playerCount++ ;
    player.index = playerCount;
    player.update();
    player.updateCount(playerCount);
    this.input.hide();
    this.button.hide();
    this.greeting.html("Hello " + player.name);
    this.greeting.position(displayWidth/2-40,displayHeight/2-20);
    });
    }
}