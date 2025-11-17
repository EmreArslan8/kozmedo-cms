    // ~/strapi-aws-s3/backend/config/middlewares.js

    module.exports = ({ env }) => [
      'strapi::errors',
      {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'http:'],
              'img-src': [
                "'self'",
                'data:',
                'blob:',
                'dl.airtable.com',
                `${env('AWS_S3_MEDIA_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`,
              ],
              'media-src': [
                "'self'",
                'data:',
                'blob:',
                `${env('AWS_S3_MEDIA_BUCKET')}.s3.${env('AWS_REGION')}.amazonaws.com`,
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      },
      'strapi::cors',
      'strapi::poweredBy',
      'strapi::logger',
      'strapi::query',
      'strapi::body',
      'strapi::session',
      'strapi::favicon',
      'strapi::public',
    ];
