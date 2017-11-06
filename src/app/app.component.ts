import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  template: `
    <div class="container">
      <table class='table'>
        <th>
          <tr>
            <td>Date format</td>
            <td>Example</td>
          </tr>
        </th>
        <tr>
          <td>medium</td>
          <td>Today is {{ today | date:'medium' }}</td>
        </tr>
        <tr>
          <td>short</td>
          <td>Today is {{ today | date:'short' }}</td>
        </tr>
        <tr>
          <td>fullDate</td>
          <td>Today is {{ today | date:'fullDate' }}</td>
        </tr>
        <tr>
          <td>longDate</td>
          <td>Today is {{ today | date:'longDate' }}</td>
        </tr>
        <tr>
          <td>mediumDate</td>
          <td>Today is {{ today | date:'mediumDate' }}</td>
        </tr>
        <tr>
          <td>shortDate</td>
          <td>Today is {{ today | date:'shortDate' }}</td>
        </tr>
        <tr>
          <td>mediumTime</td>
          <td>Today is {{ today | date:'mediumTime' }}</td>
        </tr>
        <tr>
          <td>shortTime</td>
          <td>Today is {{ today | date:'shortTime' }}</td>
        </tr>
      </table>
    </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  today = Date.now();

}
