
export default function (opts = {}) {
  const createOpts = {
    initialReducer: {
      routing
    },
    setupMiddlewares(middlewares) {
      return [
        ...middlewares
      ]
    },
    setupApp(app) {
      app._history = patchHistory(history);
    }
  }
  const app = core.create(opts, create);
  app.router = router;
  app.start = start;
  
  function router(router) {
    invariant(
      isFunction(router),
      `[app.router] router should be function, but got ${typeof router}`,
    );
    app._router = router;
  }
}