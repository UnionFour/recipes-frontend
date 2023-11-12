export class SelectOption {
    constructor(
        readonly id: number,
        readonly title: string,
    ) {}

    toString(): string {
        return this.title;
    }
}
