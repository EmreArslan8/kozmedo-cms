module.exports = ({ env }) => ({
  upload: {
    enabled: true,
    config: {
      provider: "aws-s3",
      providerOptions: {
        params: {
          Bucket: env("AWS_S3_MEDIA_BUCKET"),
        },
      },
    },
  },
  "website-builder": {
    enabled: true,
    config: {
      url: env("GH_WEBHOOK_URL"),
      trigger: {
        type: "manual",
      },
      headers: {
        Authorization: env("GH_AUTH_HEADER"),
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
      body: {
        event_type: env("GH_WEBHOOK_EVENT_TYPE"),
        client_payload: {
          target_branch: env("GH_TARGET_BRANCH"),
        },
      },
    },
  },
  "preview-button": {
    enabled: true,
    resolve: "./src/plugins/preview-button",
  },
});
