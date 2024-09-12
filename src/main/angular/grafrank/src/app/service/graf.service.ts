import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Graf } from '../model/Graf';
import { MessageService } from './message.service';


@Injectable({ providedIn: 'root' })
export class GrafService {
  public href: string = "";

  private grafUrl = 'http://localhost:8080/api/grafs';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  ngOnInit() {

  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService) {

    this.href = window.location.href;
    console.log(this.href);
    if(this.href.indexOf("localhost") == -1){
      this.grafUrl = "api/grafs";
    }
  }

  /** GET heroes from the server */
  getHeroes(): Observable<Graf[]> {
    return this.http.get<Graf[]>(this.grafUrl)
      .pipe(
        tap(_ => this.log('fetched grafs')),
        catchError(this.handleError<Graf[]>('getGrafs', []))
      );
  }

  /** GET graf by id. Return `undefined` when id not found */
  getGrafNo404<Data>(id: number): Observable<Graf> {
    const url = `${this.grafUrl}/?id=${id}`;
    return this.http.get<Graf[]>(url)
      .pipe(
        map(grafs => grafs[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? 'fetched' : 'did not find';
          this.log(`${outcome} hero id=${id}`);
        }),
        catchError(this.handleError<Graf>(`getGraf id=${id}`))
      );
  }

  /** GET graf by id. Will 404 if id not found */
  getHero(id: number): Observable<Graf> {
    const url = `${this.grafUrl}/${id}`;
    return this.http.get<Graf>(url).pipe(
      tap(_ => this.log(`fetched graf id=${id}`)),
      catchError(this.handleError<Graf>(`getGraf id=${id}`))
    );
  }

  /* GET grafs whose name contains search term */
  searchHeroes(term: string): Observable<Graf[]> {
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Graf[]>(`${this.grafUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found grafs matching "${term}"`) :
        this.log(`no grafs matching "${term}"`)),
      catchError(this.handleError<Graf[]>('searchGrafs', []))
    );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the server */
  addGraf(graf: Graf): Observable<Graf> {
    return this.http.post<Graf>(this.grafUrl, graf, this.httpOptions).pipe(
      tap((newGraf: Graf) => this.log(`added graf w/ id=${newGraf.id}`)),
      catchError(this.handleError<Graf>('addGraf'))
    );
  }

  /** DELETE: delete the hero from the server */
  deleteHero(id: number): Observable<Graf> {
    const url = `${this.grafUrl}/${id}`;

    return this.http.delete<Graf>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted graf id=${id}`)),
      catchError(this.handleError<Graf>('deleteGraf'))
    );
  }

  /** PUT: update the hero on the server */
  updateHero(graf: Graf): Observable<any> {
    return this.http.put(this.grafUrl, graf, this.httpOptions).pipe(
      tap(_ => this.log(`updated graf id=${graf.id}`)),
      catchError(this.handleError<any>('updateGraf'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
}
