import { faker } from "@faker-js/faker";

export type AnimalKey = keyof typeof faker.animal;

export type AnimalResult = {
  id: number;
  url: string;
  title: string;
  description: string;
  image: string;
};
