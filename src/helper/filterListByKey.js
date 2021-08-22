function filterListByKey(productList, key, value) {
  const filteredProduct = productList.filter((e) => {
    if (Array.isArray(e[key])) {
      return e[key].includes(value);
    }
    return e[key] === value;
  });

  return filteredProduct;
}

export default filterListByKey;
