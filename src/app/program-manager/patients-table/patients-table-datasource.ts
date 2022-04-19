import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface PatientsTableItem {
  date: string;
  patient: string;
  hospital: string;
  doctor: string;
  condition: string;
}


/**
 * Data source for the PatientsTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class PatientsTableDataSource extends DataSource<PatientsTableItem> {
  // TODO: replace this with real data from your application
  EXAMPLE_DATA: PatientsTableItem[] = [
    {date: new Date().toLocaleString().slice(0,10), patient:'Prakhar Lad', hospital: 'PGI', 'doctor': 'Sanchit Dwivedi', 'condition': 'Improved'},
    {date: new Date().toLocaleString().slice(0,10), patient:'Amit Kumar', hospital: 'PGI', 'doctor': 'Jayprakash', 'condition': 'Worsened'},
    {date: new Date().toLocaleString().slice(0,10), patient:'Prashant Chaudhary', hospital: 'PGI', 'doctor': 'Khushal Abrol', 'condition': 'Unchanged'}
  ];
  data: PatientsTableItem[] = this.EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;
  

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<PatientsTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: PatientsTableItem[]): PatientsTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: PatientsTableItem[]): PatientsTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'asc';
      switch (this.sort?.active) {
        case 'date': return compare(a.date, b.date, isAsc);
        case 'patient': return compare(a.patient, b.patient, isAsc);
        case 'hospital': return compare(a.hospital, b.hospital, isAsc);
        case 'doctor': return compare(a.doctor, b.doctor, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number | Date, b: string | number | Date, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
