/*
 * Copyright 2022 XXIV
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless responseuired by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const BASE_URL = "https://dog.ceo/api/";

export class DogAPIException extends Error {
  constructor(message: string) {
    super(message);
  }
}

/**
 * DISPLAY SINGLE RANDOM IMAGE FROM ALL DOGS COLLECTION
 *
 * @returns random dog image
 * @throws DogAPIException on failure
 */
export async function randomImage(): Promise<string> {
  try {
    let response = await fetch(`${BASE_URL}breeds/image/random`);
    let data = await response.json();
    if (data.status != "success") {
      throw data.message;
    }
    return data.message;
  } catch (err) {
    throw new DogAPIException(err);
  }
}

/**
 * DISPLAY MULTIPLE RANDOM IMAGES FROM ALL DOGS COLLECTION
 *
 * @param imagesNumber number of images
 * @returns multiple random dog image `NOTE` ~ Max number returned is 50
 * @throws DogAPIException on failure
 */
export async function multipleRandomImages(imagesNumber: number): Promise<Array<string>> {
  try {
    let response = await fetch(`${BASE_URL}breeds/image/random/${imagesNumber}`);
    let data = await response.json();
    if (data.status != "success") {
      throw data.message;
    }
    return data.message;
  } catch (err) {
    throw new DogAPIException(err);
  }
}

/**
 * RANDOM IMAGE FROM A BREED COLLECTION
 *
 * @param breed breed name
 * @returns random dog image from a breed, e.g. hound
 * @throws DogAPIException on failure
 */
export async function randomImageByBreed(breed: string): Promise<string> {
  try {
    let response = await fetch(`${BASE_URL}breed/${breed.trim()}/images/random`);
    let data = await response.json();
    if (data.status != "success") {
      throw data.message;
    }
    return data.message;
  } catch (err) {
    throw new DogAPIException(err);
  }
}

/**
 * MULTIPLE IMAGES FROM A BREED COLLECTION
 *
 * @param breed breed name
 * @param imagesNumber number of images
 * @returns multiple random dog image from a breed, e.g. hound
 * @throws DogAPIException on failure
 */
export async function multipleRandomImagesByBreed(breed: string, imagesNumber: number): Promise<Array<string>> {
  try {
    let response = await fetch(
      `${BASE_URL}breed/${breed.trim()}/images/random/${imagesNumber}`
    );
    let data = await response.json();
    if (data.status != "success") {
      throw data.message;
    }
    return data.message;
  } catch (err) {
    throw new DogAPIException(err);
  }
}

/**
 * ALL IMAGES FROM A BREED COLLECTION
 *
 * @param breed breed name
 * @returns an array of all the images from a breed, e.g. hound
 * @throws DogAPIException on failure
 */
export async function imagesByBreed(breed: string): Promise<Array<string>> {
  try {
    let response = await fetch(`${BASE_URL}breed/${breed.trim()}/images`);
    let data = await response.json();
    if (data.status != "success") {
      throw data.message;
    }
    return data.message;
  } catch (err) {
    throw new DogAPIException(err);
  }
}

/**
 * SINGLE RANDOM IMAGE FROM A SUB BREED COLLECTION
 *
 * @param breed breed name
 * @param subBreed sub_breed name
 * @returns random dog image from a sub-breed, e.g. Afghan Hound
 * @throws DogAPIException on failure
 */
export async function randomImageBySubBreed(breed: string, subBreed: string): Promise<string> {
  try {
    let response = await fetch(
      `${BASE_URL}breed/${breed.trim()}/${subBreed.trim()}/images/random`
    );
    let data = await response.json();
    if (data.status != "success") {
      throw data.message;
    }
    return data.message;
  } catch (err) {
    throw new DogAPIException(err);
  }
}

/**
 * MULTIPLE IMAGES FROM A SUB-BREED COLLECTION
 *
 * @param breed breed name
 * @param subBreed sub_breed name
 * @param imagesNumber number of images
 * @returns multiple random dog images from a sub-breed, e.g. Afghan Hound
 * @throws DogAPIException on failure
 */
export async function multipleRandomImagesBySubBreed(breed: string, subBreed: string, imagesNumber: number): Promise<Array<string>> {
  try {
    let response = await fetch(
      `${BASE_URL}breed/${breed.trim()}/${subBreed.trim()}/images/random/${imagesNumber}`
    );
    let data = await response.json();
    if (data.status != "success") {
      throw data.message;
    }
    return data.message;
  } catch (err) {
    throw new DogAPIException(err);
  }
}

/**
 * LIST ALL SUB-BREED IMAGES
 *
 * @param breed breed name
 * @param subBreed sub_breed name
 * @returns an array of all the images from the sub-breed
 * @throws DogAPIException on failure
 */
export async function imagesBySubBreed(breed: string, subBreed: string): Promise<Array<string>> {
  try {
    let response = await fetch(
      `${BASE_URL}breed/${breed.trim()}/${subBreed.trim()}/images`
    );
    let data = await response.json();
    if (data.status != "success") {
      throw data.message;
    }
    return data.message;
  } catch (err) {
    throw new DogAPIException(err);
  }
}

/**
 * LIST ALL BREEDS
 *
 * @returns object of all the breeds as keys and sub-breeds as values if it has
 * @throws DogAPIException on failure
 */
export async function breedsList(): Promise<any> {
  try {
    let response = await fetch(`${BASE_URL}breeds/list/all`);
    let data = await response.json();
    if (data.status != "success") {
      throw data.message;
    }
    return data.message;
  } catch (err) {
    throw new DogAPIException(err);
  }
}

/**
 * LIST ALL SUB-BREEDS
 *
 * @param breed breed name
 * @returns an array of all the sub-breeds from a breed if it has sub-breeds
 * @throws DogAPIException on failure
 */
export async function subBreedsList(breed: string): Promise<Array<string>> {
  try {
    let response = await fetch(`${BASE_URL}breed/${breed.trim()}/list`);
    let data = await response.json();
    if (data.status != "success") {
      throw data.message;
    }
    if (data.message.length === 0)
      throw "the breed does not have sub-breeds";
    return data.message;
  } catch (err) {
    throw new DogAPIException(err);
  }
}