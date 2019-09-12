const exec = require('child_process').exec;

class BuildGenerate {

    constructor() {
        this._model = 'pwa_v_1';
        this._name = 'project';
        this._chalk = '';
        this._readLineAux = '';
        this._currentVersion = 'v16.8.4';
    }

    questionReactVersion() {
        // process.stdin.isTTY = process.stdout.isTTY = true;
        // let number = this._readLineAux.question(this._chalk.green(`Choose Rectjs version:\n\n1 - ${this._currentVersion}\n2 - v16.4.1\n\nIt is recomended to use ${this._currentVersion}\nWhat version do you want? 1/2: `));
        // this._model = number == 2 ? 'pwa_v_0' : 'pwa_v_1';
    }

    questionProjectName() {
        process.stdin.isTTY = process.stdout.isTTY = true;
        this._name = this._readLineAux.question(this._chalk.green('What is your app name? '));
        console.log(this._chalk.blue(`Creating ${this._name} app with reactjs version ${this._currentVersion}, please wait...`));
    }

    printDescription() {
        console.log(this._chalk.yellow("\nPwa Reactjs Generate\n"));
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
        await this.execbash(`cp -r ./README.md ./${this._name}/README.md`);
        await this.execbash(`cd ${this._name} && touch .env && npm install`);
        await this.execbash(`mv ./${this._name} ../${this._name}`);
        console.log(this._chalk.green(`Generated successfully!\nYour app is available in ${this._name} folder.`));
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
        await this.questionReactVersion();
        await this.questionProjectName();
        await this.createApp();
        this.writeEnv();

    }
}

new BuildGenerate().genereate();