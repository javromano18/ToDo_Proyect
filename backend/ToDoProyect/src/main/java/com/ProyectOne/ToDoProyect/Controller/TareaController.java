package com.ProyectOne.ToDoProyect.Controller;

import com.ProyectOne.ToDoProyect.Model.Tarea;
import com.ProyectOne.ToDoProyect.Service.TareaService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/tareas")
public class TareaController {
    private final TareaService service;

    public TareaController(TareaService service){
        this.service = service;
    }

    @GetMapping
    public List<Tarea> listar(){
        return service.listar();
    }

    @PostMapping
    public Tarea crear(@RequestBody Tarea t){
        return service.crear(t);
    }

    @PutMapping("/{id}")
    public Tarea actualizar(@PathVariable Long id, @RequestBody Tarea t){
        return service.actualizar(id, t);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id){
        service.eliminar(id);
    }

}
