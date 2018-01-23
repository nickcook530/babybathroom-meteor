// ---------- Database ----------- //
Bathrooms = new Mongo.Collection('bathrooms');


// ---------- Iron Routing ----------- //
// Router.configure({
//     // options that apply to all routes in the project
//     layoutTemplate: 'masterLayout',
//     notFoundTemplate: 'notFound',
//     loadingTemplate: 'loading',
// });

Router.route('/', {
    // options for the route
    name: 'main', //allows us to code href to this template
    template: 'main',
});

Router.route('/admin', {
    // options for the route
    name: 'admin', //allows us to code href to this template
    template: 'admin',
});
