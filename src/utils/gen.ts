import { GenUtilsInterface } from "@/types/utils/gen";

class GenUtils implements GenUtilsInterface {
  getCurrentYear(): number {
    return new Date().getFullYear();
  }
  capitalizeString(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  greetUserBasedOnTime(): string {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return "Good morning";
    } else if (currentHour < 18) {
      return "Good afternoon";
    } else {
      return "Good evening";
    }
  }
}

const genUtils = new GenUtils();
export default genUtils;
