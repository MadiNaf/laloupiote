package fr.laloupiote.laloupiotebackend.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.laloupiote.laloupiotebackend.entities.Nosmenus;

@Repository
public interface NosmenusRepository extends JpaRepository<Nosmenus, Long>{
	
	public List<Nosmenus> findAllByOrderByPositionAsc();
	
}