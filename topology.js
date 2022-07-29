module.exports = {
  packages: [
    {
      name: "main-site",
      deploy: {
        type: "node",
        host: "www.mysite.com",
      },
    },
  ],
  environments: [
    {
      name: "static-html-page",
      type: "html",
      package: "main-site",
      upstream: "my-app-in-browser",
      path: "pub/",
    },
    {
      name: "my-app-in-browser",
      type: "main_thread",
      local: ["blah", "glog"],
      upstream: "my-node-backend",
      package: "main-site",
      path: "pub/js/",
    },
    {
      name: "my-node-backend",
      type: "node",
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
