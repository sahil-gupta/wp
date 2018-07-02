$(function() {

    // var store = {
    //   debug: true,
    //   state: {
    //     message: 'Hello!'
    //   },
    //   setMessageAction (newValue) {
    //     if (this.debug) console.log('setMessageAction triggered with', newValue)
    //     this.state.message = newValue
    //   },
    //   clearMessageAction () {
    //     if (this.debug) console.log('clearMessageAction triggered')
    //     this.state.message = ''
    //   }
    // }
    //
    //
    // var vmA = new Vue({
    //   el: '#app',
    //   data: {
    //     privateState: {'cat': 'firstcat'},
    //     sharedState: store.state
    //   }
    // })

    // 1. Define route components.
    // These can be imported from other files
    const Foo = { template: '<div>foo</div>' }
    const Bar = { template: '<div>bar</div>' }

    // 2. Define some routes
    // Each route should map to a component. The "component" can
    // either be an actual component constructor created via
    // `Vue.extend()`, or just a component options object.
    // We'll talk about nested routes later.
    const routes = [
      { path: '/foo', component: Foo },
      { path: '/bar', component: Bar }
    ]

    // 3. Create the router instance and pass the `routes` option
    // You can pass in additional options here, but let's
    // keep it simple for now.
    const router = new VueRouter({
      routes // short for `routes: routes`
    })

    // 4. Create and mount the root instance.
    // Make sure to inject the router with the router option to make the
    // whole app router-aware.
    const app = new Vue({
      router
    }).$mount('#app')

// $.get("temptext.txt", function(data) {
//
//     $('#impress-first').append(data);
//     var api = impress('impress-first');
//     api.init();
// });

// api.next();
// api.prev();
// api.goto( stepIndex | stepElementId | stepElement, [duration] )
// api.tear();

});
