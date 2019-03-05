package fr.laloupiote.laloupiotebackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import fr.laloupiote.laloupiotebackend.entities.Nosmenus;
import fr.laloupiote.laloupiotebackend.repositories.NosmenusRepository;

@CrossOrigin(origins= {"*"})
@RestController
public class NosmenusController {
	@Autowired
	NosmenusRepository nosmenuRepository;
	
	@GetMapping( "nosmenus" )
	public List<Nosmenus> index() throws Exception{
		try {
			//ordonne les éléments selon le nombre "position" c'est une variable
			return nosmenuRepository.findAllByOrderByPositionAsc();
		} catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"No nosmenu found"
					);
		}
	}
	
	@GetMapping( "nosmenus/{id}" )
	public Nosmenus show( @PathVariable("id") Long param_id) throws Exception {
		try {
			return nosmenuRepository.findById(param_id).get();
		} catch( Exception param_exception ) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"no nosmenus found for id: " + param_id
					);
			}
	}
	
    @PutMapping("nosmenus/{id}")
    public Nosmenus update(@PathVariable("id") Long param_id, @RequestBody Nosmenus param_nosmenu) 
		throws Exception {
    	
    	try {
	    	return nosmenuRepository.save(param_nosmenu);
    	}
    	catch( Exception param_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no nosmenus found for id: " + param_id
    		);
    	}
    }
    
    @DeleteMapping("nosmenus/{id}")
    public boolean delete(@PathVariable("id") Long param_id) throws Exception {
    	
    	try {
    		nosmenuRepository.deleteById(param_id);
        	return true;
    	}
    	catch( Exception param_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no nosmenus found for id: " + param_id
    		);
    	}
    	
    	
    }
	@PostMapping("nosmenus")
	public Nosmenus create( @RequestBody Nosmenus nosmenu) throws Exception{
		try {
			return nosmenuRepository.save(nosmenu);

//			if( nosmenu.getName() != "" && nosmenu.getPrice() != ""  && nosmenu.getCategory_name() != "" ) {
//				return nosmenuRepository.save(nosmenu);
//			}else {
//				throw new ResponseStatusException(
//						HttpStatus.BAD_REQUEST,
//						"no field should be empty"
//						);
//			}
		} catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.BAD_REQUEST,
					"no field should be empty"
					);
		}
		
	}
	
}