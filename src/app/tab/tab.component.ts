import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

        let tabLi = document.querySelectorAll(".tabMenu li");
        let tabs = document.querySelectorAll(".tabMenu li span");

        tabs.forEach( tab => {  
                        
            tab.addEventListener('click', function(event) {        

                // not active tabs at the moment
                tabLi.forEach(t => {                       
                    t.setAttribute('class', 'tabLi');
                })

                let tabContent = document.querySelectorAll(".tabContent");
                tabContent.forEach( element => {

                    // select the second class from tabContent
                    let className = element ? element.className.split(" ") : null;
                    // hide or show tabContent
                    element.classList.contains( tab.className ) ? tab.parentElement?.setAttribute('class', 'tabLi active') : null;
                    element.classList.contains( tab.className ) ? element.classList.add('active') : element.classList.remove('active');

                });
            })

                
        });
  }

}
