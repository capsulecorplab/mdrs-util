import { json } from 'stream/consumers';
import * as Enums from './enums'
import semver from 'semver';

export const Defaultdate = '14-04-2024'

export class GreenHabReportConfiguration {
    private _crewNumber: string;
    private _date: string;
    private _author: string;
    
    constructor(
        crewNumber: string,
        date: string,
        author: string,
    ) {
        this._crewNumber = this.validatecrewNumber(crewNumber);
        this._date = this.validateDate(date);
        this._author = this.validateAuthor(author);
    }

    public static fromJsonString(
        jsonString: string
    ) {
        const jsonObject = JSON.parse(jsonString)
        try {
            return new GreenHabReportConfiguration(
                jsonObject.crewNumber,
                jsonObject.date,
                jsonObject.author
            )
        } catch (error) {
            return new GreenHabReportConfiguration(
                "",
                "",
                ""
            )
        }
    }

    public isValid(): boolean {
        return this._crewNumber !== "" && this._date !== "" && this._author !== "";
    }

    public getJsonString(): string {
        let jsonObject: any = {}
        jsonObject["crewNumber"] = this._crewNumber
        jsonObject["date"] = this._date
        jsonObject["author"] = this._author
        return JSON.stringify(jsonObject, null, 2)
    }

    public get crewNumber() {
        return this._crewNumber;
    }

    public get date() {
        return this._date;
    }

    public get author() {
        return this._author;
    }

    private validatecrewNumber(crewNumber: string): string {
        let validatedcrewNumber = "";
        let crewNumberRegEx = new RegExp('^[1-9]\\d*$') // as per https://stackoverflow.com/questions/30115768/what-is-the-regex-for-any-positive-integer-excluding-0
        if(crewNumberRegEx.test(crewNumber)) {
            validatedcrewNumber = crewNumber;
        }
        return validatedcrewNumber
    }

    private validateDate(date: string): string {
        let validatedDate = "";
        var dateerrors = false;
        var yearReg = '(201[4-9]|202[0-9])';            ///< Allows a number between 2014 and 2029
        var monthReg = '(0[1-9]|1[0-2])';               ///< Allows a number between 00 and 12
        var dayReg = '(0[1-9]|1[0-9]|2[0-9]|3[0-1])';   ///< Allows a number between 00 and 31
        var hourReg = '([0-1][0-9]|2[0-3])';            ///< Allows a number between 00 and 24
        var minReg = '([0-5][0-9])';                    ///< Allows a number between 00 and 59
        var ddmmyyRegEx = new RegExp('^' + dayReg + '-' + monthReg + '-' + yearReg + '$', 'g');
        if(ddmmyyRegEx.test(date)) {
            validatedDate = date;
        }
        return validatedDate
    }

    private validateAuthor(author: string): string {
        let validatedAuthor = ""
        if (author !== "") {
            validatedAuthor = author
        }
        return validatedAuthor;
    }
}
