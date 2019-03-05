package fr.laloupiote.laloupiotebackend.controllers;

import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import fr.laloupiote.laloupiotebackend.entities.User;
import fr.laloupiote.laloupiotebackend.repositories.UserRepository;
import fr.laloupiote.laloupiotebackend.utils.UtilTools;

@CrossOrigin( origins="*")
@RestController
public class UserControllers {
	@Autowired
	private UserRepository userRepository;
	
    /** ###########################################################################
    * READ ALL USERS 
	* On sécurise l'accès à cette fonctionnalité / url / endpoint
	* par le biais d'une apikey. Cette apikey correspond à un utilisateur, si l'utilisateur
	* est SUPER ADMIN (code 200 de la propriété rôle ), alors il a le droit d'accéder aux données
	*/
	@GetMapping( "users/all/{apiKey}")
	public List<User> getAll( 
			@PathVariable("apiKey") String param_apiKey,
			@RequestHeader("X-TOKEN") String param_token,
			HttpServletResponse param_response)
		throws Exception{
		
			// On va chercher l'utilisateur par son apikey
			User asker = userRepository.findByApiKey(param_apiKey);
			
			// on définit les rôles autorisés à consulter la ressource
	    	String[] roles = {"200"};
	    	
	    	// On commence par verifier que l'utilisateur n'est pas null 
	    	// puis s'il possède le bon rôle et si son token est valide 
			if( asker != null && UtilTools.hasRole(asker, roles) && UtilTools.isValidToken(asker, param_token) ) {
				//	On actualise le token
				UtilTools.refreshToken(asker, param_response);
				
				//Comme on a actualiser le token on sauvegarde l'utilisateur
				userRepository.saveAndFlush(asker);
				
				return userRepository.findAll();
			}else { 
			throw new ResponseStatusException(
					HttpStatus.METHOD_NOT_ALLOWED, 
			        "bad role"
					);
			}
	}

	/** ###########################################################################
	 * READ USER BY ID
	 */
	@GetMapping("users/{id}/{apiKey}")
	public User getById( 
			@PathVariable("id") Long param_id,
			@RequestBody User param_user,
			@PathVariable("apiKey") String param_apiKey,
			@RequestHeader("X-TOKEN") String param_token,
			HttpServletResponse param_response
			) throws Exception{
		
			// On va chercher l'utilisateur par son apikey
			User asker = userRepository.findByApiKey(param_apiKey);
			
			// on définit les rôles autorisés à consulter la ressource
	    	String[] roles = {"200"};
	    	
	    	/**	#################################################################################
	    	 * On verifie que le token de l'utilisateur et valide 
	    	 * que l'utilisateur possede le bon role
	    	 */
	    	if( UtilTools.isValidToken(asker, param_token) &&
	    		( UtilTools.hasRole(asker, roles) || UtilTools.isConcernedUser(asker, param_id) )
	    			) {
	    		try {
	    			//	On met à jour le token
	    			UtilTools.refreshToken( asker, param_response);
	    			
	    			//	On sauvegarde l'uilisateur apres modification de son token 
	    			userRepository.saveAndFlush(asker);
	    			
	    			return userRepository.findById(param_id).get();
		    	}catch( Exception param_exception ) {
					throw new ResponseStatusException(
							HttpStatus.NOT_FOUND,
							"no user found for id: " + param_id
							);
				}
	    	}else {
	    		throw new ResponseStatusException(
	    		HttpStatus.UNAUTHORIZED,
	    		"bad role"
	    		);
	    	}
	}
	
	//	###########################################################################
	@PostMapping("users")
	public User create(
			@RequestBody User param_user,
			@PathVariable("apiKey") String param_apiKey, 
        	@RequestHeader("X-TOKEN") String param_token, 
        	HttpServletResponse p_response
       ) throws Exception {
		
			// on va chercher l'utilisateur par le biais de son apikey
	    	User asker = userRepository.findByApiKey(param_apiKey);
	    	
	    	// on définit les rôles autorisés à consulter la ressource
	    	String[] roles = {"200"};
    	
	    	// si le token est valide et que l'utilisateur possède le bon rôle
	    	if( UtilTools.isValidToken(asker, param_token) && UtilTools.hasRole(asker, roles)) {
	    		
	    		// on rafraîchit le token
	    		UtilTools.refreshToken(asker, p_response);
	    		// on sauvegarde l'utilisateur, puisqu'on a changé son token
	    		userRepository.saveAndFlush(asker);
	    		
	    		// on sauvegarde l'utilisateur et on retourne une réponse. 
	    		
	    		param_user.setApiKey(UtilTools.genApikey());
	    		
//	    		Cryptage du mots de pass envoyé par l'utilisateur
				String newPw = param_user.getPassword();
				String newApiKey = UtilTools.genApikey();
				String newToken = UtilTools.genNewToken();
				
				param_user.setPassword( UtilTools.genPasswd(newPw));
				param_user.setApiKey(newApiKey);
				param_user.setToken(newToken);
				param_user.setRole("100");
				
	    		return userRepository.save(param_user);
	    	}
	    	else { 
    		// sinon on retourne un message précisant que l'utilisateur n'a pas le droit 
    		// de consulter la ressource demandée
			throw new ResponseStatusException(
	          HttpStatus.UNAUTHORIZED, 
	          "bad role" 
			);
	    	}
	    	
	}
	
