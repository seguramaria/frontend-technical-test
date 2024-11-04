import { AnimalKey, AnimalResult } from "@/types";
import { faker } from "@faker-js/faker";

const getImage = (type: AnimalKey) =>
  faker.image.urlLoremFlickr({
    width: 400,
    height: 200,
    category: type,
  });
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentence();
const getTitle = (type: AnimalKey) => faker.animal[type]();

const generateData = (inputType: AnimalKey): AnimalResult[] => {
  return [...new Array(100)].map((_, index) => {
    return {
      inputType,
      id: index + 1,
      url: getUrl(),
      title: getTitle(inputType),
      description: getText(),
      image: getImage(inputType),
    };
  });
};

const fetchData = async (inputType: AnimalKey): Promise<AnimalResult[]> => {
  const data = generateData(inputType);
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return data;
};

export default fetchData;
