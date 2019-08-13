import { Url } from 'url';

export interface Link {
  label: string;
  url: Url;
  title: string;
  blank: boolean;
  internal: boolean;
}