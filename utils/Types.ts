import ImageInfo from "./Image";

export type ContentItem = {
  buttontext: string;
  buttonlink: string;
  maintext: string;
  maindesc: string;
  rendermaindesc?: boolean;
  image?: ImageInfo;
};

export class Consts {
  static base_image_url =
    "https://dqtgyrjqxnduyldbwyfx.supabase.co/storage/v1/object/public/images/";
}
