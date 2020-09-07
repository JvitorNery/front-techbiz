import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  public uiBasicCollapsed:boolean = false;
  public samplePagesCollapsed:boolean = false;

  
  public sideMenu = [
    {icon: 'mdi mdi-contacts menu-icon', name: 'Usuários', route: ''},
    {icon: 'mdi mdi-home menu-icon', name: 'Dashboard', route: '/footer'},
    {icon: 'mdi mdi-format-list-bulleted menu-icon', name: 'Máquinas', route: ''},
    {icon: 'mdi mdi-message-text-outline menu-icon', name: 'Chamados', route: '/issues'},
    {icon: 'mdi mdi-chart-bar menu-icon', name: 'Financeiro', route: ''},
  ]
  
  constructor() { }

  ngOnInit() {
    const body = document.querySelector('body');

    // add class 'hover-open' to sidebar navitem while hover in sidebar-icon-only menu
    document.querySelectorAll('.sidebar .nav-item').forEach(function (el) {
      el.addEventListener('mouseover', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.add('hover-open');
        }
      });
      el.addEventListener('mouseout', function() {
        if(body.classList.contains('sidebar-icon-only')) {
          el.classList.remove('hover-open');
        }
      });
    });
  }

  


}
