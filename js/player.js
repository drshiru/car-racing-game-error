class Player{
    constructor(){
    this.index = null;
    this.distance = 0;
    this.name = null;
    }
    getCount(){
        database.ref('playerCount').on("value",function (data){
        playerCount = data.val();
            })
    }
    updateCount(count){
        database.ref('/').update({
        'playerCount': count
          })
    }
    update(){
     var playerIndex = "players/Player" + this.index;
     database.ref(playerIndex).set({
         'name': this.name,
         'distance' : this.distance
     });
    }

    static getPlayerinfo(){
    database.ref('players').on("value",(data) => {
        allPlayers = data.val();
    })
    
    }
}