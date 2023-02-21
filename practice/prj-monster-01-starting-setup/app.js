// generic function defined Outside
function attackCalc(max, min) {
    return Math.floor(Math.random(max - min)) + min;
}

const app = Vue.createApp({
    data() {
        return {
            monsterHealth: 100,
            playerHealth: 100,
            gameCount: 0,
            winner: null,
            logMessage : [],
        }
    },
    methods: {
        attackMonster() {
            console.log("ATTACKING MONSTER");
            this.gameCount++;
            const attackValue = attackCalc(12, 5);
            this.monsterHealth -= attackValue;
            this.displayLogMessage('Player', 'Attacks','Monster', attackValue);
            this.attackPlayer(); // If monster is attacked,Then it attacks the player back
        },
        attackPlayer() {
            console.log("ATTACKING PLAYER");
            const attackValue = attackCalc(18, 10);
            this.playerHealth -= attackValue;
            this.displayLogMessage('Monster', 'Attacks', 'Player', attackValue);
        },
        specialAttackMonster() {
            console.log(" SPECIAL ATTACKING MONSTER");
            this.gameCount++;
            const attackValue = attackCalc(25, 10);
            this.monsterHealth -= attackValue;
            this.displayLogMessage('Player', 'Special Attacks','Monster', attackValue);
            this.attackPlayer(); // If monster is attacked,Then it attacks the player back
        },
        healPlayer() {
            this.gameCount++;
            const healValue = attackCalc(8, 20);
            if (this.playerHealth + healValue > 100) {
                this.playerHealth = 100;
            } else {
                this.playerHealth += healValue;
            }
            this.displayLogMessage('Player', 'Heals by','Player', healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = "monster";
            this.displayLogMessage('Player', 'Surrendered');
        },
        startnewGame() {
            this.monsterHealth = 100;
            this.playerHealth = 100;
            this.gameCount = 0;
            this.winner = null;
            this.logMessage = [];
        },
        displayLogMessage(who, what, whom, value) {
        this.logMessage.unshift({
            actionBy : who,
            actionTo : whom,
            actionType : what,
            actionvalue : value,
        })
        }
    },
    watch: {
        playerHealth(value) {
            if (value <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
            }
            else if (value < 0) {
                this.winner = 'monster';
            }
        },
        monsterHealth(value) {
            if (value <= 0 && this.playerHealth <= 0) {
                this.winner = 'draw';
            }
            else if (value < 0) {
                this.winner = 'player';
            }
        }
    },


    //Inline style Logic is shifted to computed properties.
    computed: {
        monsterHealthStyle() {
            if (this.monsterHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.monsterHealth + '%' };
        },
        playerHealthStyle() {
            if (this.playerHealth < 0) {
                return { width: '0%' };
            }
            return { width: this.playerHealth + '%' };
        },
        specialAttackDisable() { // Can be clicked once in 3 rounds
            return (this.gameCount % 3 !== 0);
        }
    }
})
app.mount("#game");
