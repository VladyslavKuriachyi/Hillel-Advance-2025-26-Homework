const myContacts = {
    contacts: [
        {id: 1, name: 'John', phone: '123456789', email: '<jon@email.com>'},
        {id: 2, name: 'Peter', phone: '987654321', email: '<peter@email.com>'},
        {id: 3, name: 'Mary', phone: '123456789', email: '<mary@email.com>'},
        {id: 4, name: 'Kyle', phone: '123475786', email: '<kyle@email.com>'},
        {id: 5, name: 'Jane', phone: '443469789', email: '<jane@email.com>'}

    ],
   findByName: function (name) {
        return this.contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase());
   },
    addContact: function (contact) {
        const newId = this.contacts.length + 1;
        const newContact = {
            id: newId,
            name: contact.name,
            phone: contact.phone,
            email: contact.email
        };
        this.contacts.push(newContact);
        return newContact;


    }
};
console.log(myContacts.findByName('John'));

myContacts.addContact({name: `Peter`, phone: `987654321`, email: `<peter@email.com>`})
console.log (myContacts.contacts);
