import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Fact } from '../model/fact.model';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss'],
})
export class BrowseComponent implements OnInit {
  facts: Array<Fact>;
  selectedCategory: string;
  searchterm: string;
  perPage: number = 11;
  hits: number;
  currentPage: number = 1;
  totalCount: number;
  data = new Date();
  recommendedSnacks: Array<any>;
  recommendationHeadline: string;

  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((queryParams) => {
      const q = queryParams.get('q');
      const c = queryParams.get('c');

      if (q != this.searchterm || c != this.selectedCategory) {
        this.searchterm = q;
        this.selectedCategory = c;
        this.fetch(q, c);
      }
    });

    const q = this.route.snapshot.queryParamMap.get('q');
    const c = this.route.snapshot.queryParamMap.get('c');
    this.fetch(q, c);
    this.dataService.getFeaturedSnacks().subscribe((response) => {
      this.recommendedSnacks = response.facts;
      this.recommendationHeadline = response.name;
    });
  }

  async fetch(q: string, c: string) {
    if (q) {
      const res = await this.dataService.search(q, c, this.perPage).toPromise();
      this.facts = res['facts'];
      this.hits = await this.dataService.getSearchCount(q, c).toPromise();
    } else {
      const res = await this.dataService.getData(c, this.perPage).toPromise();
      this.facts = res['facts'];
      this.hits = await this.dataService.getFactCount(c).toPromise();
    }
  }

  async loadMore() {
    let newFacts: Array<Fact>;
    console.log(this.currentPage);
    console.log(this.hits);

    if (this.searchterm && this.searchterm != '') {
      newFacts = await this.dataService
        .search(
          this.searchterm,
          this.selectedCategory,
          this.perPage,
          this.currentPage * this.perPage
        )
        .pipe(map((res) => res['facts']))
        .toPromise();
    } else {
      newFacts = await this.dataService
        .getData(this.selectedCategory, this.perPage, this.currentPage + 1)
        .pipe(map((res) => res['facts']))
        .toPromise();
    }
    this.currentPage += 1;
    this.facts = this.facts.concat(newFacts);
  }

  clearSearch() {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { q: '' },
      queryParamsHandling: 'merge',
    });
  }
}
