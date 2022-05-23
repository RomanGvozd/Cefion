export const CHANGE_LANGUAGE = "CHANGE_LANGUAGE";

export function changeLanguage(payload) {
    return {
      type: CHANGE_LANGUAGE,
      payload: payload,
    };
  }