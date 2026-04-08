package com.ProyectOne.ToDoProyect.Repository;

import com.ProyectOne.ToDoProyect.Model.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TareaRepository extends JpaRepository<Tarea, Long> {
}
