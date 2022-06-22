import moment, { months } from "moment";
import { IMySQLRepository } from "../../Repositories/IMySQLRepository";
import { unenabledDays } from "../../Services/no-laborables.services";
import { IAsignaturasByCriteriaSearcher } from "./IAsignaturasByCriteriaSearcher";
import query from "./SearchAsignaturasQuery";

interface IPeriodo {
    fecha_inicio: string;
    fecha_fin: string;
}

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];

export class AsignaturasByCriteriaSearcher implements IAsignaturasByCriteriaSearcher {
    private _hoursOfWeek = {
        monday: 0,
        tuesday: 0,
        wednesday: 0,
        thursday: 0,
        friday: 0,
    };

    private readonly _mysqlRepository: IMySQLRepository;
    constructor(MySQLRepository: IMySQLRepository){
        this._mysqlRepository = MySQLRepository;
    }

    public async SearchAlumnosStatusFreeByAsignatura(asignaturaId: string){
        return await this._mysqlRepository.getOne(asignaturaId, query.QuantityFreeAlumnos);
    }

    public async SearchAlumnosStatusRegularByAsignatura(asignaturaId: string){
        return await this._mysqlRepository.getOne(asignaturaId, query.QuantityRegularAlumnos);
    }

    public async SearchAlumnosStatusPromotedByAsignatura(asignaturaId: string){
        return await this._mysqlRepository.getOne(asignaturaId, query.QuantityPromotedAlumnos);
    }

    public async SearchHoursAsignament(): Promise<any> {
        const now = new Date();
        const today = days[now.getDay()];
        const hoursAsignament = await this._mysqlRepository
            .getAll(query.QuantityAsignaturas);
        const hoursAsignamentByAsignaturas = await this._mysqlRepository
            .getAll(query.QuantityHoursAsignamentByAsignaturas);

        const daysNotAsignament: Array<any> = await unenabledDays();

        const startPeriodo = moment(hoursAsignament[0].fecha_inicio);
        const endPeriodo = moment(hoursAsignament[0].fecha_fin);
        const startMonth = moment().startOf('month');
        const endMonth = moment().endOf('month');
        const startWeek = moment().startOf('week');
        const endWeek = moment().endOf('week');

        const quantityWeeksByYear = endPeriodo.diff(startPeriodo, 'weeks');
        const quantityWeeksByMonth = endMonth.diff(startMonth, 'weeks');

        hoursAsignament.map((hour: { dia: string; minutos: number; }) => {
            this.AddHoursByDay(hour.dia, hour.minutos);
        });
        const hoursYearByAsignaturas = hoursAsignamentByAsignaturas
            .map((hour: {materia: string; minutos: number}) => ({
                materia: hour.materia,
                horas: (hour.minutos / 60) * quantityWeeksByYear,
            }));

        const hoursMonthByAsignaturas = hoursAsignamentByAsignaturas
            .map((hour: {materia: string; minutos: number}) => ({
                materia: hour.materia,
                horas: (hour.minutos / 60) * quantityWeeksByMonth,
            }));

        const hoursWeekByAsignaturas = hoursAsignamentByAsignaturas
            .map((hour: {materia: string; minutos: number}) => ({
                materia: hour.materia,
                horas: (hour.minutos / 60),
            }));
        
        let quantityHoursByYear = this.SumAllHoursByWeek() * quantityWeeksByYear;
        let quantityHoursByMonth = this.SumAllHoursByWeek() * quantityWeeksByMonth;
        let quantityHoursByWeek = this.SumAllHoursByWeek();
        let quantityHoursToday = this.GetOrSubstracHoursByDay(today, 1);

        const daysNotAsignamentByYear = daysNotAsignament
            .map((month) => Object.keys(month));

        const daysNotAsignamentByMonth = daysNotAsignamentByYear[now.getMonth()];
        
        const daysNotAsignamentByWeek = daysNotAsignamentByMonth
            .filter((day) => {
                const dayNotAsignament = moment(`${now.getFullYear()}-${now.getMonth()}-${day}`)
                    .format('yyyy-MM-D');
                return moment(dayNotAsignament).isBetween(startWeek, endWeek);
            });
        console.log('hola')

        daysNotAsignamentByMonth.map((day) => {
            const dateWeek = new Date(`${now.getFullYear()}-${now.getMonth()}-${day}`);
            const dayOfWeek = days[dateWeek.getDay()];
            const daysRemove = hoursAsignament.filter((hour) => hour.dia === dayOfWeek);
            daysRemove.map((dayRemove: { materia: string; minutos: number; }) => {
                const index = hoursMonthByAsignaturas
                    .findIndex((hour) => hour.materia === dayRemove.materia);
                hoursMonthByAsignaturas[index].horas -= dayRemove.minutos / 60;
            })
            quantityHoursByMonth += this.GetOrSubstracHoursByDay(dayOfWeek, -1);
        });
        
        daysNotAsignamentByWeek.map((day) => {
            const dateWeek = new Date(`${now.getFullYear()}-${now.getMonth()}-${day}`);
            const dayOfWeek = days[dateWeek.getDay()];
            const daysRemove = hoursAsignament.filter((hour) => hour.dia === dayOfWeek);
            daysRemove.map((dayRemove: { materia: string; minutos: number; }) => {
                const index = hoursWeekByAsignaturas
                    .findIndex((hour) => hour.materia === dayRemove.materia);
                hoursWeekByAsignaturas[index].horas -= dayRemove.minutos / 60;
            })
            this.RemoveHoursByDay(dayOfWeek);
        });

        let hoursByAsignaturas:{
            materia: string;
            year: { materia: string; horas: number; } | undefined;
            month: { materia: string; horas: number; } | undefined;
            week: { materia: string; horas: number; } | undefined;
        }[] = [];

        hoursAsignament.map((hour: { matria: string; }) => {
            hoursByAsignaturas.push({
                materia: hour.matria,
                year: hoursYearByAsignaturas.find(h => h.materia === hour.matria),
                month: hoursMonthByAsignaturas.find(h => h.materia === hour.matria),
                week: hoursWeekByAsignaturas.find(h => h.materia === hour.matria),
            });
        });

        return {
            quantityHoursByYear: quantityHoursByYear.toFixed(2),
            quantityHoursByMonth: quantityHoursByMonth.toFixed(2),
            quantityHoursByWeek: quantityHoursByWeek.toFixed(2),
            quantityHoursToday: quantityHoursToday.toFixed(2),
            hours: hoursByAsignaturas,
        }
    }

