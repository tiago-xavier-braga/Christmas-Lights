var light = document.getElementById('light');

function sleep(milliseconds) {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
};

async function turnOn() {

        light.className = light.className.concat(' on')
        await sleep(document.getElementById('speed').value * 1000);
        light.className = 'light'; 


}
