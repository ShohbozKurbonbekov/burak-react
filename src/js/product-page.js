export const showProductsButtons = () => {
  const productsBtns = document.querySelectorAll(".products-button");

  productsBtns.forEach((el, index, arr) => {
    el.style.marginTop = `calc(${getComputedStyle(el).width} - ${
      index !== 0 ? "21px" : "0px"
    })`;
    el.style.transformOrigin = "top left";
    el.style.transform = "rotate(-90deg)";
  });
};
