import { atom, selector } from "recoil";

const itemState = atom({
    key: "itemState",
    default: {
        id: "",
        title: "",
        price: 0,
        thumbnail: "",
        img: []
    }
});

const itemResult = selector({
    key: 'itemResult',
    get: async ({get}) => {
        const itemToSeek = get(itemState);
        const response = await fetch(`https://api.mercadolibre.com/items/${itemToSeek.id}`);
        const data = await response.json();
        return {
            id: data.id,
            title: data.title,
            price: data.price,
            img: data.pictures
        }
    }
});
export { itemState, itemResult };