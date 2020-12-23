// import { nanoid } from 'nanoid';  //it will be use when we add list of data to set each element a key (ID)

export const Change_Lang = 'Change_Lang';

export const updateLang = (lang) => {
    return {
      type: Change_Lang,
      lang,
    };
  };