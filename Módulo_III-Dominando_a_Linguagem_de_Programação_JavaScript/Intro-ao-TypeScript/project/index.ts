// Copyright 2022 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

console.log('Running on port 1234...')


// Interface

interface IAnimal {
  name: string;
  type: 'terrestrial' | 'aquatic';
  domestic: boolean;
  roar(noise: number): void;
}

// Create interface extension - like in classes...

interface IFeline extends IAnimal {
  nightVision: boolean;
}

const animal: IAnimal = {
  name: 'Rat',
  type: 'terrestrial',
  domestic: false,
  roar: (noise) => (`${noise}dB`),
}

const feline: IFeline = {
  name: 'cat',
  type: 'terrestrial',
  nightVision: true,
  domestic: false,
  roar: (noise) => (`${noise}dB`),
}

animal.roar(10)
feline.roar(20)

// Type

type TAnimal = {
  name: string;
  type: 'terrestrial' | 'aquatic';
  roar(noise: number): void;
}

// Interfaces extend types

interface TFeline extends TAnimal {
  nightVision: boolean;
}

const animalType: TAnimal = {
  name: 'Rat',
  type: 'terrestrial',
  roar: (noise) => (`${noise}dB`),
}

const felineType: TFeline = {
  name: 'cat',
  type: 'terrestrial',
  nightVision: true,
  roar: (noise) => (`${noise}dB`),
}

animalType.roar(10)
felineType.roar(20)

//

interface ICanine extends IAnimal {
  size: 'small' | 'medium' | 'large';
}

type TDomestic = IFeline | ICanine;

const newAnimal: TDomestic = {
  domestic: true,
  name: 'dog',
  size: 'large',
  type: 'terrestrial',
  // nightVision: false,
  roar: (noise) => (`${noise}dB`),
}

// HTML interaction

const input = document.getElementById('input') as HTMLInputElement;
input.addEventListener('input', (event) => {
  const i = event.currentTarget as HTMLInputElement;
})

// Generic types

function addItemToList<T>(anyArray: T[], value: T) {
  return anyArray.map(() => value)
}

addItemToList( ['U', 'C', 'K'], 'L')
addItemToList( [2, 3, 4], 1)

// const addItemToListConst<T> = (anyArray: T[], value: T) => {
//   return anyArray.map(() => value)
// }

// Conditions from parameters
interface IUser {
  id: string;
  email: string;
}
interface IAdmin extends IUser {
  cargo: 'gerente' | 'coordenador' | 'supervisor';
}
function redirectUser(user: IUser | IAdmin) {
  if ('cargo' in user) {
    // redirect to admin area
  }
  // redirect to standard user area
}
interface IConfitionalUser {
  id: string;
  email: string;
  cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'colaborator';
}

function redirectConditionalUser(user: IConfitionalUser) {
  if (user.cargo) {
    // redirect to admin area
    // sample: 
    //        goToLinkWithCredentials(user.cargo)
  }
  // redirect to standard user area
  // sample: 
  //        goToStandardLink(user)
}

// Classes, types and private

interface IStyleClass {
  styleName: string;
  classString: string;
  modeStatus?: boolean;
}

class CStyleClass implements IStyleClass {
  styleName;
  classString;
  constructor(styleName, classString){
    this.styleName = styleName;
    this.classString = classString;

  }
}

type TStyleClass = {
  // "- ?" removes optionals
  readonly [k in keyof IStyleClass]-?: IStyleClass[k];
}

class ReadOnlyCStyleClass implements TStyleClass {
  styleName;
  classString;
  modeStatus;
  constructor(styleName, classString){
    this.styleName = styleName;
    this.classString = classString;

  }
}

const screenMode = new CStyleClass('dark','color: white; background: linear-gradient(51deg, rgba(192,208,22,1) 0%, rgba(173,189,74,1) 24%, rgba(124,129,142,1) 93%);')
const readOnlyScreenMode = new ReadOnlyCStyleClass('dark','color: white; background: linear-gradient(51deg, rgba(192,208,22,1) 0%, rgba(173,189,74,1) 24%, rgba(124,129,142,1) 93%);')