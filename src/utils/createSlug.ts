import slugify from 'slugify';

const createSlug = (string: string): string =>
  slugify(string, { lower: true, strict: true });

export default createSlug;
