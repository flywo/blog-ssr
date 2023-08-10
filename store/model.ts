import { defineStore } from "pinia"

export const useModel = defineStore("modelStore", () => {
    const model = ref("dark")
    function change() {
        model.value = model.value === "light" ? "dark" : "light";
    }
    return { change, model }
})