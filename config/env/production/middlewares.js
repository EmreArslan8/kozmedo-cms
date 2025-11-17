    // ~/strapi-aws-s3/backend/config/middlewares.js

    module.exports = ({ env }) => [
      'strapi::errors',
      {
        name: 'strapi::security',
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              'connect-src': ["'self'", 'https:'],
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
      {
        name: 'strapi::body',
        config: {
          formLimit: "256mb", // modify form body
          jsonLimit: "256mb", // modify JSON body
          textLimit: "256mb", // modify text body
          formidable: {
            maxFileSize: 200 * 1024 * 1024, // multipart data, modify here limit of uploaded file size
          },
        },
      },
      'strapi::cors',
      'strapi::poweredBy',
      'strapi::logger',
      'strapi::query',
      'strapi::session',
      'strapi::favicon',
      'strapi::public',
    ];
