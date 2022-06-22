import { get } from "./restCallBase.services";

const baseUrl = 'http://nolaborables.com.ar/api/v2/feriados';

export const unenabledDays = async () => {
    const now = new Date();
    const url = `${baseUrl}/${now.getFullYear()}?formato=mensual`;
    const days = await get(url);

    return days.data;
}