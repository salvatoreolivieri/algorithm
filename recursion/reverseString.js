const reverseStringRecursive = (string) => {
  if (string === "") {
    return ""
  }

  return reverseStringRecursive(string.substr(1)) + string.charAt(0)
}

reverseStringRecursive("hello")
