import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-grid-stat-center',
  templateUrl: './grid-stat-center.component.html',
  styleUrls: ['./grid-stat-center.component.scss'],
    animations: [routerTransition()]
})
export class GridStatCenterComponent implements OnInit  {

    items: Array<any>;
    columnendpoints: Array<any>;

    constructor(private http: HttpClient) {

    }
    columncalc() {
        this.columnendpoints = Array(2);
        const itemsper1 = Math.floor(this.items.length / this.columnendpoints.length);
        let remainder = this.items.length - (itemsper1 * this.columnendpoints.length);
        for (let i = 0; i < this.columnendpoints.length; i++) {
            this.columnendpoints[i] = (i === 0 ? itemsper1 : this.columnendpoints[i - 1] + itemsper1);
            if (remainder > 0) {
                this.columnendpoints[i]++;
                remainder--
            }
        }
    }
    itemsort() {
        this.items.sort((t1: any, t2: any) => {
            if (t1.index > t2.index) {
                return 1;
            }

            if (t1.nome < t2.nome) {
                return -1;
            }

            return 0;
        });
        this.items.forEach((obj: any, objindex: number) => {
            obj.index = objindex;
        })
    }

    onCardDrop(e: any) {
        const dragObj = e.dragData;
        const oldPos = dragObj.index;
        const newPos = e.nativeEvent.target.closest('.card-container').dataset.indexNumber;
        if (newPos < oldPos) {
            dragObj.index = newPos - 0.5;
        }else {
            dragObj.index = newPos + 0.5;
        }
        this.itemsort();
        this.columncalc();
    }

    ngOnInit() {
        interface ItemInterface {
            embedUrl: string;
            type: string;
            title: string;
            id: string;
            accessToken: string;
            collapsed: boolean;
            index: number
        };
        this.items = [];
        this.http.get('https://powerbilivedemobe.azurewebsites.net/api/Tiles/SampleTile')
            .subscribe(data => {
                const item1: ItemInterface = {
                    embedUrl: data['embedUrl'],
                    type: data['type'],
                    title: data['type'],
                    id: data['id'],
                    accessToken: data['embedToken']['token'],
                    collapsed: false,
                    index: 1
                };
                this.items.push(item1);
                const item2: ItemInterface = {
                    embedUrl: data['embedUrl'],
                    type: data['type'],
                    title: 'test2',
                    id: data['id'],
                    accessToken: data['embedToken']['token'],
                    collapsed: false,
                    index: 2
                };
                this.items.push(item2);
                this.itemsort();
                this.columncalc();
            });
        this.http.get('http://localhost:8861/api/PowerBIToken/')
            .subscribe(data => {
                console.log(data['token']);
                console.log(data['embedUrl']);
                const item: ItemInterface = {
                    embedUrl: data['embedUrl'],
                    type: 'report',
                    title: 'Report',
                    id: data['reportId'],
                    accessToken: data['token'],
                    collapsed: false,
                    index: 3
                };
                this.items.push(item);
                this.columncalc();
            });

    }
}
