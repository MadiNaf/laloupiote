package fr.laloupiote.laloupiotebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import fr.laloupiote.laloupiotebackend.entities.Boisson;


public interface BoissonRepository extends JpaRepository<Boisson, Long> {

}
