import { User, UserProps } from "./User.entity";

test('updateName method', () => {
    const userProps: UserProps = {
        name: "admin",
        email: "test@admin.com",
        password: "1234" 
    };

    const user = new User(userProps);
    user.updateName('Name updated');

    expect(user.name).toBe('Name updated');
});

test('updateEmail method', () => {
    const userProps: UserProps = {
        name: "admin",
        email: "test@admin.com",
        password: "1234" 
    };

    const user = new User(userProps);
    user.updateEmail('updated@gmail.com');

    expect(user.email).toBe('updated@gmail.com');
});

test('updatePassword method', () => {
    const userProps: UserProps = {
        name: "admin",
        email: "test@admin.com",
        password: "1234" 
    };

    const user = new User(userProps);
    user.updatePassword('1111');

    expect(user.password).toBe('1111');
});