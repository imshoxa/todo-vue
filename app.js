new Vue({
    el: '#app',
    data: {
        newTodo: '',
        todos: [],
        newContact: '',
        contacts: [],
        quotes: [
            "Bekhzod aka the best!!!",
            "even this took a long time because I didnt repeat it for a long time",
            "but luckily I adapt quickly and learn as well to everything (i will try my best) sincerely (shoha)",
            // можно добавить больше цитат по вашему выбору
        ],
        currentQuote: ''
    },
    methods: {
        addTodo() {
            if (this.newTodo.trim() !== '') {
                this.todos.push(this.newTodo);
                this.newTodo = '';
            }
        },
        removeTodo(index) {
            this.todos.splice(index, 1);
        },
        addContact() {
            if (this.newContact.trim() !== '') {
                this.contacts.push(this.newContact);
                this.newContact = '';
            }
        },
        removeContact(index) {
            this.contacts.splice(index, 1);
        },
        generateRandomQuote() {
            if (this.quotes.length === 0) {
                this.currentQuote = "No quotes available.";
            } else {
                const randomIndex = Math.floor(Math.random() * this.quotes.length);
                this.currentQuote = this.quotes.splice(randomIndex, 1)[0];
                if (this.quotes.length === 0) {
                    this.quotes = [...this.contacts]; // восстановление списка цитат после их исчерпания
                }
            }
        }
    }
});