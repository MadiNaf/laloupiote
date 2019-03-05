package fr.laloupiote.laloupiotebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.laloupiote.laloupiotebackend.entities.Horaire;

@Repository
public interface HoraireRepository extends JpaRepository<Horaire, Long>{

}
