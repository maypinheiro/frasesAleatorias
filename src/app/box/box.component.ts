import { Component, OnInit } from '@angular/core';

import { ConexaoService } from '../conexao.service'

import { Frases } from '../frases';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss']
})
export class BoxComponent implements OnInit {

  frases!: Frases

  constructor(public conexaoService: ConexaoService) { }

  ngOnInit(): void {
    this.getFrase()
  }

  getFrase(){
    this.conexaoService.getFrase().subscribe(
      ( data: Frases) => {
        this.frases = data;
      }
    );
  }

  atualizar() {this.getFrase();}
}

