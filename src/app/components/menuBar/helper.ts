// helper.ts
export const getLocalStorageItem = (key: string, defaultValue: string) => {
  return localStorage.getItem(key) || defaultValue;
};

export const gatherContent = (pagePath: string) => {
  switch (pagePath) {
    case "/":
      return [
        {
          title: getLocalStorageItem("page_3_title", "Home page"),
          bodyText: getLocalStorageItem("page_3_content", ""),
        },
      ];
    case "/page1":
      return [
        {
          title: getLocalStorageItem("page_0_title", "Page 1"),
          bodyText: getLocalStorageItem("page_0_content", ""),
        },
      ];
    case "/page2":
      return [
        {
          title: getLocalStorageItem("page_1_title", "Page 2"),
          bodyText: getLocalStorageItem("page_1_content", ""),
        },
      ];
    case "/page3":
      return [
        {
          title: getLocalStorageItem("page_2_title", "Page 3"),
          bodyText: getLocalStorageItem("page_2_content", ""),
        },
      ];
    default:
      return [];
  }
};