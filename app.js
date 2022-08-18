var light = document.getElementById('light');
var box = document.getElementById('box');
const colors = ['#c0392b', '#f1c40f', '#64fcfe', '#2ecc71' ];

for(let i = 0; i < 5; i++){
        var html = `
        <div class="lamp">
                <div class="mouth">
                </div>
                <div class="light" id="light" style="background-color: ${colors[i]}">
                </div>
        </div>
        `;
        box.innerHTML += html;
}

function turnOn() {
        const sheet = new CSSStyleSheet();
        sheet.insertRule(`.on {animation: onLight ${document.getElementById('speed').value}s alternate infinite ease-in-out;}`);
        /*
        document.adoptedStyleSheets = [sheet];

        light.className = 'light on';
        */
        const classeQueDesejoAlterar = ".italic";

        /* Percorre todas as regras CSS do primeiro Stylesheet da página */
        let cssRuleList = [...document.styleSheets[0].cssRules].filter( rule => rule.selectorText == classeQueDesejoAlterar)
        
        /* Percorre todas as regras capturadas e aplica o CSS */
        for (let cssRule of cssRuleList) {
          cssRule.style.setProperty("background", "red")
        }
}
function turnOff(){
        light.className = 'light';
}
