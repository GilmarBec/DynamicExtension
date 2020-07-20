class Shorkeys extends Keyboard{
    events = [];

    keyDown = () => {
        this.events.forEach((event) => {
            if(this.allIsTriggered(event.keys)){
                console.log(event.name);
                event.event();
            }
        })
    };
}