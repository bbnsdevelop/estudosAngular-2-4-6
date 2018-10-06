import { Injectable, EventEmitter } from "@angular/core";
import { LogService } from "../../shared/log.service";


@Injectable()
export class CursoService{
    private cursos: string[] = ['java', 'angular 2', 'typescript'];

    emitirCursoCriado = new EventEmitter<string>();
    static emitirCriouCurso = new EventEmitter<string>();

    constructor(private logService: LogService){

    }

    getCursos() :string[] {
        this.logService.consoleLog("Obtendo lista de cursos");
        return this.cursos;
    }

    addCursos(curso: string) {
        this.logService.consoleLog("Criando um novo curso {" + curso +"}");
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursoService.emitirCriouCurso.emit(curso);
    }
}