declare var Component: any;

@Component({
    selector: 'test',
    template: `
        ul>li.item$@3*5
    `
})
class NumberingDirectionChangeTest2 {
    constructor() {         
    }
}