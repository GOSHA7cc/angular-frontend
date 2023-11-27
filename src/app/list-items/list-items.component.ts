import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-items',
  template: `
    <div>
      <h2>Lista de Itens</h2>
      <ul>
        <li *ngFor="let item of items">{{ item }}</li>
      </ul>
    </div>
  `,
  styles: [
    `
      ul {
        list-style-type: none;
        padding: 0;
      }

      li {
        margin-bottom: 10px;
        border: 1px solid #ccc;
        padding: 10px;
        background-color: #f9f9f9;
      }
    `,
  ],
})
export class ListItemsComponent {
  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
}
