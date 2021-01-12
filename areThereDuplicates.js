function areThereDuplicates() {
  let final = {};

  for (let val in arguments) {
    final[arguments[val]] = (final[arguments[val]] || 0) + 1;
  }
  for (let key in final) {
    if (final[key] > 1) return true;
  }
  return false;
}
