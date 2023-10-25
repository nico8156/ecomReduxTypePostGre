export const getData = async(category: string | string[] | undefined) => {
    try {
        const res = await fetch(`https://jsonserver.reactbd.com/${category}`);
        const data = await res.json();
        return data;
    } catch (error) {
        throw new Error("Problem with fetching data...");
    }
}