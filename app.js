var light = document.getElementById('light');
var baseLamp = 
` <div class="lamp">
        <div class="mouth">
        </div>
        <div class="light" id="light">
        </div>
</div>`
var box = document.getElementsByClassName('box_vertical');
box.innerHTML = baseLamp;


function turnOn() {
        const sheet = new CSSStyleSheet();
        sheet.insertRule(`.on {animation: onLight ${document.getElementById('speed').value}s alternate infinite ease-in-out;}`);
        document.adoptedStyleSheets = [sheet];

        light.className = light.className.concat(' on');;
}
function turnOff(){
        light.className = 'light';
}
