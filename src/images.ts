let images = import.meta.glob(`./assets/images/*`, {
  eager: true,
  as: "url",
});

images = Object.fromEntries(
  Object.entries(images).map(([key, value]) => [
    key.replace(/^.*\//, ""),
    value,
  ])
);

export default images;
