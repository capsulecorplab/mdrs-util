import { expect } from "@oclif/test";
import { GreenHabReportConfiguration } from "../src/greenhab-report";
import * as fs from 'fs';
import path from 'path';

describe("Project Validation Tests for GreenHabReportConfiguration (argument-based constructor)", () => {
    it('should return true for the example report', () => {
        const report = new GreenHabReportConfiguration("297", "14-04-2024", "Mark Watney")
        expect(report.isValid()).to.equal(true)
        report.author
    })

    it('should return false for invalid crewNumber', () => {
        const report = new GreenHabReportConfiguration("two ninety seven", "14-04-2024", "Mark Watney")
        expect(report.isValid()).to.equal(false)
    })

    it('should return false an invalid date', () => {
        const report = new GreenHabReportConfiguration("297", "-298714.93", "Mark Watney")
        expect(report.isValid()).to.equal(false)
    })

    it('should return false for an empty crew number', () => {
        const report = new GreenHabReportConfiguration("", "-298714.93", "Mark Watney")
        expect(report.isValid()).to.equal(false)
    })

    it('should return false for an empty date', () => {
        const report = new GreenHabReportConfiguration("297", "", "Mark Watney")
        expect(report.isValid()).to.equal(false)
    })

    it('should return false for an empty author', () => {
        const report = new GreenHabReportConfiguration("297", "14-04-2024", "")
        expect(report.isValid()).to.equal(false)
    })
})

describe("To JSON-string Tests", () => {
    it('should return example report package.json string for a given example report', () => {
        const exampleReportJson = fs.readFileSync(path.join(__dirname, 'example-report.json') , 'utf8');
        const report = new GreenHabReportConfiguration("297", "14-04-2024", "Mark Watney")
        expect(report.getJsonString()).to.equal(exampleReportJson)
    })
})

describe("Project Validation Tests for GreenHabReportConfiguration.fromJsonString()", () => {
    it('should return true for the example report from package.json string', () => {
        const report = new GreenHabReportConfiguration("297", "14-04-2024", "Mark Watney")
        const report2 = GreenHabReportConfiguration.fromJsonString(report.getJsonString())
        expect(report2.isValid()).to.equal(true)
    })

    it('should return false for invalid crewNumber from package.json string', () => {
        const report = new GreenHabReportConfiguration("two ninety seven", "14-04-2024", "Mark Watney")
        const report2 = GreenHabReportConfiguration.fromJsonString(report.getJsonString())
        expect(report2.isValid()).to.equal(false)
        expect(report2.crewNumber).to.equal("")
    })

    it('should return false an invalid date from package.json string', () => {
        const report = new GreenHabReportConfiguration("297", "-298714.93", "Mark Watney")
        const report2 = GreenHabReportConfiguration.fromJsonString(report.getJsonString())
        expect(report2.isValid()).to.equal(false)
        expect(report2.date).to.equal("")
    })

    it('should return false for an empty crew number from package.json string', () => {
        const report = new GreenHabReportConfiguration("", "-298714.93", "Mark Watney")
        const report2 = GreenHabReportConfiguration.fromJsonString(report.getJsonString())
        expect(report.isValid()).to.equal(false)
    })

    it('should return false for an empty date from package.json string', () => {
        const report = new GreenHabReportConfiguration("297", "", "Mark Watney")
        const report2 = GreenHabReportConfiguration.fromJsonString(report.getJsonString())
        expect(report.isValid()).to.equal(false)
    })

    it('should return false for an empty author from package.json string', () => {
        const report = new GreenHabReportConfiguration("297", "14-04-2024", "")
        const report2 = GreenHabReportConfiguration.fromJsonString(report.getJsonString())
        expect(report2.isValid()).to.equal(false)
    })

    it('should return false for malformed package.json string', () => {
        const report2 = GreenHabReportConfiguration.fromJsonString("{}")
        expect(report2.isValid()).to.equal(false)
    })
})