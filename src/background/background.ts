chrome.webRequest.onBeforeRequest.addListener(
  (details) => {
    console.log(details);
    return { cancel: true };
  },
  {
    urls: [
      "*://*.googleadservices.com/**",
      "*://*.tpc.googlesyndication.com/**",
      "*://securepubads.g.doubleclick.net/**",
    ],
  },
  ["blocking"]
);
