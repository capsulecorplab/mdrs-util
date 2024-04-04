import {Args, Command, Flags} from '@oclif/core'
import {Metadata, MetadataFlag} from '@oclif/core/lib/interfaces/parser'
import {GreenHabReportConfiguration} from 'mdrs-util-lib-common'
import input from '@inquirer/input'
import select from '@inquirer/select'
import confirm from '@inquirer/confirm'
import * as fsLib from 'mdrs-util-lib-fs'

export default class reportCreate extends Command {
  static description = 'Create a new GreenHab report'

  static examples = [
    {
      description: 'Display command help',
      command: '<%= config.bin %> <%= command.id %> --help'
    },
    {
      description: 'Create a new GreenHab Report and be prompted for inputs',
      command: '<%= config.bin %> <%= command.id %>'
    },
    {
      description: 'Create a new GreenHab Report entirely from command line',
      command: '<%= config.bin %> <%= command.id %> -n 297 -d "14-04-2024" -a "Mark Watney"'
    }
  ]

  static flags = {
    // flag with a value (-n, --name=VALUE)
    crewNumber: Flags.string(
      {
        char: 'n',
        description: 'Crew number'
      }
    ),
    dateString: Flags.string(
      {
        char: 'd',
        description: 'Date (DD-MM-YYYY)'
      }
    ),
    author: Flags.string(
      {
        char: 'a',
        description: 'Author of new GreenHab Report'
      }
    )
  }

  public async run(): Promise<void> {
    const {args, flags, metadata} = await this.parse(reportCreate)
    let crewNumber = flags.crewNumber
    if (!crewNumber) {
      let response = await input({
        message: 'Provide the crew number: ',
        default: ''
      })
      crewNumber = response
    }
    let dateString = flags.dateString
    if (!dateString) {
      let response = await input({
        message: 'Provide a DD-MM-YYYY formatted date: ',
        default: ''
      })
      dateString = response
    }
    let author = flags.author
    if (!author) {
      let response = await input({
        message: 'Provide a report author: ',
        default: ''
      })
      author = response
    }

    const reportConfiguration = new GreenHabReportConfiguration(
      crewNumber,
      dateString,
      author
    )
    const isValidProject = reportConfiguration.isValid()
    console.log(isValidProject ? 'Valid Report' : 'INVALID REPORT')
    console.log('-----------------------------')
    if (reportConfiguration.crewNumber !== "") {
      console.log(`Crew number: ${reportConfiguration.crewNumber}`)
    }
    else {
      console.log(`Crew number: ${flags.crewNumber} [INVALID FORMAT]`)
    }
    if (reportConfiguration.date !== "") {
      console.log(`date: ${reportConfiguration.date}`)
    }
    else {
      console.log(`date: ${flags.dateString} [INVALID FORMAT]`)
    }
    if (reportConfiguration.author !== "") {
      console.log(`author: ${reportConfiguration.author}`)
    }
    else {
      console.log(`date: ${flags.author} [MISSING AUTHOR]`)
    }
    if (!isValidProject) {
      this.exit(1)
    }
    const createGreenHabReport = await confirm({ message: 'Create project?' })
    if (createGreenHabReport) {
      fsLib.createGreenHabReport(reportConfiguration)
    }
  }
}
