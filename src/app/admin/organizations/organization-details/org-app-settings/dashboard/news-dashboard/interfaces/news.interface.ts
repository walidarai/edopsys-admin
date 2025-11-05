export interface NewsItem {
    title: string;
    date: string;
    views: number;
    imageUrl: string;
    description: string;
    pdfs: Attachment[];
    comments: Comment[];
    likes: number;
    author: string;
    authorImage: string;
    authorComment: string;
    authorCommentDate: string;
}

export interface Attachment {
    title: string;
    link: string;
    pages: number;
}

export interface Comment {
    author: string;
    authorImage: string;
    text: string;
    commentDate: string;
}
