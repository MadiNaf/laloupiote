package fr.laloupiote.laloupiotebackend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import fr.laloupiote.laloupiotebackend.entities.MenusAnglais;
import fr.laloupiote.laloupiotebackend.entities.Nosmenus;
import fr.laloupiote.laloupiotebackend.repositories.MenusAnglaisRepository;

@CrossOrigin(origins= {"*"})
@RestController
public class MenusAnglaisController {
	
	@Autowired
	MenusAnglaisRepository menusAnglaisRepo;

	@GetMapping( "menusAnglais" )
	public List<MenusAnglais> index() throws Exception{
		try {
			return menusAnglaisRepo.findAll();
		} catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"No nosmenu found"
					);
		}
	}
	
	@GetMapping( "menusAnglais/{id}" )
	public MenusAnglais show( @PathVariable("id") Long param_id) throws Exception {
		try {
			return menusAnglaisRepo.findById(param_id).get();
		} catch( Exception param_exception ) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"no nosmenus found for id: " + param_id
					);
			}
	}
	
    @PutMapping("menusAnglais/{id}")
    public MenusAnglais update(@PathVariable("id") Long param_id, @RequestBody MenusAnglais param_menusAnglais) 
		throws Exception {
    	
    	try {
	    	return menusAnglaisRepo.save(param_menusAnglais);
    	}
    	catch( Exception param_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no nosmenus found for id: " + param_id
    		);
    	}
    }
    
    @DeleteMapping("menusAnglais/{id}")
    public boolean delete(@PathVariable("id") Long param_id) throws Exception {
    	
    	try {
    		menusAnglaisRepo.deleteById(param_id);
        	return true;
    	}
    	catch( Exception param_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no nosmenus found for id: " + param_id
    		);
    	}
    	
    	
    }
	@PostMapping("menusAnglais")
	public MenusAnglais create( @RequestBody MenusAnglais menusAnglais) throws Exception{
		try {
			return menusAnglaisRepo.save(menusAnglais);

//			if( menusAnglais.getName() != "" && menusAnglais.getPrice() != ""  && menusAnglais.getCategory_name() != "" ) {
//				return nosmenuRepository.save(menusAnglais);
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
	
	

