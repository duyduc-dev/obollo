export const createAbsoluteLink = (paths: string[] = []) => {
  const root = '/';
  let result = '';
  if (paths?.length === 0) {
    return '/';
  }
  paths.map((path) => {
    if (!path.includes(root)) {
      result += `${root}${path}`;
    } else {
      result += path;
    }
  });
  return result;
};
