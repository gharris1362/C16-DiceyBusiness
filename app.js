let btnContainer = document.getElementById("BtnContainer");
let DiceContainer = document.getElementById("DiceContainer");

let addDice = document.createElement("button");
let rollDice = document.createElement("button");
let sumDice = document.createElement("button");
let advBtn = document.createElement("a");
addDice.textContent = "Create Dice";
rollDice.textContent = "Roll Dice";
advBtn.textContent = "Advanced";
sumDice.textContent = "Add up the Dice";
addDice.className = "btn btn-primary m-5";
advBtn.className = "rainbow-button btn";
rollDice.className = "btn btn-primary m-5";
sumDice.className = "btn btn-primary m-5";
btnContainer.appendChild(addDice);
btnContainer.appendChild(rollDice);
btnContainer.appendChild(sumDice);
btnContainer.appendChild(advBtn);

let dieArr = [];
let dieID = 0;
let isActualDie = false

class Die {
  constructor() {
    this.value = Math.floor(Math.random() * 6 + 1);
    this.div = document.createElement("div");
    this.div.textContent = this.value;
    this.id = `${dieID++}`;
    this.div.addEventListener("click", () => this.roll());
    this.div.addEventListener("dblclick", () => {
        DiceContainer.removeChild(this.div);
        // let index = dieArr.indexOf(this)
        // dieArr.splice(index, 1)
        dieArr = dieArr.filter((die) => die.id != this.id);
    });
    this.roll();
    DiceContainer.appendChild(this.div);
    dieArr.push(this);
}

roll = () => {
    let newValue = Math.floor(Math.random() * 6 + 1);
    this.value = newValue;
    if (isActualDie == true) {
        this.div.className = "actualDie";
        
    if (this.value == 1) {
                  this.div.textContent = '\u{02680}'
        } else if (this.value == 2) {
            this.div.textContent = '\u{02681}'
        } else if (this.value == 3) {
            this.div.textContent = '\u{02682}'
        }else if (this.value == 4) {
            this.div.textContent = '\u{02683}'
        }else if (this.value == 5) {
            this.div.textContent = '\u{02684}'
        }else if (this.value == 6) {
            this.div.textContent = '\u{02685}'
        }
      } else {
        this.div.className = "die";
      
    this.div.textContent = this.value;
      }
  };
}

addDice.addEventListener("click", () => {
  new Die();
  console.log(dieArr);
});

rollDice.addEventListener("click", () => {
  dieArr.forEach((die) => die.roll());
});

sumDice.addEventListener("click", () => {
  let counter = 0;
  dieArr.forEach((die) => (counter += die.value));
  alert(counter);
});

advBtn.addEventListener("click", () => {
    isActualDie = true
  dieArr.forEach((die) => {
      die.div.classList.remove('die')
      die.div.className = 'actualDie'
    if (die.value == 1) {
      die.div.textContent = "\u{02680}";
    } else if (die.value == 2) {
      die.div.textContent = "\u{02681}";
    } else if (die.value == 3) {
      die.div.textContent = "\u{02682}";
    } else if (die.value == 4) {
      die.div.textContent = "\u{02683}";
    } else if (die.value == 5) {
      die.div.textContent = "\u{02684}";
    } else if (die.value == 6) {
      die.div.textContent = "\u{02685}";
    }
  });
});
