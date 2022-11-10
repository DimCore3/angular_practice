import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
    cardDate: Date = new Date;
    title: string = 'My Card Title';
    content: string = 'Абсолютно случайный текст';
    textColor: 'blue' | 'green' | 'red' = 'green';
    colorList: Array<string> = [
        'blue', 'green', 'red'
    ]

    ngOnInit() {
        console.log('OnInit in card')
    };

    changeTitle() {
        this.title = 'Название изменено на новое.'
    };

    inputChangeTitle(value: any) {
        this.title = value;
    };

    getInfo(): string {
        return 'This is info!'
    };

    changeHandler() {
        console.log(this.title)
    };

    changeTextColor(color:any) {
        this.textColor = color;
    }
}