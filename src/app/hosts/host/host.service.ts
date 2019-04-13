import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import * as socketIo from 'socket.io-client';
import {Host} from '../../model/host';

const SERVER_URL = 'http://localhost:4040';

@Injectable({
  providedIn: 'root'
})
export class HostService {

  private socket;

  constructor() {
    this.socket = socketIo(SERVER_URL);
  }

  public onHostUpdate(): Observable<Host> {
    return new Observable<Host>(observer => {
      this.socket.on('hosts', (data: Host) => observer.next(data));
    });
  }
}
