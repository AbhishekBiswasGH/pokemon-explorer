export const DOMAIN: string = (() => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;

  if (!domain) {
    throw new Error(`No "NEXT_PUBLIC_DOMAIN" in .env file`);
  }

  return domain as string;
})();

export const API: string = (() => {
  const domain = process.env.NEXT_PUBLIC_API;

  if (!domain) {
    throw new Error(`No "NEXT_PUBLIC_API" in .env file`);
  }

  return domain as string;
})();
