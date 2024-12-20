import { StaticImageData } from "next/image";

export interface ICard {
  jobTitle: string;
  workDuration: string;
  description: string;
  link: string;
  skills: string[];
};

export interface ISkill {
  skill: string;
};

export interface IImageCard {
  projectType: string;
  projectTitle: string; 
  projectDescription: string;
  projectLink: string;
  imgWidth: number;
  imgHeight: number;
  imgAlt: string;
  imgSrc: StaticImageData;
};

export interface IFormData {
  fullName: string;
  email: string;
  subject: string;
  message: string;
};

export interface ITestemonial {
  name: string;
  role: string;
  image: string;
  description: string;
};

export interface IProject {
  title: string; 
  skill1: string;
  skill2: string;
  skill3: string;
  description: string;
  img: StaticImageData;
  screenId: string;
  link: string;
};
 export interface IHoverButton { 
  screenId: string; 
  text: string 
}

export interface IProjectShowCase {
  title: string;
  description: string;
  link: string;
  img: StaticImageData;
}