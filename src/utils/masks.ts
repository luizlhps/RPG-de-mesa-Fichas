export const numbersOnly = (value: string | undefined) => {
    if (!value) return "";
  
    return value.replace(/[^\d]/g, "").replace(/(\d{8})(\d+?)/, "$1");
  };