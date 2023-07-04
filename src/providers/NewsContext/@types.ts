import { IFormEdit } from "../../components/FormEdit/formEditSchema";

export interface INewsContext {
    newslist: INews[];
    setCurrentNews: React.Dispatch<React.SetStateAction<INews | null>>;
    handleEditNew: (formData: IFormEdit, id: number) => Promise<void>
}
  
export interface Ilike {
    quantidade: number;
}
  
export interface INews {
    image: string;
    title: string;
    description: string;
    owner: string;
    userId: number;
    id: number;
    likes: Ilike[];
}

export interface IEdit {
    title: string;
    description: string;
    owner: string;
    userId: number;
    image: string
}