	//	###########################################################################
	@PutMapping("users/{id}/{apiKey}")
	public User update(
			@PathVariable("id") Long param_id,
			@RequestBody User param_user,
			@PathVariable("apiKey") String param_apiKey,
			@RequestHeader("X-TOKEN") String param_token,
			HttpServletResponse param_response)
		throws Exception{
			// On va chercher l'utilisateur par son apikey
			User asker = userRepository.findByApiKey(param_apiKey);
			
			// on définit les rôles autorisés à consulter la ressource
	    	String[] roles = {"200"};

			if( UtilTools.isValidToken(asker, param_token) &&
	    		( UtilTools.hasRole(asker, roles) || UtilTools.isConcernedUser(asker, param_id) )
	    	) {
		
				try {
					//	On met à jour les données de l'utilisateur concerné
					User current = userRepository.findById(param_id).get();
					
					if( param_user.getEmail() != null ) {
						current.setEmail(param_user.getEmail() );
					}
					
					if( param_user.getPassword() != null ) {
						current.setPassword(param_user.getPassword() );
					}
			
					// on ne peut modifier le rôle que si l'on est SUPER ADMIN
					if( param_user.getRole() != null && UtilTools.hasRole( asker, roles) ) {
						current.setRole( param_user.getRole() );
					}
					
					//	On met à jour le token 
					UtilTools.refreshToken(asker, param_response);
					
					return userRepository.save( param_user );
				} catch( Exception param_exception) {
					throw new ResponseStatusException(
							HttpStatus.NOT_FOUND,
							"no user found for id: " + param_id
							);
				}
		}else {
			// sinon on retourne un message précisant que l'utilisateur 
    		// n'a pas le droit de consulter la ressource demandée
    		throw new ResponseStatusException(
	          HttpStatus.UNAUTHORIZED, 
	          "bad role" 
    		);
			
		}
	}

	//	###########################################################################
	@DeleteMapping("users/{id}/{apiKey}")
	public boolean delete( 
			@PathVariable("id") Long param_id,
			@PathVariable("apiKey") String param_apiKey,
			@RequestHeader("X-TOKEN") String param_token,
			HttpServletResponse param_response
		)throws Exception{
			// On va chercher l'utilisateur par son apikey
	    	User asker = userRepository.findByApiKey(param_apiKey);
    	
	    	// on définit les rôles autorisés à consulter la ressource
	    	String[] roles = {"200"};
    	
    	// si le token est valide et que l'utilisateur possède le bon rôle
    	if( UtilTools.isValidToken(asker, param_token) && UtilTools.hasRole(asker, roles )) {
	    	try {
	    		
    	    	// on rafraîchit le token
        		UtilTools.refreshToken(asker, param_response);
        		
        		// on sauvegarde l'utilisateur, puisqu'on a changé son token
        		userRepository.saveAndFlush(asker);
        		
        		// puis on supprime l'utilisateur concerné
	    		userRepository.deleteById(param_id);
	    		
	    		// et on retourne true
	        	return true;
	    	}
	    	catch( Exception p_exception ) {
	    		
        		// si on a échoué à trouver l'utilisateur concerné, 
        		// alors on retourne un code "http not found"
	    		throw new ResponseStatusException(
		          HttpStatus.NOT_FOUND, 
		          "no user found for id: " + param_id
	    		);
	    	}
    	}
    	else {
    		// sinon on retourne un message précisant que l'utilisateur 
    		// n'a pas le droit de consulter la ressource demandée
    		throw new ResponseStatusException(
	          HttpStatus.UNAUTHORIZED, 
	          "bad role" 
    		);
    	}
    	
	}
}
