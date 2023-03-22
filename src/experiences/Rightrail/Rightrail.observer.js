export function addObserverToTarget(root) {
  const options = {
    root,
    threshold: 1,
  };
  const observer = new IntersectionObserver(observerHandler, options);

  const targetElements = Array.from(root.children);
  console.log(targetElements);
  targetElements.forEach((e) => observer.observe(e));
}

function observerHandler(entries) {
  console.log(entries);
  entries.forEach((entry) => {
    if (entry.intersectionRatio < 0.99) {
      entry.target.style.visibility = "hidden";
      return;
    }
    entry.target.style.visibility = "visible";
  });
}
