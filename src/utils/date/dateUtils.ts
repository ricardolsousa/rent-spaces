export const calculateDaysBetweenDates = (start: any, end: any) => {
  if (start && end) {
    const startDateObj = new Date(start);
    const endDateObj = new Date(end);

    const diffInTime = endDateObj.getTime() - startDateObj.getTime();
    const diffInDays = diffInTime / (1000 * 3600 * 24); // Converter milissegundos para dias

    return diffInDays > 0 ? diffInDays : 0; // Garante que não seja negativo
  } else {
    return null; // Reseta se as datas forem inválidas
  }
};
