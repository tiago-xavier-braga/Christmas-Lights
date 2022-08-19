var box = document.getElementById('box');
const colors = ['#c0392b', '#f1c40f', '#64fcfe', '#2ecc71' ];

function turnOn() {
        box.innerHTML= '';
        for(let i = 0; i < 5; i++){
                var html = `
                <div class="lamp">
                        <div class="mouth">
                        </div>
                        <div class="light on" id="light" style="background-color: ${colors[i]}">
                        </div>
                </div>
                `;
                box.innerHTML += html;
        }

        const sheet = new CSSStyleSheet();
        sheet.insertRule(`.on {animation: onLight ${document.getElementById('speed').value}s alternate infinite ease-in-out;}`);
        document.adoptedStyleSheets = [sheet];

        document.getElementById('light').className = 'light on';
}
function turnOff(){
        document.getElementById('light').className = 'light';
}
