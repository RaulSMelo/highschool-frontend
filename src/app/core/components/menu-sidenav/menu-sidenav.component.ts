import { Component, OnInit } from '@angular/core';
import { MenuSidenavModel } from './shared/menu-sidenav.model';
import { MenuSidenavService } from './shared/menu-sidenav.service';

@Component({
  selector: 'app-menu-sidenav',
  templateUrl: './menu-sidenav.component.html',
  styleUrls: ['./menu-sidenav.component.scss']
})
export class MenuSidenavComponent implements OnInit {

  subMenusCadastrosBasicos: MenuSidenavModel[] = [];
  subMenusColaboradores: MenuSidenavModel[] = [];
  subMenusContratos: MenuSidenavModel[] = [];
  subMenusEmpresas: MenuSidenavModel[] = [];
  subMenusFinanceiro: MenuSidenavModel[] = [];
  subMenusInteressados: MenuSidenavModel[] = [];
  subMenusPauta: MenuSidenavModel[] = [];
  subMenusTurma: MenuSidenavModel[] = [];

  constructor(private menuSidenavService: MenuSidenavService ) { }



  ngOnInit(): void {

    this.subMenusCadastrosBasicos = this.menuSidenavService.cadastrosBasicos;
    this.subMenusColaboradores = this.menuSidenavService.colaboradores;
    this.subMenusContratos = this.menuSidenavService.contratos;
    this.subMenusEmpresas = this.menuSidenavService.empresas;
    this.subMenusFinanceiro = this.menuSidenavService.financeiro;
    this.subMenusInteressados = this.menuSidenavService.interessados;
    this.subMenusPauta = this.menuSidenavService.pauta;
    this.subMenusTurma = this.menuSidenavService.turma;
  }

}
