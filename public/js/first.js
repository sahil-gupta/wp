$(function() {

    const NotFound = { template: '<p>Page not found</p>' }
    const Home = { template: '<p>home page</p>' }
    const About = { template: '<p>about page</p>' }

    const routes = {
      '/': Home,
      '/about': About
    }

    new Vue({
      el: '#app',
      data: {
        currentRoute: window.location.pathname
      },
      computed: {
        ViewComponent () {
          return routes[this.currentRoute] || NotFound
        }
      },
      render (h) { return h(this.ViewComponent) }
    })





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
