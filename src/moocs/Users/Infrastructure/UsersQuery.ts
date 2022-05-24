export const UsersQuery = {
    all: 'CALL get_all_users()',
    one: 'CALL find_user(?, ?)',
    findByUsername: 'CALL find_username(?)',
    add: 'CALL add_user(?, ?, ?, ?)',
    update: 'CALL edit_user(?, ?, ?, ?)',
    remove: 'CALL remove_user(?)',
};