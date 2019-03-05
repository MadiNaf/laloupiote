package fr.laloupiote.laloupiotebackend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import fr.laloupiote.laloupiotebackend.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long>{
	public User findByEmailAndPassword( String param_email, String param_password);
	public User findByApiKey( String param_apiKey );
}
