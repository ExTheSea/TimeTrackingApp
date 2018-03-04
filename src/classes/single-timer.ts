export class SingleTimer {
    public id;
    public name: string;
    public isRunning: boolean = false;
    
    constructor() {
        this.id = new Date().valueOf();
    }
}