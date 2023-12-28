import { ISelectItem } from './selectItem.model';

export class Category implements ISelectItem {
    constructor(
        readonly title: string,
        readonly value: string,
    ) {}

    toString(): string {
        return this.title
    }

}

export const categories: Category[] = [
    new Category('Вегатерианское', 'vegetarian'),
    new Category('Веганское', 'vegan'),
    new Category('Без глютена', 'glutenFree'),
    new Category('Без молока', 'dairyFree'),
    new Category('Здоровое меню', 'veryHealthy'),
    new Category('Дешевое', 'cheap'),
    new Category('Популярное', 'veryPopular'),
];
