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

import fr.laloupiote.laloupiotebackend.entities.Boisson;
import fr.laloupiote.laloupiotebackend.repositories.BoissonRepository;

@CrossOrigin(origins = {"*"})
@RestController
public class BoissonController {
	
	@Autowired
	BoissonRepository boissonRepo;
	
	
//-----------------------------------VOIR TOUT---------------------------------------------
	
	@GetMapping("boissons") 
		public List<Boisson> index() throws Exception{

			try { 
				return boissonRepo.findAll();				
			} catch (Exception param_exception) {
				throw new ResponseStatusException(
						HttpStatus.NOT_FOUND,
						"No boisson found" + param_exception.getMessage()
						);
			}
		}
	
		
		@GetMapping( "boissons/{id}" )
		public Boisson show( @PathVariable("id") Long param_id) throws Exception {
			try {
				return boissonRepo.findById(param_id).get();
			} catch( Exception param_exception ) {
				throw new ResponseStatusException(
						HttpStatus.NOT_FOUND,
						"no boisson found for id: " + param_id
						);
				}
		}
		
		
// ---------------------------------------UPDATE--------------------------------------------		
	    @PutMapping("boissons/{id}")
	    public Boisson update(@PathVariable("id") Long param_id, @RequestBody Boisson param_boisson) 
			throws Exception {
	    	
	    	try {
		    	return boissonRepo.save(param_boisson);
	    	}
	    	catch( Exception param_exception ) {
	    		throw new ResponseStatusException(
		          HttpStatus.NOT_FOUND, 
		          "no boisson found for id: " + param_id
	    		);
	    	}
	    }
	
//-----------------------------------DELETE	----------------------------------------------------    
	    @DeleteMapping("boissons/{id}")
	    public boolean delete(@PathVariable("id") Long param_id) throws Exception {
	    	
	    	try {
	    		boissonRepo.deleteById(param_id);
	        	return true;
	    	}
	    	catch( Exception param_exception ) {
	    		throw new ResponseStatusException(
		          HttpStatus.NOT_FOUND, 
		          "no boisson found for id: " + param_id
	    		);
	    	}
	    	
	    }
	    
//--------------------------------------CREATE-------------------------------------------------
		@PostMapping("boissons")
		public Boisson create( @RequestBody Boisson boisson) throws Exception{
			try {
				if ( boisson.getName() != "" || boisson.getQuantities_1() != "" || boisson.getQuantities_2() != "" || boisson.getQuantities_3() != ""
						|| boisson.getPrice_1() != "" || boisson.getPrice_2() != "" || boisson.getPrice_2() != "") {
					return boissonRepo.save(boisson);
				}else {
					throw new ResponseStatusException(
							HttpStatus.BAD_REQUEST,
							"no field should be empty"
							);
				}
			} catch( Exception param_exception) {
				throw new ResponseStatusException(
						HttpStatus.BAD_REQUEST,
						"no field should be empty"
						);
			}
			
			
		}
		
	}


