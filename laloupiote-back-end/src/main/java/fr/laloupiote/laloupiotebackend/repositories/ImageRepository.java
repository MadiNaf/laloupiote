package fr.laloupiote.laloupiotebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.laloupiote.laloupiotebackend.entities.Image;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long>{
	public Image findByName(String param_name);
}
