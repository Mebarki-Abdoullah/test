export interface ICategory {
  id: number;
  slug: string;
  name: string;
}

export interface Props {
  id: number;
  categoryId: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: ICategory;
}
