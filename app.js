function turnOn() {
    var light = document.getElementById('light');
    const speed = document.getElementById('speed').value * 1000;
    console.log(speed)


    while(true){
        setTimeout(function(){
            light.className = light.className.concat(' on')
            clearInterval();
        }, speed);
            
        light.className = 'light';
    }
}
