class Worker {
    constructor(name, surname, rate, days, sal) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
        this.sal = sal;
    }

    getSalary() {
        console.log(`Привет, я ${this.name} ${this.surname}! Я зарабатываю ${this.rate} драконов в день. За ${this.days} дней я заработал ${this.sal} драконов! Я крутой!`)
    }
}

let worker1 = new Worker('Вася', 'Пупкин', 10, 30, 10 * 30);
let worker2 = new Worker('John', 'Snow', 1000, 5, 1000 * 5);

//выводим в консоль worker1.getSalary(), worker2.getSalary()