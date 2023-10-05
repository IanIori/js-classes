export default class Customer {

    constructor(name, phone, income, email) {
        this.name = name;
        this.phone = phone;
        this.income = income;
        this.email = email;
    }

    getIncome() {
        return this.income;
    }

    checkCredit() {
        return new Promise((resolve, reject) => {
            if (this.getIncome() > 2000) {
                resolve(`Credit approved for income of: $${this.getIncome()}`)
            } else {
                reject(`Credit rejected for income of: $${this.getIncome()}`)
            }
        })
    }

}