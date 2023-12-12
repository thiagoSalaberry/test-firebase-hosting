import { atom, selector } from "recoil";

const queryState = atom({
    key: "queryState",
    default: "",
});

const resultsState = selector({
    key: "resultsState",
    get: async ({ get }) => {
        const searchQuery = get(queryState);
        if (searchQuery === "") {return []} else {
            console.log("Este es el query que llega y comienza el fetch", {searchQuery})
            console.log({searchQuery});
            const response = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${searchQuery} nano&limit=5`)
            const data = await response.json();
            return data.results;
        };
    }
});

export { queryState, resultsState };