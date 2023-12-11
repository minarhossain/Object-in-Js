const person = {
    firstName: 'Minar',
    lastName: 'Hossain',
    fullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
}
// this
console.log(person.fullName());