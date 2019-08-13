import { PortfolioSettings } from './portfoliosettings';

export interface Portfolio {
  sections: PortfolioSection[]
  settings: PortfolioSettings
}

export interface PortfolioSection {
  type: string;
  comments: CommentSection[];
  title?: string;
  text?: string;
}

export interface CommentSection {
  text: string;
}