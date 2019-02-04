const exec = require('child_process').exec;

class BuildGenerate {

    constructor() {
        this._model = 'model';
        this._name = 'project';
        this._chalk = '';
        this._readLineAux = '';
    }

    questionProjectName() {
        process.stdin.isTTY = process.stdout.isTTY = true;
        this._name = this._readLineAux.question(this._chalk.green('What is your app name? '));
        console.log(this._chalk.blue(`Creating app ${this._name}...`));
    }

    printDescription() {
        console.log(this._chalk.yellow("\nPWA REACT GENERATE\n"));
    }

    execbash(command){
            return new Promise(resolve => {
            exec(command, (error, stdout, stderr) => {
                console.log(stderr);
                console.log(stdout);
                resolve(stdout)
            })
        })
    }

    async installRedlineSync() {
        await this.execbash('npm i readline-sync chalk');
    }

    async installReactScript() {
        await this.execbash('npm i --global react-scripts');
    }

    importLibs() {
        this._chalk = require('chalk');
        this._readLineAux = require('readline-sync');
    }

    async createApp() {
        await this.execbash(`npx create-react-app ${this._name}`);
        await this.execbash(`cd ${this._name} && echo "y" | react-scripts eject `);
        console.log(this._chalk.green(`Copying ${this._model}...  (this one is blazing fast, i swear) `));
        await this.execbash(`cd ${this._name} && rm -rf ./src`)
        await this.execbash(`cp -r ./${this._model}/* ./${this._name}/`);
        await this.execbash(`cd ${this._name} && touch .env && npm install`);
        console.log(this._chalk.green(`Generated successfully!\nYour app is available in ${this._name} folder\nStarting your application...`));
        await this.execbash(`cd ${this._name} && npm start`);
    }

    async writeEnv() {

    }

    async genereate() {
        try {
            this.importLibs();
            this.printDescription();
        } catch (error) {
            await this.installRedlineSync();
            await this.installReactScript();
            this.importLibs();
            this.printDescription();
        }
        await this.questionProjectName();
        await this.createApp();
        this.writeEnv();

    }
}

new BuildGenerate().genereate();