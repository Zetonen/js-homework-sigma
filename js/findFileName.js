export function findFileName(href) {
  if (!href) {
    return 0;
  }
  const fileName = href.split("\\").pop();
  return fileName.includes(".") ? fileName.split(".")[0] : fileName;
}
