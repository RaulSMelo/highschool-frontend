import { Injectable } from '@angular/core';
import { MenuSidenavModel } from './menu-sidenav.model';

@Injectable({
  providedIn: 'root'
})
export class MenuSidenavService {

  get cadastrosBasicos(): MenuSidenavModel[]{

    return [
      { link: 'cadastro-basico/cursos', text: 'Cursos' },
      { link: 'cadastro-basico/idiomas', text: 'Idiomas' },
      { link: 'cadastro-basico/midias', text: 'Mídias' },
      { link: 'cadastro-basico/niveis', text: 'Níveis' },
      { link: 'cadastro-basico/resultados', text: 'Resultados' },
      { link: 'cadastro-basico/revisoes', text: 'Revisões' },
      { link: 'cadastro-basico/tipos-de-contatos', text: 'Tipos de contatos' },
      { link: 'cadastro-basico/traducoes', text: 'Traduções' }
    ];
  }

  get colaboradores(): MenuSidenavModel[]{

    return [
      { link: 'colaboradores/cadastrar', text: 'Cadastrar colaboradores'},
      { link: 'colaboradores/consultar', text: 'Consultar colaboradores'}
    ]
  }

  get contratos(): MenuSidenavModel[]{

    return [
      { link: 'contratos/novo-e-consultar', text: 'Novo contrato | Consultar contratos'},
      { link: 'contratos/relatorios', text: 'Relatórios de contratos'}
    ]
  }
  get empresas(): MenuSidenavModel[]{

    return [
      { link: 'empresas/cadastrar', text: 'Cadastrar empresas'},
      { link: 'empresas/consultar', text: 'Consultar empresas'}
    ]
  }
  get financeiro(): MenuSidenavModel[]{

    return [
      { link: 'financeiro/cadastrar-preco-hora-aula', text: 'Cadasrtrar preço hora/aula'},
      { link: 'financeiro/dar-baixa-em-parcela', text: 'Dar baixa em parcelas'},
    ]
  }
  get interessados(): MenuSidenavModel[]{

    return [
      { link: 'interessados/cadastrar', text: 'Cadastrar interessados'},
      { link: 'interessados/consultar', text: 'Consultar interessados'},
    ]
  }
  get pauta(): MenuSidenavModel[]{

    return [
      { link: 'pauta/consultar-pauta-alunos', text: 'Consultar pauta dos alunos'}
    ]
  }
  get turma(): MenuSidenavModel[]{

    return [
      { link: 'turma/cadastrar', text: 'Cadastrar turma'}
    ]
  }


  constructor() { }
}
