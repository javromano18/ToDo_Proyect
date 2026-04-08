package com.ProyectOne.ToDoProyect.Service;

import com.ProyectOne.ToDoProyect.Model.Tarea;
import com.ProyectOne.ToDoProyect.Repository.TareaRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TareaService {
    private final TareaRepository repo;

    public TareaService(TareaRepository repo){
        this.repo = repo;
    }

    public List<Tarea> listar(){
        return repo.findAll();
    }

    public Tarea crear(Tarea t){
        return repo.save(t);
    }

    public Tarea actualizar(Long id, Tarea t){
        Tarea existente = repo.findById(id).orElseThrow(() -> new EntityNotFoundException("La tarea con id " + id + " no existe"));
        existente.setTitulo(t.getTitulo());
        existente.setDescripcion(t.getDescripcion());
        existente.setCompletada(t.isCompletada());
        return repo.save(existente);
    }

    public void eliminar(Long id){
        repo.deleteById(id);
    }





}
