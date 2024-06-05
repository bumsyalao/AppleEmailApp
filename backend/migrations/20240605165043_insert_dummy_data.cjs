/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex('emails').insert([
        {
            to: 'john.doe@example.com',
            cc: 'jane.doe@example.com',
            bcc: '',
            subject: 'Meeting Schedule',
            body: 'Here is the schedule for the meeting...',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
        },
        {
            to: 'jane.doe@example.com',
            cc: 'john.doe@example.com',
            bcc: 'manager@example.com',
            subject: 'Project Update',
            body: 'Here is the update on the project...',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
        },
        {
            to: 'manager@example.com',
            cc: '',
            bcc: 'john.doe@example.com',
            subject: 'Performance Review',
            body: 'Your performance review is scheduled...',
            created_at: knex.fn.now(),
            updated_at: knex.fn.now()
        }
    ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    // You can leave this blank or add code to remove the dummy data if needed
};
