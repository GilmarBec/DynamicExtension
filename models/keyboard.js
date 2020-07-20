class Keyboard{
    keys = [];

    keyDown(){
        throw "Keydown not setted";
    };

    keyUpkeyDown(){
        throw "Keyup not setted";
    };

    onKeyDown(){
        document.onkeydown = (event) => {
            this.keys[event.keyCode] = true;
            this.keyDown();
        };
    }

    onKeyUp(){
        document.onkeyup = (event) => {
            this.keys[event.keyCode] = false;
            this.keyUp();
        };
    }

    allIsTriggered(inputs){
        let allTriggered = true;
        inputs.forEach((key) => {
            allTriggered &= this.keys[key]
        });
        return allTriggered;
    }
}