    private AddHoursByDay(dia: string, minutos: number): void {
        switch (dia) {
            case 'Lunes':
                this._hoursOfWeek.monday += minutos / 60;
                break;
            case 'Martes':
                this._hoursOfWeek.tuesday += minutos / 60;
                break;
            case 'Miercoles':
                this._hoursOfWeek.wednesday += minutos / 60;
                break;
            case 'Juesves':
                this._hoursOfWeek.thursday += minutos / 60;
                break;
            case 'Viernes':
                this._hoursOfWeek.friday += minutos / 60;
                break;
            default:
                break;
        }
    }

    private GetOrSubstracHoursByDay(dayOfWeek: string, positiveOrNegative: number): number {
        let result = 0;
        switch (dayOfWeek) {
            case 'Lunes':
                result += this._hoursOfWeek.monday * positiveOrNegative;
                break;
            case 'Martes':
                result += this._hoursOfWeek.tuesday * positiveOrNegative;
                break;
            case 'Miercoles':
                result += this._hoursOfWeek.wednesday * positiveOrNegative;
                break;
            case 'Juesves':
                result += this._hoursOfWeek.thursday * positiveOrNegative;
                break;
            case 'Viernes':
                result += this._hoursOfWeek.friday * positiveOrNegative;
                break;
            default:
                break;
        }

        return result;
    }

    private RemoveHoursByDay(dayOfWeek: string): void {
        switch (dayOfWeek) {
            case 'Lunes':
                this._hoursOfWeek.monday = 0;
                break;
            case 'Martes':
                this._hoursOfWeek.tuesday = 0;
                break;
            case 'Miercoles':
                this._hoursOfWeek.wednesday = 0;
                break;
            case 'Juesves':
                this._hoursOfWeek.thursday = 0;
                break;
            case 'Viernes':
                this._hoursOfWeek.friday = 0;
                break;
            default:
                break;
        }
    }

    private SumAllHoursByWeek(): number{
        return (
            this._hoursOfWeek.monday +
            this._hoursOfWeek.tuesday +
            this._hoursOfWeek.wednesday +
            this._hoursOfWeek.thursday +
            this._hoursOfWeek.friday
        );
    }
}