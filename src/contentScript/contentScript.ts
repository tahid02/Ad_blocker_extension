// TODO: content script

// Blocking ad using contentscript only
// Method 01: by specifying website
const rules: {
  [url: string]: () => void;
} = {
  "https://www.nytimes.com/section/technology": filterNYTTechnology2,
};

function filterNYTTechnology() {
  const app = document.getElementById("site-content");
  const wrapper = document.getElementById("top-wrapper");
  app.removeChild(wrapper);
}

// Method 02:
function filterNYTTechnology2() {
  const divs = document.getElementsByTagName("div");
  for (const div of divs) {
    if (div.className.indexOf("ad") != -1) {
      div.style.display = "none";
    }
  }
}
/////////////////////////// For both function /////////////////////////
if (document.URL in rules) {
  rules[document.URL]();
}
