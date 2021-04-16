// local
const secret = 'SUPER SECRET';

// share
const john = 'john';
const peter = 'peter';

/* The module object has the properties of the 
file itself, since in node all files are modules. The exports
property of the `module` can be modified to make variables available
to the rest of the application, and is the most common way to export them */
module.exports = { john, peter };