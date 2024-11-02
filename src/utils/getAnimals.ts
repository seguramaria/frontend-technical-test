import { faker } from "@faker-js/faker";

type AnimalKey = keyof typeof faker.animal;

const animalTypes = Object.keys(faker.animal);
console.log(animalTypes);

const getImage = (type: AnimalKey) =>
  faker.image.urlLoremFlickr({
    width: 200,
    height: 200,
    category: type,
  });
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentence();
const getTitle = (type: AnimalKey) => faker.animal[type]();

const generateData = (inputType: AnimalKey) => {
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

const fetchData = (inputType: AnimalKey) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = generateData(inputType);
      resolve(data);
    }, 2000);
  });
};

export default fetchData;
