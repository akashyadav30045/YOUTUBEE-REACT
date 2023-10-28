export const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};

export const formatDate = (dateString) => {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const formatNumberWithSuffix = (number) => {
  const THOUSANDS = 1000;
  const MILLIONS = 1000 * THOUSANDS;
  const BILLIONS = 1000 * MILLIONS;

  let formattedNumber;

  switch (true) {
    case number >= BILLIONS:
      formattedNumber = Math.round(number / BILLIONS) + "B";
      break;
    case number >= MILLIONS:
      formattedNumber = Math.round(number / MILLIONS) + "M";
      break;
    case number >= THOUSANDS:
      formattedNumber = Math.round(number / THOUSANDS) + "k";
      break;
    default:
      formattedNumber = number.toString();
  }

  return formattedNumber;
};

export const Statistic = ({ label, value }) => {
  return (
    <span className="text-gray-600">
      <b>{label}</b>: {formatNumberWithSuffix(value)}
    </span>
  );
};

export const formatDateDifference = (publishedAt) => {
  const currentDate = new Date();
  const publishedDate = new Date(publishedAt);

  const timeDifferenceInMilliseconds = currentDate - publishedDate;

  const seconds = Math.floor(timeDifferenceInMilliseconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(weeks / 4);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""}`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""}`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""}`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""}`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""}`;
  } else {
    return `${minutes} minute${minutes > 1 ? "s" : ""}`;
  }
};

export const formatDurationToTime = (duration) => {
  const match = duration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  if (!match) {
    return "";
  }

  const hours = parseInt(match[1]) || 0;
  const minutes = parseInt(match[2]) || 0;
  const seconds = parseInt(match[3]) || 0;

  const formattedSeconds = seconds.toString().padStart(2, '0');

  if (hours > 0) {
    const formattedHours = hours.toString();
    return `${formattedHours}:${minutes.toString().padStart(2, '0')}:${formattedSeconds}`;
  } else if (minutes > 0) {
    return `${minutes.toString().padStart(2, '0')}:${formattedSeconds}`;
  } else {
    return `00:${formattedSeconds}`;
  }
};

// Get Random 3 digit number

export function generateRandomThreeDigitNumber() {
  return Math.floor(Math.random() * 900) + 100; // Generates a random number between 100 and 999
}
