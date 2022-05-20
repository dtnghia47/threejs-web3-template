export const gettheme = () => {
  return new Promise ((resolve, reject) => {
    setTimeout(() => {
      // brandingColors
      resolve({
        primary: '#24a9a7',
        secondary: '#24a9a7',
      });
    }, 300);
  });
};