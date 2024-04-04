import { GreenHabReportConfiguration } from "mdrs-util-lib-common";
import * as sh from 'shelljs'

sh.config.silent = true;
const reportType = "greenHab-report"
const defaultFileFormat = "json"

export function createGreenHabReport(report: GreenHabReportConfiguration) {
    console.log(`Creating ${report.crewNumber}...`)
    //create report directory using report crewNumber (should follow oclif pattern; if no directory exists, create directory; if directory exists and empty, continue report creation; if directory exists and is not empty, exit with error stating non-empty directory)
    const reportFileName = `crew-${report.crewNumber}-${reportType}-${report.date}.${defaultFileFormat}`
    const reportPath = sh.ls("-d", reportFileName);
    if (reportPath.length) {
        console.log(`Cannot create report, ${reportPath} exists`)
        sh.exit(1)
    }
    else {
        //in current working directory, generate report.json file
        let reportFile = new sh.ShellString(report.getJsonString())
        reportFile.to(reportFileName)
    }
}

