package fr.laloupiote.laloupiotebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.laloupiote.laloupiotebackend.entities.MenusAnglais;

@Repository
public interface MenusAnglaisRepository extends JpaRepository<MenusAnglais, Long>{
	
	

}
