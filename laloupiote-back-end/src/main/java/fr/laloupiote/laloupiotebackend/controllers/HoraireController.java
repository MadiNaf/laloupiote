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

import fr.laloupiote.laloupiotebackend.entities.Horaire;
import fr.laloupiote.laloupiotebackend.repositories.HoraireRepository;


@CrossOrigin(origins= {"*"})
@RestController
public class HoraireController {
	@Autowired
	HoraireRepository horaireRepository;

//	##################################################### GET ( READ ) #####################################################
	@GetMapping( "horaires" )
	public List<Horaire> index() throws Exception{
		try {
			return horaireRepository.findAll();
		} catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"No horaire found"
					);
		}
	}

//	##################################################### GET ( READ BY ID ) #####################################################
	@GetMapping( "horaires/{id}" )
	public Horaire show( @PathVariable("id") Long param_id) throws Exception {
		try {
			return horaireRepository.findById(param_id).get();
		} catch( Exception param_exception ) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"no horaire found for id: " + param_id
					);
			}
	}

//	##################################################### POST ( CREATE ) #####################################################
	@PostMapping("horaires")
	public Horaire create( @RequestBody Horaire param_horaire) {
//	ici on vérifie si le resto est ouvert le matin et l'après-midi, dans ce cas aucun champ ne doit être vide ou nul


			if( param_horaire.isM_state() && param_horaire.isA_state() ) {
				
				if( param_horaire.getDay() != "" && param_horaire.getHm_opening() != ""  
						&& param_horaire.getHm_closing() != "" && param_horaire.getMm_opening() != "" 
						&& param_horaire.getMm_closing() != "" && param_horaire.getHa_opening() != "" 
						&& param_horaire.getHa_closing() != "" && param_horaire.getMa_opening() != ""
						
						&& param_horaire.getMa_closing() != "" && param_horaire.getDay() != null 
						&& param_horaire.getHm_opening() != null  && param_horaire.getHm_closing() != null
						&& param_horaire.getMm_opening() != null && param_horaire.getMm_closing() != null
						&& param_horaire.getHa_opening() != null && param_horaire.getHa_closing() != null 
						&& param_horaire.getMa_opening() != null && param_horaire.getMa_closing() != null) {
					
						try {
							return horaireRepository.save(param_horaire);
							
						}catch( Exception param_exception ) {
							throw new ResponseStatusException(
									HttpStatus.BAD_REQUEST,
									"no field should be empty"
									);
						}
					} else {
						throw new ResponseStatusException(
								HttpStatus.BAD_REQUEST,
								"no field should be empty"
								);
					}
			}
			
//	Dans le cas ou le resto est ouvert que le matin on vérifie seulement les horaires du matin		
			if( param_horaire.isM_state() && param_horaire.isA_state() == false) {	
				
				if( param_horaire.getDay() != "" && param_horaire.getHm_opening() != ""  
						&& param_horaire.getHm_closing() != "" && param_horaire.getMm_opening() != "" 
						&& param_horaire.getMm_closing() != "" && param_horaire.getDay() != null
						&& param_horaire.getHm_opening() != null && param_horaire.getHm_closing() != null 
						&& param_horaire.getMm_opening() != null && param_horaire.getMm_closing() != null){
						try {
							return horaireRepository.save(param_horaire);
							
						}catch( Exception param_exception ) {
							throw new ResponseStatusException(
									HttpStatus.BAD_REQUEST,
									"some fields must not be empty"
									);
						}
					}else {
						throw new ResponseStatusException(
								HttpStatus.BAD_REQUEST,
								"some fields must not be empty"
								);
					}
			}
//	Dans le cas ou le resto est ouvert que l'après-midi on vérifie seulement les horaires de l'après-midi					
			if( param_horaire.isM_state() == false && param_horaire.isA_state() ) {
				
				if( param_horaire.getDay() != "" && param_horaire.getHa_opening() != ""  
						&& param_horaire.getHa_closing() != "" && param_horaire.getMa_opening() != "" 
						&& param_horaire.getMa_closing() != "" && param_horaire.getDay() != null
						&& param_horaire.getHa_opening() != null && param_horaire.getHa_closing() != null 
						&& param_horaire.getMa_opening() != null && param_horaire.getMa_closing() != null) 
					{
						try {
							return horaireRepository.save(param_horaire);
							
						}catch( Exception param_exception ) {
							throw new ResponseStatusException(
									HttpStatus.BAD_REQUEST,
									"some fields must not be empty"
									);
						}
					}else {
						throw new ResponseStatusException(
								HttpStatus.BAD_REQUEST,
								"some fields must not be empty"
								);
					}
				
//	dans le cas où il n'y a pas d'ouverture le matin ni l'après-midi on retourne l'objet, pour récupérer le jour et les états des horaires.			
			}
				return horaireRepository.save(param_horaire);

	}

//	##################################################### PUT ( UPDATE ) #####################################################
    @PutMapping("horaires/{id}")
    public Horaire update(@PathVariable("id") Long param_id, @RequestBody Horaire param_horaire) 
		throws Exception {
    	
    	try {
	    	return horaireRepository.save(param_horaire);
    	}
    	catch( Exception param_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no horaire found for id: " + param_id
    		);
    	}
    }
    
//	##################################################### DELETE ( DELETE ) #####################################################
    @DeleteMapping("horaires/{id}")
    public boolean delete(@PathVariable("id") Long param_id) throws Exception {
    	
    	try {
    		horaireRepository.deleteById(param_id);
        	return true;
    	}
    	catch( Exception param_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no horaire found for id: " + param_id
    		);
    	}
    	
    	
    }

		
}
