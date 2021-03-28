export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=yiDrnX9eojZ8c22eeFST23Ek8Qd2HqgZ&q=${encodeURI(category)}&limit=30`
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}
