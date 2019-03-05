package fr.laloupiote.laloupiotebackend.controllers;

import java.io.File;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.server.ResponseStatusException;

import com.fasterxml.jackson.annotation.JsonView;

import fr.laloupiote.laloupiotebackend.entities.Image;
import fr.laloupiote.laloupiotebackend.entities.InfoContact;
import fr.laloupiote.laloupiotebackend.entities.View;
import fr.laloupiote.laloupiotebackend.repositories.ImageRepository;

@CrossOrigin( origins= {"*"})
@RestController
public class ImageController {
	@Autowired
	ImageRepository imageRepository;

//	################### READ (DOWNLOAD ALL)###################
	@JsonView(View.FileInfo.class)
	@GetMapping("images/all")
	public List<Image> getAllImages() throws Exception{
		try {
			return imageRepository.findAll();
		}catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"No file found");
		}
	}
//	################### READ BY ID (DOWNLOAD BY ID)###################
	@GetMapping("images/download/{id}")
	public Image  getImage( @PathVariable("id") Long param_id) throws Exception{
		try {
			return imageRepository.findById(param_id).get();
		
		} catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"No file found for id: "+ param_id
					);
		}
		
	}

//	################### CREATE CREATE (UPLOAD)###################
	@PostMapping(value="images/upload")
	public String uploadImage( @RequestParam("file") MultipartFile transferedFile) throws Exception{
		try {
			
			File tmp = new File("../laloupiote/src/assets/img/carrousel/").getCanonicalFile();
			
			String destination = tmp.getPath() + "/" + transferedFile.getOriginalFilename();
			
			File data = new File(destination);
			
			transferedFile.transferTo(data);
			
			System.out.println(destination);

			Image image = new Image(transferedFile.getOriginalFilename(), destination);
			imageRepository.save(image);
			
			return destination;
			
		}catch( Exception param_exception) { 
				throw new ResponseStatusException(
					HttpStatus.BAD_REQUEST,
					"No file found");
			}
	}
//	################### UPDATE ###################
	@PutMapping("images/{id}")
	public Image update( @PathVariable("id") Long param_id,
							@RequestBody Image param_carousel) throws Exception{
		try {
			return imageRepository.save(param_carousel);
		} catch( Exception param_exception) {
			throw new ResponseStatusException(
					HttpStatus.NOT_FOUND,
					"No image found for id: "+ param_id
					);
		}
	}
//	################### DELETE ###################
	@DeleteMapping("images/{id}")
	public boolean delete( @PathVariable("id") Long param_id) throws Exception {
		try {
			imageRepository.deleteById(param_id);
        	return true;
    	}
    	catch( Exception param_exception ) {
    		throw new ResponseStatusException(
	          HttpStatus.NOT_FOUND, 
	          "no image found for id: " + param_id
    		);
    	}
	}
}
