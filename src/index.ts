#!/usr/bin/env node

import { Command } from "commander";
import * as inquirer from "inquirer";
import chalk from "chalk";

const program = new Command();
program.command("test").action(() => {
  console.log("test");
  inquirer
    .prompt([
      {
        type: "list",
        name: "hello",
        message: "CLI 테스트",
        choices: ["테", "스", "트"],
      },
    ])
    .then((answer) => {
      console.log(chalk.green(answer.hello));
    });
});

program.parse(process.argv);
