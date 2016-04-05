angular.module('ngArconomy', [
        'templates-app',
        'ngArconomy.common',
        'ngArconomy.contact',
        'ui.router'
    ])
    .run(
        ['$rootScope', '$state', '$stateParams',
            function ($rootScope, $state, $stateParams) {
                // It's very handy to add references to $state and $stateParams to the $rootScope
                // so that you can access them from any scope within your applications.For example,
                // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
                // to active whenever 'contacts.list' or one of its decendents is active.
                $rootScope.$state = $state;
                $rootScope.$stateParams = $stateParams;
            }
        ]
    )

    .config(
        ['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                /////////////////////////////
                // Redirects and Otherwise //
                /////////////////////////////

                // Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
                $urlRouterProvider

                // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
                .otherwise('/');


                //////////////////////////
                // State Configurations //
                //////////////////////////

                // Use $stateProvider to configure your states.
                $stateProvider
                    .state("home", {
                        // Use a url of "/" to set a states as the "index".
                        url: "/",
                        views: {
                            "main": {
                                controller: 'AppCtrl',
                                templateUrl: "home/templates/home.tpl.html",
                                resolve:{
                                    scrollTop: function($location, $anchorScroll)   {
                                        $location.hash('mainTop');
                                        $anchorScroll();
                                    }
                                }

                            }
                        }
                    })
                    .state("about", {
                        // Use a url of "/" to set a states as the "index".
                        url: "/about",
                        views: {
                            "main": {
                                controller: 'AppCtrl',
                                templateUrl: "home/templates/about.tpl.html"

                            }
                        }
                    })
                    .state("contact", {
                        // Use a url of "/" to set a states as the "index".
                        url: "/contact",
                        views: {
                            "main": {
                                controller: 'ContactCtrl',
                                templateUrl: "contact/templates/contact.tpl.html",
                                resolve: {
                                    scrollTop: function ($location, $anchorScroll) {
                                        $location.hash('mainTop');
                                        $anchorScroll();
                                    }
                                }
                            }
                        }
                    })
                    .state("success", {
                        // Use a url of "/" to set a states as the "index".
                        url: "/success",
                        views: {
                            "main": {
                                templateUrl: "contact/templates/success.tpl.html",
                                resolve:{
                                    scrollTop: function($location, $anchorScroll)   {
                                        $location.hash('mainTop');
                                        $anchorScroll();
                                    }
                                }
                            }
                        }
                    });
            }
        ]
    );

angular.module('ngArconomy.common', []);
angular.module('ngArconomy.contact', ['ngArconomy.common', 'ngResource']);








