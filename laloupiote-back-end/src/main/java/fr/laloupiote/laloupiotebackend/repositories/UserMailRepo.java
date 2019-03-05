package fr.laloupiote.laloupiotebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.laloupiote.laloupiotebackend.entities.UserMail;

@Repository
public interface UserMailRepo extends JpaRepository<UserMail, Long>{
	
	

}
