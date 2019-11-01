import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpService, Post} from './app.service';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpService]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
  it('should get posts', inject([HttpService, HttpTestingController],
    (service: HttpService, backend: HttpTestingController) => {
      const mockData = [
        { userId: 1, id: 1, title: '', body: '' },
        { userId: 2, id: 2, title: '', body: '' },
        { userId: 2, id: 3, title: '', body: '' }
      ] as Post[];

      service.get('api/fake').subscribe((posts) => {
        expect(posts).toEqual(mockData);
      });
      backend.expectOne({
        method: 'Get',
        url: 'api/fake'
      })
        .flush(mockData);
    }
  ));

  it('should have true type', inject([HttpService, HttpTestingController],
    (service: HttpService, backend: HttpTestingController) => {
      const mockData = [{userId: 1, id: 1, title: '', body: ''}]  as Post[];

      service.get('api/fake').subscribe((posts) => {
        expect(typeof posts).toEqual(typeof mockData);
        console.log(`Received posts type:${typeof posts}`);
        console.log(`Mockdata type:${typeof mockData}`);
      });
      backend.expectOne({
        method: 'Get',
        url: 'api/fake'
      })
        .flush(mockData);
    }
  ));
});
