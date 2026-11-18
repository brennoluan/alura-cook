import { writable } from "svelte/store";

const { subscribe, set, update } = writable<string[]>([]);

export const myList = {
    subscribe,
    set,
    addIngredient(ingredient: string) {
        update(list => [...list, ingredient]);
    },
    removeIngredient(ingredient: string) {
        update(list => list.filter(item => item !== ingredient));
    }
};