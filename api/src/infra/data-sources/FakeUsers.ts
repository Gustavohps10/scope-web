type FakeUser = {
    _id?: number;
    fullname: string;
    email: string;
    password: string;
}

export function readOne(): FakeUser {
    return {
        _id: 1, 
        fullname: "joãozinho",
        email: "joaozinho@gmail.com",
        password: "1234"
    }
}

export function readAll(): FakeUser[] {
    return [
        {
            _id: 1, 
            fullname: "joãozinho",
            email: "joaozinho@gmail.com",
            password: "1234"
        },
        {
            _id: 2, 
            fullname: "cr7",
            email: "joaozinho@gmail.com",
            password: "1234"
        },
        {
            _id: 3, 
            fullname: "messi",
            email: "joaozinho@gmail.com",
            password: "1234"
        },
        {
            _id: 4, 
            fullname: "neymar",
            email: "joaozinho@gmail.com",
            password: "1234"
        }
    ]
}