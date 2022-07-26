module.exports = {
  packages: [
    {
      name: "main-site",
      deploy: {
        type: "@borderlessjs/env-node",
        host: "www.mysite.com",
      },
    },
  ],
  environments: [
    {
      name: "static-html-page",
      type: "@borderlessjs/env-html",
      package: "main-site",
      upstream: "my-app-in-browser",
      path: "pub/",
    },
    {
      name: "my-app-in-browser",
      type: "@borderlessjs/env-main-thread",
      local: ["blah", "glog"],
      upstream: "my-node-backend",
      package: "main-site",
      path: "pub/js/",
    },
    {
      name: "my-node-backend",
      type: "@borderlessjs/env-node",
      input: {
        url: (name) => `/backend/${name}`,
        serialization: "json",
        method: "post",
      },
      package: "main-site",
      path: "server/",
    },
  ],
};
