export function getCookie(name: string): string | undefined {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    return parts.pop()?.split(';').shift();
  }
  return undefined;
}
export function removeLastAlphabet(input: string): string {
    if (input.length === 0) {
        return input;
    }
    const regex = /[a-zA-Z]$/;
    if (regex.test(input)) {
        return input.substring(0, input.length - 1);
    }
    return input;
}

export function setCookie(
  name: string,
  value: string,
  expires?: number,
  path?: string,
  httpOnly: boolean = false
): void {
  let cookie = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

  if (expires) {
    const expirationDate = new Date(Date.now() + expires * 1000);
    cookie += `; expires=${expirationDate.toUTCString()}`;
  }

  if (path) {
    cookie += `; path=${path}`;
  }

  if (httpOnly) {
    cookie += "; HttpOnly";
  }

  document.cookie = cookie;
}

export const getToken = () => {
  return localStorage.getItem("genaiased")
}