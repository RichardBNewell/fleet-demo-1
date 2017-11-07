import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import {HttpClient} from "@angular/common/http";

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
        let item;
        this.items = new Array();
        this.http.get('https://powerbilivedemobe.azurewebsites.net/api/Tiles/SampleTile')
            .subscribe(data => {
                item = new Object();
                item['embedUrl'] = data['embedUrl'];
                item['type'] = data['type'];
                item['title'] = data['type'];
                item['id'] = data['id'];
                item['accessToken'] = data['embedToken']['token'];
                item['collapsed'] = false;
                this.items.push(item);
                this.columnendpoints = Array(4)
                const itemsper1 = Math.floor(this.items.length / this.columnendpoints.length)
                let remainder = this.items.length - (itemsper1 * this.columnendpoints.length)
                for (let i = 0; i < this.columnendpoints.length; i++) {
                    this.columnendpoints[i] = (i === 0 ? itemsper1 : this.columnendpoints[i - 1] + itemsper1)
                    if (remainder > 0) {
                        this.columnendpoints[i]++
                        remainder--
                    }
                }
            });

    }
}
