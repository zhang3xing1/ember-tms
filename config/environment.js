/* jshint node: true */

module.exports = function(environment) {
    var ENV = {
        modulePrefix: 'ember-static-tms',
        environment: environment,
        baseURL: '/',
        locationType: 'auto',
        EmberENV: {
            FEATURES: {
                // Here you can enable experimental features on an ember canary build
                // e.g. 'with-controller': true
            }
        },

        APP: {
            // Here you can pass flags/options to your application instance
            // when it is created
        }
    };

    // https://www.google.com/maps/api/js/master?pb=!1m2!1u20!2s15!2szh-CN!3sUS!4s20/15/intl/zh_cn#WyI3eDV3d2Mxam85IiwiIl0
    // https://fonts.lug.ustc.edu.cn/css?family=Roboto:300,400,500,700

    ENV.contentSecurityPolicy = {
        'default-src': "'none'",
        'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com *.google.com https://maps.gstatic.com https://maps.googleapis.com",
        'font-src': "'self'  data: fonts.gstatic.com *.lug.ustc.edu.cn *.google.com https://fonts.gstatic.com",
        // 'http://fonts.lug.ustc.edu.cn/
        'frame-src': "'self' fonts.gstatic.com fonts.lug.ustc.edu.cn *.google.com https://www.google.com",
        'connect-src': "'self' maps.gstatic.com *.google.com",
        'img-src': "'self' *.google.com maps.googleapis.com *.gstatic.com https://mts1.google.com https://mts0.google.com https://maps.gstatic.com https://khms1.google.com https://maps.googleapis.com https://csi.gstatic.com https://khms0.google.com http://google-maps-icons.googlecode.com",
        // 'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com *.google.com",
        'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com *.google.com *.lug.ustc.edu.cn https://fonts.googleapis.com"
    };

    if (environment === 'development') {
        // ENV.APP.LOG_RESOLVER = true;
        // ENV.APP.LOG_ACTIVE_GENERATION = true;
        // ENV.APP.LOG_TRANSITIONS = true;
        // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
        // ENV.APP.LOG_VIEW_LOOKUPS = true;
    }

    if (environment === 'test') {
        // Testem prefers this...
        ENV.baseURL = '/';
        ENV.locationType = 'none';

        // keep test console output quieter
        ENV.APP.LOG_ACTIVE_GENERATION = false;
        ENV.APP.LOG_VIEW_LOOKUPS = false;

        ENV.APP.rootElement = '#ember-testing';
    }

    if (environment === 'production') {

    }

    return ENV;
};
