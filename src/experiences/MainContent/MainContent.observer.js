export function addObserverToTarget(root, items) {
  const bodyHeight = document.body.clientHeight;
  const browserHeight = document.documentElement.clientHeight;
  const options = {
    threshold: 1,
  };
  const observer = new IntersectionObserver(observerHandler, options);

  items.forEach((e) => observer.observe(e));
}

function observerHandler(entries) {
  console.log(entries);
  entries.forEach((entry) => {
    console.log("observerHandler:", entry.intersectionRatio);
    if (entry.intersectionRatio < 0.99) {
      //   entry.target.style.visibility = "hidden";
      return;
    }
    // entry.target.style.visibility = "visible";
  });
}
