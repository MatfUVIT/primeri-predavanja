const add = document.querySelector('.add');
const update = document.querySelector('.update');
const remove = document.querySelector('.remove');

let kockica;

update.disabled = true;
remove.disabled = true;

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

add.onclick = function() {
    // Create a custom square element
    kockica = document.createElement('uvit-kocka');
    kockica.setAttribute('l', '100');
    kockica.setAttribute('c', 'red');
    document.body.appendChild(kockica);

    update.disabled = false;
    remove.disabled = false;
    add.disabled = true;
};

update.onclick = function() {
    // Randomly update square's attributes
    kockica.setAttribute('l', random(50, 200));
    kockica.setAttribute('c', `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`);
};

remove.onclick = function() {
    // Remove the square
    document.body.removeChild(kockica);

    update.disabled = true;
    remove.disabled = true;
    add.disabled = false;
};