import { BlogData } from '@/constants/blogdata'

export const getAllNews = async () => {
    // const res = await axios.get(""); This should be like this

    const res = BlogData

    return res
    // return res;
}

export const getTwoLatestNews = async () => {
    // const res = await axios.get(""); This should be like this

    const res = BlogData.sort(
        (itemsA, itemsB) =>
            new Date(itemsA.date).getTime() - new Date(itemsB.date).getTime()
    ).slice(1, 3)

    // console.log(res);

    return res
    // return res;
}
