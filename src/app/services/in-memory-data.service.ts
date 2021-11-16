import { Injectable } from '@angular/core';
import {contentList} from "../helper-files/contentDb";
import {Content} from "../helper-files/content-interface";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  constructor() { }
  createDb(): object {
    const content = contentList;
    return { content };
  }
  genId(content: Content[]): number {
    return content.length > 0
        ? Math.max(...content.map((content) => content.id)) + 1 : 2000;
  }
}
