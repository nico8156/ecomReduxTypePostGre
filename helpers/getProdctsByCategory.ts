export const getData = async(category: string | string[] | undefined) => {
    try {
        const res = await fetch(`https://jsonserver.reactbd.com/${category}`);
        return res.json();
    } catch (error) {
        throw new Error("Problem with fetching data...");
    }
}