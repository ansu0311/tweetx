function getDaysPassedInCurrentMonth() {
  const currentDate = new Date();
  const daysPassed = currentDate.getUTCDate();
  return daysPassed;
}

const calculateTimeDifference = (inputDateTime) => {
  // Convert inputDateTime string to a Date object
  const inputDate = new Date(inputDateTime);
  const currentDate = new Date();

  // Calculate the time difference in milliseconds
  const timeDifference = currentDate - inputDate;

  // Calculate the difference in minutes
  const minutesDifference = Math.floor(timeDifference / (1000 * 60));

  // Check the time difference
  if (minutesDifference < 60) {
    return `${minutesDifference} minute${
      minutesDifference !== 1 ? "s" : ""
    } ago`;
  }
  // Calculate the difference in hours
  else if (minutesDifference < 1440) {
    const hoursDifference = Math.floor(minutesDifference / 60);
    return `${hoursDifference} hour${hoursDifference !== 1 ? "s" : ""} ago`;
  }
  // Calculate if yesturday
  else if (
    inputDate.toDateString() === new Date(currentDate - 86400000).toDateString()
  ) {
    return "Yesterday";
  }
  // Calculate the difference in days
  else {
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    if ((daysDifference <= getDaysPassedInCurrentMonth()) || (daysDifference <30)) {
      return `${daysDifference} day${daysDifference !== 1 ? "s" : ""} ago`;
    }
    // Calculate the difference in months
    else{
      const monthsDifference = currentDate.getMonth() - inputDate.getMonth();
      if((0<monthsDifference < 12) && (currentDate.getFullYear() - inputDate.getFullYear() <=1)){
        return `${Math.abs(monthsDifference)} month${monthsDifference !== 1 ? "s" : ""} ago`;
      }
      // Calculate the difference in years
    else{
        const yearsDifference =
          currentDate.getFullYear() - inputDate.getFullYear();
        return `${yearsDifference} year${yearsDifference !== 1 ? "s" : ""} ago`;
      }
    }
  }
};

export default calculateTimeDifference;
