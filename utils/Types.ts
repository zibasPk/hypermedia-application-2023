import ImageInfo from "./Image";

export type ContentItem = {
  buttontext: string;
  buttonlink: string;
  maintext: string;
  maindesc: string;
  rendermaindesc?: boolean;
  image?: ImageInfo;
};
