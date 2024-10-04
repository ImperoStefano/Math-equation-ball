const ball = document.querySelector('.ball');
const line = document.querySelector('.line');
const equationDisplay = document.getElementById('equation');

let crossings = 0;
let direction = 1; // 1 per destra, -1 per sinistra

// Array di equazioni
let equations = [
    "E=mc²",
    "a² + b² = c²",
    "F = ma",
    "c² = a² + b²",
    "d = rt",
    "pV = nRT",
    "i = V/R",
    "V = IR",
    "A = πr²",
    "F = G(m1*m2)/r²",
    "x = (-b ± √(b²-4ac)) / 2a",
    "s = ut + ½at²",
    "PV = nRT",
    "E = hf",
    "S = (n/2)(a + l)",
    "K.E. = ½mv²",
    "P = F/A",
    "V = IR",
    "λ = h/p",
    "x = x₀ + vt"
];

// Funzione per cambiare il colore della palla
function changeBallColor() {
    let colorValue;

    if (direction === 1) {
        // Rosso a blu
        colorValue = Math.floor(255 * (crossings % 7) / 7); // Gradazione
        ball.style.backgroundColor = `rgb(${255 - colorValue}, 0, ${colorValue})`;
    } else {
        // Blu a rosso
        colorValue = Math.floor(255 * ((7 - (crossings % 7)) / 7)); // Gradazione inversa
        ball.style.backgroundColor = `rgb(${colorValue}, 0, ${255 - colorValue})`;
    }
}

// Funzione per muovere la palla
function moveBall() {
    let position = 0;

    const interval = setInterval(() => {
        if (direction === 1) {
            // Movimento verso destra
            position += 5;
            if (position >= window.innerWidth - 50) { // Mantieni la palla all'interno dei bordi
                direction = -1; // Cambia direzione
                crossings++;
                changeBallColor(); // Cambia il colore della palla

                // Mostra una nuova equazione
                if (crossings % 7 === 0) {
                    let equation = equations[Math.floor(crossings / 7) % equations.length];
                    equationDisplay.innerText = equation;
                }
            }
        } else {
            // Movimento verso sinistra
            position -= 5;
            if (position <= 0) {
                direction = 1; // Cambia direzione
                crossings++;
                changeBallColor(); // Cambia il colore della palla

                // Mostra una nuova equazione
                if (crossings % 7 === 0) {
                    let equation = equations[Math.floor(crossings / 7) % equations.length];
                    equationDisplay.innerText = equation;
                }
            }
        }

        ball.style.left = position + 'px'; // Muovi la palla
    }, 50); // Velocità del movimento
}

// Avvia il movimento della palla
moveBall();
