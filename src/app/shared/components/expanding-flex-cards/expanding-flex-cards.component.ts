import { Component, Input } from '@angular/core';
import { ProjectEntity } from '../../entity/project.entity';

@Component({
  selector: 'app-expanding-flex-cards',
  templateUrl: './expanding-flex-cards.component.html',
  styleUrls: ['./expanding-flex-cards.component.css']
})
export class ExpandingFlexCardsComponent {

  @Input() lista!: ProjectEntity[];

  agruparProyectos(): any[] {
    const cantidadPorSlide = 1; // Cantidad de cards por slide
    const proyectosAgrupados = [];

    for (let i = 0; i < this.lista.length; i += cantidadPorSlide) {
      proyectosAgrupados.push(this.lista.slice(i, i + cantidadPorSlide));
    }

    return proyectosAgrupados;
  }

  breakpoints = {
    375: {
      slidesPerView: 1,
    },
    425: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  };
}
