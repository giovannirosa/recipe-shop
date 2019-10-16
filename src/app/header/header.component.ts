import { Component, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  @Output() changePage = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onPageChanged(page) {
    this.changePage.emit(page);
  }
}
