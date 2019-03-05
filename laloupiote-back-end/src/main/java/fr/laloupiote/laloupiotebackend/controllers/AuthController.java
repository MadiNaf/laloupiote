package fr.laloupiote.laloupiotebackend.controllers;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import fr.laloupiote.laloupiotebackend.entities.User;
import fr.laloupiote.laloupiotebackend.repositories.UserRepository;
import fr.laloupiote.laloupiotebackend.utils.UtilTools;

@CrossOrigin( origins="*" )
@RestController
public class AuthController {

	@Autowired
	private UserRepository userRepository;
	
	/**
	 * Méthode qui gère l'authentification, l'utilisateur envoie uniquement un email et un password.
	 * La méthode récupère ces données sous forme d'un objet de type User ( qui possède les mêmes propriétés )
	 */
	@PostMapping("/auth")
	public User creat(@RequestBody User param_user,
			HttpServletResponse param_response
			) throws Exception {
		
		/** ###############################################################################
		 *  ici on va chercher l'utilisateur correspondant 
		 *  au couple email / password
		 */
		User current =  userRepository.findByEmailAndPassword(
											param_user.getEmail(),
											UtilTools.genPasswd( param_user.getPassword())
											);
		if( current == null) {
			throw new ResponseStatusException(
					HttpStatus.UNAUTHORIZED,
					"not a valid user"
					);
		}else {
			UtilTools.refreshToken(current, param_response);
			current.setConnected( true );
			
			userRepository.saveAndFlush(current);
			return current;
		}
	}
		
}
