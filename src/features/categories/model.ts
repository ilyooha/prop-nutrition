export interface Category {
    id: string;
    title: string;
    path: CategoryAncestor[];
}

export interface CategoryAncestor {
    id: string;
    title: string;
}
