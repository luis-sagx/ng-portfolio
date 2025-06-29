import { Component } from '@angular/core';
import { ProjectCard } from '../ui/project-card/project-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [ProjectCard, CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class Projects {
  projects = [
    {
      image: './../../../assets/img/sureno.png',
      title: 'Tienda de licores online "Sureño"',
      description: 'Sitio web diseñado para la venta y administración de licores de la marca "Sureño". Incluye un sistema de gestión de inventarios, carrito de compras, y pagos. Además, cuenta con un panel de administración para gestionar productos y pedidos.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Flask', 'MongoDB', 'Bootstrap'],
      link: 'https://github.com/luis-sagx/Sureno.git'
    },
    {
      image: './../../../assets/img/hospital.png',
      title: 'Sistema de gestión Hospitalaria',
      description: 'Aplicación web para la gestión de citas médicas y tratamientos. Los administradores pueden registrar pacientes, agendar citas en horarios establecidos, seguimiento de tratamientos, gestionar doctores, y generación de facturas.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'C#', 'SQL Server', 'Bootstrap'],
      link: 'https://github.com/Teo344/Sistema_Gestion_Hospitalaria.git'
    },
    {
      image: './../../../assets/img/carta.png',
      title: 'Envío de cartas "Simply Lovely"',
      description: 'Plataforma interactiva para niños que permite crear, personalizar y enviar cartas digitales a sus familiares. Incluye plantillas, grabación de voz, herramientas de personalización y envío por correo electrónico.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Node JS', 'Express', 'MongoDB'],
      link: 'https://github.com/MateoJa54/carta.git'
    }
  ];
}
