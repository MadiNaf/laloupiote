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

import fr.laloupiote.laloupiotebackend.entities.InfoContact;
import fr.laloupiote.laloupiotebackend.repositories.InfoContactRepository;

@CrossOrigin(origins= {"*"})
@RestController
public class InfoContactController {
	@Autowired
	InfoContactRepository infoContactRepository;

//	################### READ ###################
	@GetMapping("infocontact")
	public List<InfoContact> index() throws Exception{
		try {
			return infoContactRepository.findAll();
		}catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"No information found");
		}
	}
//	################### READ BY ID ###################
	@GetMapping( "infocontact/{id}" )
	public InfoContact show( @PathVariable("id") Long param_id) throws Exception {
		try {
			return infoContactRepository.findById(param_id).get();
		} catch( Exception param_exception ) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"no information found for id: " + param_id
					);
			}
	}
//	################### CREATE ###################
	@PostMapping("infocontact")
	public InfoContact create( @RequestBody InfoContact param_infoContact) throws Exception{
		try {
			if(
				(param_infoContact.getEmail() != "" && param_infoContact.getTelephone() != "")
				&& (param_infoContact.getEmail() != null && param_infoContact.getTelephone() != null) 
			){
				return infoContactRepository.save(param_infoContact);
			}else {
				throw new ResponseStatusException(
						HttpStatus.BAD_REQUEST,
						"no field should be empty");
			} 
			
		}catch( Exception param_exception) { 
				throw new ResponseStatusException(
					HttpStatus.BAD_REQUEST,
					"no field should be empty");
			}
	}
//	################### UPDATE ###################
	@PutMapping("infocontact/{id}")
	public InfoContact update( @PathVariable("id") Long param_id,
							@RequestBody InfoContact param_infoContact) throws Exception{
		try {
			return infoContactRepository.save(param_infoContact);
		} catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"No information found for id: "+ param_id
					);
		}
	}
//	################### DELETE ###################
	@DeleteMapping("infocontact/{id}")
	public boolean delete( @PathVariable("id") Long param_id) throws Exception {
		try {
			infoContactRepository.deleteById(param_id);
        	return true;
    	}
    	catch( Exception param_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no information found for id: " + param_id
    		);
    	}
	}
}
