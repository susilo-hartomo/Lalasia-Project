export interface ArticleTypes {
    title: string
    author: string
    avatar: string
    category:
        | 'Tips and Trick'
        | 'Interior Design'
        | 'Design Inspiration'
        | 'Color Guide'
    thumbnail: string
    date: string
    summary: string
    content?: string
}
