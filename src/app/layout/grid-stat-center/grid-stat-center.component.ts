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

    ngOnInit() {
        interface ItemInterface {
            embedUrl: string;
            type: string;
            title: string;
            id: string;
            accessToken: string;
            collapsed: boolean;
        };
        this.items = [];
        this.http.get('https://powerbilivedemobe.azurewebsites.net/api/Tiles/SampleTile')
            .subscribe(data => {
                const item: ItemInterface = {
                    embedUrl: data['embedUrl'],
                    type: data['type'],
                    title: data['type'],
                    id: data['id'],
                    accessToken: data['embedToken']['token'],
                    collapsed: false
                };
                this.items.push(item);
                this.columnendpoints = Array(4);
                const itemsper1 = Math.floor(this.items.length / this.columnendpoints.length);
                let remainder = this.items.length - (itemsper1 * this.columnendpoints.length);
                for (let i = 0; i < this.columnendpoints.length; i++) {
                    this.columnendpoints[i] = (i === 0 ? itemsper1 : this.columnendpoints[i - 1] + itemsper1);
                    if (remainder > 0) {
                        this.columnendpoints[i]++;
                        remainder--
                    }
                }
            });

    }
}
